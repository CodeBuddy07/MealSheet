

const userDashboard = () => {
    return (
        <div className="grid grid-cols-6">
            <div className="border">.adsd </div>
            <div className=" col-span-4 border ">

                <div className="p-5">

                    {/* Notice Alert */}

                    <div className="bg-yellow-100 px-5 -ml-5 rounded-r-full flex gap-5 items-center border border-l-0 border-red-500">
                        <div className="border-red-400 rounded-full border-4 w-max px-3 bg-white scale-125">
                            <h1 className="text-2xl font-black text-red-600">!</h1>
                        </div>
                        <p className="font-semibold text-red-500 text-xl">This is your bazar date!</p>
                    </div>

                    <div className="mt-10 flex gap-5">
                        <div className="shadow-md shadow-orange-100 px-5 pr-12 py-3 border rounded-md min-w-96 flex items-center justify-between">
                            <div>
                                <img className="w-16" src="./users.png" alt="" />
                                <div>
                                    <h1 className=" font-semibold">Total Enlisted Meal</h1>
                                    <h1 className=" mt-4 font-medium flex justify-start items-center gap-4 pl-3 text-slate-400" ><span className="text-5xl font-bold text-green-500">16</span> People</h1>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="text-center text-orange-300">
                                    <h1 className="font-semibold">Day</h1>
                                    <h1 className="text-4xl font-bold">08</h1>
                                </div>

                                <div className="w-[1px] h-16 bg-black"></div>

                                <div className="text-center text-blue-300">
                                    <h1 className="font-semibold">Night</h1>
                                    <h1 className="text-4xl font-bold">06</h1>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <img className="h-52 border w-full" src="./foodBanner.jpg" alt="" />
                        </div>
                    </div>


                    {/* Menu Cards */}

                    <div className="my-5 flex gap-5">
                        <div className=" shadow-md rounded-md bg-orange-100 w-max p-5 flex gap-10 relative border">
                            <h1 className="bg-green-400 text-white px-2 rounded-md rounded-b-none rounded-r-none h-max w-max font-semibold absolute top-0 left-0">DAY</h1>
                            <img className="mt-2" src="curry.png" alt="" />
                            <ol className=" list-disc *:font-semibold *:text-slate-800  w-full text-left border-l px-7 border-black">
                                <li>Steamed Rice</li>
                                <li>Beef Curry</li>
                            </ol>
                        </div>
                        <div className=" shadow-md rounded-md bg-blue-100 w-max p-5 flex gap-10 relative border ">
                            <h1 className="bg-green-400 text-white px-2 rounded-md rounded-b-none rounded-r-none h-max w-max font-semibold absolute top-0 left-0">NIGHT</h1>
                            <img className="mt-2" src="curry.png" alt="" />
                            <ol className=" list-disc *:font-semibold *:text-slate-800  w-full text-left border-l px-7 border-black">
                                <li>Steamed Rice</li>
                                <li>Beef Curry</li>
                            </ol>
                        </div>
                    </div>



                </div>
            </div>
            <div className=" px-5 py-7 border">

                <div className="flex justify-between items-center w-full">
                    <h1 className="text-xl font-semibold">Ruhul Amin</h1>
                    <div className="avatar">
                        <div className="w-10 mask mask-squircle">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-black rounded-full my-5"></div>

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
                                <select className="select select-bordered w-full select-xs">
                                    <option selected>0</option>
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
                                <select className="select select-bordered w-full select-xs">
                                    <option selected>0</option>
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
            </div>

        </div>
    );
};

export default userDashboard;