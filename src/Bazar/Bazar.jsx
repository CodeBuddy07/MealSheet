import { useState } from "react";

const Bazar = () => {

    const [visible,setVisible] = useState(false);
    const [visible2,setVisible2] = useState(false);
    const [item,setItem] = useState("");



    return (
        <div className=" px-5">
            <div className=" bg-[#f7f7f7] rounded-md p-3">
                <div className="flex justify-center items-center ">
                    <input className="border w-full bg-gray-200 rounded-full px-3 py-2" type="search" name="searchBar" placeholder="search here..." />
                    <button className="bg-gray-200 rounded-full px-3 py-2 ml-2"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                    <p onClick={()=>{setVisible(true);setItem("Rice")}} className="badge bg-gray-300 font-medium">Rice</p>
                    <p onClick={()=>{setVisible(true);setItem("Fish")}} className="badge bg-gray-300 font-medium">Fish</p>
                    <p onClick={()=>{setVisible(true);setItem("Meat")}} className="badge bg-gray-300 font-medium">Meat</p>
                    <p onClick={()=>{setVisible(true);setItem("Carrot")}} className="badge bg-gray-300 font-medium">Carrot</p>
                    <p onClick={()=>{setVisible(true);setItem("PataGobi")}} className="badge bg-gray-300 font-medium">PataGobi</p>
                    <p onClick={()=>{setVisible(true);setItem("Lentil")}} className="badge bg-gray-300 font-medium">Lentil</p>
                    <p onClick={()=>setVisible2(true)} className="badge bg-gray-300 font-bold"><i className="fa-solid fa-sm fa-plus"></i></p>
                </div>

            </div>
            <div className="bg-yellow-500 bg-opacity-25 p-3 rounded-md mt-3">
                <table className="w-full" >
                    <thead className="">
                        <tr className="*:border-r-2 *:border-b-2 *:border-black *:px-2 text-center" >
                            <td className="font-semibold">No.</td>
                            <td className="font-semibold">item</td>
                            <td className="font-semibold">Quantity</td>
                            <td className="!border-r-0 font-semibold">Price</td>
                        </tr>
                    </thead>
                    <tbody className="*:*:border-r-2 *:*:border-b *:*:border-b-slate-200 *:*:border-r-black *:*:text-center *:*:text-sm">
                        <tr>
                            <td>01.</td>
                            <td>Rice</td>
                            <td>3</td>
                            <td className="!border-r-0">195</td>
                        </tr>
                        <tr>
                            <td>02.</td>
                            <td>Fulkopi</td>
                            <td>1</td>
                            <td className="!border-r-0">60</td>
                        </tr>
                        <tr>
                            <td>03.</td>
                            <td>Lentil</td>
                            <td>0.2</td>
                            <td className="!border-r-0">50</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="text-center font-semibold border-t-2 border-black">
                            <td></td>
                            <td></td>
                            <td>Total :-</td>
                            <td className="!border-r-0">195</td>
                        </tr>
                    </tfoot>
                </table>

            </div>
            <div className=" mt-5 flex justify-end gap-2">
                <button className="btn btn-md bg-red-400 text-white">Cancel</button>
                <button className="btn btn-md bg-green-400 text-white">Add</button>
            </div>
            <div className={visible?"bg-black/30 backdrop-blur-[1px] absolute top-0 right-0 left-0 w-screen h-screen flex justify-center items-center" : "hidden"}>
                <div className="bg-white rounded-md p-3 w-[90%] mb-60">
                    <div className="w-full text-center my-5">
                        <h1 className="font-semibold">{item}</h1>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <div>
                            <h1 className="font-semibold">Quantity</h1>
                            <div className="flex items-center">
                                <input className="bg-slate-100 w-full pl-3 pr-6 py-2 rounded-md" placeholder="type here..." type="number" />
                                <span className=" -ml-6 text-sm font-semibold">KG</span>
                            </div>
                        </div>

                        <div>
                            <h1 className="font-semibold">Price</h1>
                            <div className="flex items-center">
                                <input className="bg-slate-100 w-full pl-3 pr-6 py-2 rounded-md" placeholder="type here..." type="number" />
                                <span className=" -ml-6 text-sm font-semibold">TK</span>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-5 flex justify-end gap-2">
                        <button onClick={()=>setVisible(false)} className="btn btn-sm bg-red-400 text-white">Cancel</button>
                        <button className="btn btn-sm bg-green-400 text-white">Add</button>
                    </div>
                </div>
            </div>

            <div  className={visible2? "bg-black/30 backdrop-blur-[1px] absolute top-0 right-0 left-0 w-screen h-screen flex justify-center items-center" : " hidden" }>
                <div className="bg-white rounded-md p-3 w-[90%] mb-60">
                    <div>
                        <h1 className="font-semibold">Item Name</h1>
                        <input className="bg-slate-100 w-full px-3 py-2 rounded-md" placeholder="type here..." type="text" />
                    </div>
                    
                    <div className=" mt-5 flex justify-end gap-2">
                        <button onClick={()=>setVisible2(false)} className="btn btn-md bg-red-400 text-white">Cancel</button>
                        <button className="btn btn-md bg-green-400 text-white">Add</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bazar;