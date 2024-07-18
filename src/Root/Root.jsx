import { useContext } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";


const Root = () => {

    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()


    location.state = location.pathname;

    const x = () => {
        logOut()
            .then(()=>{
                toast.success("User logged out",{theme: "colored", position: "top-center"})
                navigate('/signup');
            })
            .catch(err => {
                console.log(err);
            });
    }





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
                    <div className=" flex justify-between items-center pr-2 pb-2">
                        <h1 className="text-lg font-bold">Ghost House</h1>
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

                    <div className="text-center my-5 border border-green-500 rounded-md p-3 pb-5 bg-green-100 shadow-md">
                        <h1 className="text-lg font-bold text-green-500">Meal Order</h1>
                        <div className="w-full h-[1px] bg-black mt-2"></div>
                        <div className="mt-3 flex justify-between items-center">



                            <div>
                                <div className="form-control w-max">
                                    <label className="cursor-pointer label">
                                        <span className="label-text font-bold mr-3">DAY</span>
                                        <input type="checkbox" className="toggle toggle-accent" />
                                    </label>
                                </div>

                                <div className="">
                                    <h2 className="font-semibold ">Guest Count </h2>
                                    <select defaultValue={0} className="select select-bordered w-full select-xs">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                    </select>
                                </div>
                            </div>



                            <div className="w-[1px] h-16 bg-black"></div>

                            <div>
                                <div className="form-control w-max">
                                    <label className="cursor-pointer label">
                                        <span className="label-text font-bold mr-3">NIGHT</span>
                                        <input type="checkbox" className="toggle toggle-accent" />
                                    </label>
                                </div>

                                <div className="">
                                    <h2 className="font-semibold ">Guest Count </h2>
                                    <select defaultValue={0} className="select select-bordered w-full select-xs">
                                        <option>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Sidebar content here */}
                    <li className="mt-2"><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/"}> <i className="fa-solid fa-house"></i> <span className="text-black">Home</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/bazar"}> <i className="fa-solid fa-bag-shopping"></i> <span className="text-black">Bazar</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/dashboard"}> <i className="fa-solid fa-table"></i> <span className="text-black">Dashboard</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/bills"}> <i className="fa-solid fa-rectangle-list"></i> <span className="text-black">Bills</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/tasks"}> <i className="fa-solid fa-list-check"></i> <span className="text-black">Tasks</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/mealroutine"}> <i className="fa-solid fa-burger"></i> <span className="text-black">Meal Routine</span> </NavLink> </li>
                    <li ><NavLink className={({ isActive }) => isActive ? "bg-green-200 border-l-2 border-l-green-400 font-bold focus:bg-green-200 active:!bg-green-400 !text-green-500" : "focus:bg-green-200 active:!bg-green-400 text-slate-500"} to={"/managemembers"}> <i className="fa-solid fa-users"></i> <span className="text-black">Member Management</span> </NavLink> </li>

                    <button onClick={x} className="w-full rounded-md bg-red-500 text-white py-2 font-bold mt-5"><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>

                </ul>

            </div>
        </div>
    );
}


export default Root;