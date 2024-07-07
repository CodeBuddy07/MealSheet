import { NavLink, Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="drawer relative">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <div className="p-5 flex gap-3 items-center">
                    <label htmlFor="my-drawer" className="drawer-button"><i className="fa-solid fa-lg fa-bars"></i></label>
                    <h1 className="font-semibold text-xl"><span className="text-green-500">Meal</span>Sheet</h1>
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

                    <div className="w-full p-5 bg-[url('./balanceDivBG.jpg')] bg-cover rounded-md">

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
                    <li><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-semibold focus:bg-green-200 active:!bg-green-400" : "focus:bg-green-200 active:!bg-green-400"} to={"/"}>Home</NavLink> </li>
                    <li><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-semibold focus:bg-green-200 active:!bg-green-400" : "focus:bg-green-200 active:!bg-green-400"} to={"/bazar"}>Bazar</NavLink> </li>
                    <li><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-semibold focus:bg-green-200 active:!bg-green-400" : "focus:bg-green-200 active:!bg-green-400"} to={"/dashboard"}>Dashboard</NavLink> </li>


                </ul>
            </div>
        </div>
    );
};

export default Root;