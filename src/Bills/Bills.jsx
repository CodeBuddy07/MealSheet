import { useEffect, useState } from "react";


const Bills = () => {

    const [billData, setBillData] = useState([]);
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        fetch("Bills.json")
            .then(res => res.json())
            .then(data => setBillData(data))

    }, []);

    useEffect(() => {
        fetch("DB.json")
            .then(res => res.json())
            .then(x => setData(x))

    }, []);

    const formSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        let name = form.name.value;
        let amount = form.amount.value;
        let date = form.date.value;

        const newData = {

            "bill_name": name,
            "total": amount,
            "last_date": date,
            "status": "false"

        }
        const userData = {

            "bill_name": name,
            "status": "false"

        }

        billData[0]?.bills.push(newData);
        data?.map(x=> x.bills.push(userData));

        form.reset();

        setVisible(false);

    }


    return (
        <div className="px-5">
            <div>
                <button onClick={() => setVisible(true)} className="btn bg-slate-200 w-full py-2 font-bold">
                    ADD
                    <i className="fa-solid fa-lg fa-circle-plus"></i>
                </button>
                {
                    billData[0]?.bills.map((bill, index) =>
                        <div key={index} className="bg-slate-200 w-full grid place-items-center mt-3 rounded-md p-2" >
                            <h1 className="font-bold text-lg ">{bill.bill_name}</h1>
                            <div className="mt-3 w-full text-left text-xs font-bold px-3">
                                Last Date: <span>{bill.last_date}</span>
                            </div>
                            <div className=" flex justify-center items-center w-full gap-3">
                                <div className="w-[80%] bg-slate-300 h-1 rounded-full ">
                                    <div style={{ width: `${(data.filter(x => x.bills.find(y => y.bill_name == bill.bill_name)?.status == 'true').length / data.length) * 100}%` }} className="bg-green-400 text-green-400 h-full rounded-full" >.</div>
                                </div>

                                <p className="font-bold">{(data.filter(x => x.bills.find(y => y.bill_name == bill.bill_name)?.status == 'true').length / data.length) * 100}%</p>
                            </div>
                            <div className="w-full flex justify-between items-center px-3">
                                <h1 className="text-sm font-bold">Total: <span>{bill.total}</span> TK</h1>
                                <div className="text-xs font-bold flex gap-3">
                                    <h1 className="text-green-500">Paid: <span>{String(data.filter(x => x.bills.find(y => y.bill_name == bill.bill_name)?.status == 'true').length).padStart(2, "0")}</span></h1>
                                    <h1 className="text-red-500">Unpaid: <span>{String((data.length - data.filter(x => x.bills.find(y => y.bill_name == bill.bill_name)?.status == 'true').length)).padStart(2, "0")}</span></h1>
                                </div>

                            </div>

                            <div className="flex justify-center items-center  w-full px-5 mt-5">
                                <input onChange={(e) => setSearchTerm(e.target.value +"," + bill.bill_name)} className="border w-full bg-white rounded-full px-3 py-2 shadow-sm" type="search" name="searchBar" placeholder="search here..." />
                                <button className="bg-white rounded-full px-3 py-2 ml-2 shadow-sm"><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>

                            <div className="mt-3 w-full px-3 mb-5">
                                <ul className="w-full *:mt-2">
                                    {

                                        data?.filter(x => searchTerm.includes(bill.bill_name) ? x.user_name.toLowerCase().search(searchTerm.replace(`,${bill.bill_name}`,"").toLowerCase()) > -1 : true).slice(0, 3).map((user, index) =>
                                            <li key={index} className="bg-blue-200 w-full  rounded-e-md rounded-tl-full rounded-bl-full flex justify-between items-center ">
                                                <div className="flex justify-start items-center gap-3">
                                                    <img className="w-10 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                                    <h1 className=" font-semibold ">{user.user_name}</h1>
                                                </div>


                                                {user.bills.find(x => x.bill_name == bill.bill_name)?.status ? user.bills.find(x => x.bill_name == bill.bill_name).status == "true" ? <div className="text-green-400 px-5"> <i className="fa-solid fa-lg fa-circle-check"></i></div> : <div className="text-red-400 px-5"> <i className="fa-solid fa-lg fa-circle-xmark"></i></div> : <div className="text-red-400 px-5"> <i className="fa-solid fa-lg fa-circle-xmark"></i></div>}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                }
                <div className={visible ? "absolute bg-black/30 backdrop-blur-sm top-0 right-0 left-0  bottom-0 grid place-items-center " : "hidden"}>
                    <div className="bg-white rounded-md px-3 py-5 mb-60 w-[90%]">

                        <form onSubmit={formSubmit} >
                            <div>
                                <h1 className="font-bold">Bill Name</h1>
                                <input required className="rounded-md text-base bg-slate-200 px-3 py-2 w-full" name="name" placeholder="Type here..." type="text" />
                            </div>
                            <div>
                                <h1 className="font-bold">Bill Amount</h1>
                                <div className="flex items-center">
                                    <input required className="rounded-md text-base bg-slate-200 px-3 pr-8 py-2 w-full" name="amount" placeholder="Type here..." type="number" />
                                    <span className="font-bold -ml-7">TK</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold">Last Date</h1>
                                <input required className="bg-slate-200 px-3 py-2 rounded-md" name="date" type="date" />
                            </div>

                            <div className=" mt-5 flex justify-end gap-2">
                                <button onClick={() => setVisible(false)} className="btn btn-sm bg-red-400 text-white">Cancel</button>

                                <input className="btn btn-sm bg-green-400 text-white" type="submit" value="Add" />
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bills;