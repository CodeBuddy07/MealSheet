import { NavLink, Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="drawer relative">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <div className="p-5 py-3 rounded-b-md flex gap-3 fixed top-0 bg-white w-full items-center shadow-md">
                    <label htmlFor="my-drawer" className="drawer-button"><i className="fa-solid fa-lg fa-bars"></i></label>
                    <h1 className="font-semibold text-xl"><span className="text-green-500">Meal</span>Sheet</h1>
                </div>
                <div className="h-14 w-full mb-3 rounded-b-md bg-white">

                </div>
                <div>
                    <Outlet>

                    </Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu bg-base-200 text-base-content min-h-full min-w-80 p-4">
                    <div className=" text-right pr-2 pb-2">
                        <label htmlFor="my-drawer" className="drawer-button"><i className="fa-solid fa-lg fa-xmark"></i></label>
                    </div>

                    <div className="w-full p-5 bg-gradient-to-r from-lime-400 to-lime-500 bg-cover rounded-md">

                        <div className="bg-white w-full pr-2 py-2 rounded-md flex justify-start items-center gap-2">
                            <img className="w-10" src="./dollarSign.png" alt="" />
                            <div>
                                <p className=" mb-2 font-semibold ">Balance</p>
                                <p className="font-black text-xl text-green-500">৳ <span className="">120.00</span></p>
                            </div>
                        </div>


                        <div className="flex gap-2 mt-2 justify-center items-center">
                            <div className="bg-white w-full px-2 py-1 rounded-md">
                                <p className="text-xs font-bold mb-2 ">Deposit</p>
                                <p className="font-black  text-green-500">৳ <span className="">320.00</span></p>
                            </div>
                            <div className="bg-white w-full px-2 py-1 rounded-md">
                                <p className="text-xs font-bold mb-2 ">Cost</p>
                                <p className="font-black  text-green-500">৳ <span className="">320.00</span></p>
                            </div>
                        </div>


                    </div>

                    {/* Sidebar content here */}
                    <li className="mt-2"><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/"}> <i className="fa-solid fa-house"></i> <span className="text-black">Home</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/bazar"}> <i className="fa-solid fa-bag-shopping"></i> <span className="text-black">Bazar</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/dashboard"}> <i className="fa-solid fa-table"></i> <span className="text-black">Dashboard</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/bills"}> <i className="fa-solid fa-rectangle-list"></i> <span className="text-black">Bills</span> </NavLink> </li>



                </ul>
            </div>
        </div>
    );
};

export default Root;