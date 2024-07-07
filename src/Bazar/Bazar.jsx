import { useEffect, useState } from "react";

const Bazar = () => {

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [item, setItem] = useState("");
    const [serial, setSerial] = useState(1);
    const [data, setData] = useState([]);

    const d = new Date();
    const date = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    useEffect(() => {
        fetch("/Bazar.json")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, []);

    const addItem = () => {
        let itemName = document.getElementById("itemName").value;
        data[0].inventories.push(itemName);
        document.getElementById("itemName").value = "";
        setVisible2(false);
    }

    

    const addToList = () => {
        let quantity = document.getElementById("quantityInput").value;
        let price = document.getElementById("priceInput").value;
        
        setSerial(serial+1);

        const row = document.createElement("tr");
        row.classList.add("!border-r-0");
        row.innerHTML = `
                            
                            <td>${String(serial).padStart(2, '0')}.</td>
                            <td>${item}</td>
                            <td>${quantity} kg</td>
                            <td style="border-right: 0px !important; ">${price} tk</td>
        `
        const newData = {
            "date": document.getElementById("dateInput").value,
            "quantity": quantity,
            "unit": "kg",
            "price": price

        }



        if (quantity && price) {
            document.getElementById("tableBody").appendChild(row);
           
            data[0].Bazar[0][item].push(newData);

            console.log(data);

            document.getElementById("total").innerText = parseInt( document.getElementById("total").innerText) + parseInt(price)

            document.getElementById("quantityInput").value = "";
            document.getElementById("priceInput").value = "";
            setVisible(false);

        } else {
            alert("Enter a numeric value!")
        }
    }

    return (
        <div className=" px-5">
            <div className=" bg-[#f7f7f7] rounded-md p-3">
                <div className="flex justify-center items-center ">
                    <input className="border w-full bg-gray-200 rounded-full px-3 py-2 shadow-sm" type="search" name="searchBar" placeholder="search here..." />
                    <button className="bg-gray-200 rounded-full px-3 py-2 ml-2 shadow-sm"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                    {
                        data[0]?.inventories.map((item, index) => {
                            return <p key={index} onClick={() => { setVisible(true); setItem(item) }} className="badge bg-gray-300 font-medium">{item}</p>;
                        })
                    }
                    <p onClick={() => setVisible2(true)} className="badge bg-gray-300 font-bold"><i className="fa-solid fa-sm fa-plus"></i></p>
                </div>

            </div>
            <div className="w-full text-right mt-3 px-2">
                <p className="text-sm font-semibold">Date: <input className="bg-transparent" type="date" defaultValue={date} id="dateInput" /></p>
            </div>
            <div className={visible3? "bg-yellow-500 bg-opacity-25 p-3 rounded-md shadow-md": "hidden"}>
                <table className="w-full" >
                    <thead className="">
                        <tr className="*:border-r-2 *:border-b-2 *:border-black *:px-2 text-center" >
                           
                            <td className="font-semibold">No</td>
                            <td className="font-semibold">item</td>
                            <td className="font-semibold">Quantity</td>
                            <td className="!border-r-0 font-semibold">Price</td>
                        </tr>
                    </thead>
                    <tbody id="tableBody" className="*:*:border-r-2 *:*:border-b *:*:border-b-slate-200 *:*:border-r-black *:*:text-center *:*:text-sm ">
                        {/* Here Goes The Items Rows */}
                    </tbody>
                    <tfoot>
                        <tr className="text-center font-semibold border-t-2 border-black">
                            
                            <td></td>
                            <td></td>
                            <td>Total :-</td>
                            <td id="total"  className="!border-r-0"><span id="total">0</span> tk</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
            <div className={visible3? " mt-5 flex justify-end gap-2": "hidden"}>
                <button onClick={()=>{setVisible3(false);document.getElementById("tableBody").innerHTML='';setSerial(1); document.getElementById("total").innerText= 0}} className="btn btn-sm bg-red-400 text-white">Cancel</button>
                <button onClick={()=>{console.log(data[0].Bazar[0]['Rice'])}} className="btn btn-sm bg-green-400 text-white">Add</button>
            </div>
            <div className={visible ? "bg-black/30 backdrop-blur-[1px] absolute top-0 right-0 left-0 w-screen h-screen flex justify-center items-center" : "hidden"}>
                <div className="bg-white rounded-md p-3 w-[90%] mb-60">
                    <div className="w-full text-center my-5">
                        <h1 className="font-semibold">{item}</h1>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <div>
                            <h1 className="font-semibold">Quantity</h1>
                            <div className="flex items-center">
                                <input id="quantityInput" className="bg-slate-100 w-full pl-3 pr-6 py-2 rounded-md" placeholder="type here..." type="number" />
                                <span className=" -ml-6 text-sm font-semibold">KG</span>
                            </div>
                        </div>

                        <div>
                            <h1 className="font-semibold">Price</h1>
                            <div className="flex items-center">
                                <input id="priceInput" className="bg-slate-100 w-full pl-3 pr-6 py-2 rounded-md" placeholder="type here..." type="number" />
                                <span className=" -ml-6 text-sm font-semibold">TK</span>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-5 flex justify-end gap-2">
                        <button onClick={() => setVisible(false)} className="btn btn-sm bg-red-400 text-white">Cancel</button>
                        <button onClick={()=>{addToList();setVisible3(true)}} className="btn btn-sm bg-green-400 text-white">Add</button>
                    </div>
                </div>
            </div>

            <div className={visible2 ? "bg-black/30 backdrop-blur-[1px] absolute top-0 right-0 left-0 w-screen h-screen flex justify-center items-center" : " hidden"}>
                <div className="bg-white rounded-md p-3 w-[90%] mb-60">
                    <div>
                        <h1 className="font-semibold">Item Name</h1>
                        <input id="itemName" className="bg-slate-100 w-full px-3 py-2 rounded-md" placeholder="type here..." type="text" />
                    </div>

                    <div className=" mt-5 flex justify-end gap-2">
                        <button onClick={() => setVisible2(false)} className="btn btn-sm bg-red-400 text-white">Cancel</button>
                        <button onClick={addItem} className="btn btn-sm bg-green-400 text-white">Add</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bazar;