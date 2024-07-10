
const Task = () => {

    const todayDate = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString().padStart(2, "0") + '-' + (new Date().getDate() + 1).toString().padStart(2, "0");

    return (
        <div className="p-5">
            <div>
                <button className="bg-slate-200 rounded-md w-full py-3 font-bold">ADD <i className="fa-solid fa-xl fa-circle-plus"></i></button>
                <div className="grid place-items-center p-3 bg-slate-200 mt-5 rounded-md">
                    <h1 className="text-lg font-bold">Toilet Clean</h1>
                    <div className="w-full flex items-center mt-3">
                        <input className="border w-full bg-white rounded-full px-3 py-2 shadow-sm" type="search" name="searchBar" placeholder="search here..." />
                        <button className="bg-white rounded-full px-3 py-2 ml-2 shadow-sm"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className="w-full mt-5">
                        <ul className="w-full *:mt-2">
                            <li className="flex justify-between items-center w-full bg-blue-200 rounded-md px-3 py-2">
                                <div className="text-center text-white">
                                    <h1 className="text-3xl font-bold">16</h1>
                                    <p className="font-semibold text-sm -pb-5">Mon</p>
                                </div>
                                <div className="flex justify-start items-center gap-3">
                                    <h1 className=" font-bold text-lg">Ruhul Amin</h1>
                                    <img className="w-12 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                </div>
                            </li>
                            <li className="flex justify-between items-center w-full bg-blue-200 rounded-md px-3 py-2">
                                <div className="text-center text-white">
                                    <h1 className="text-3xl font-bold">16</h1>
                                    <p className="font-semibold text-sm -pb-5">Mon</p>
                                </div>
                                <div className="flex justify-start items-center gap-3">
                                    <h1 className=" font-bold text-lg">Ruhul Amin</h1>
                                    <img className="w-12 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                </div>
                            </li>
                            <li className="flex justify-between items-center w-full bg-blue-200 rounded-md px-3 py-2">
                                <div className="text-center text-white">
                                    <h1 className="text-3xl font-bold">16</h1>
                                    <p className="font-semibold text-sm -pb-5">Mon</p>
                                </div>
                                <div className="flex justify-start items-center gap-3">
                                    <h1 className=" font-bold text-lg">Ruhul Amin</h1>
                                    <img className="w-12 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm absolute h-screen top-0 right-0 left-0 bottom-0 grid place-items-center px-5">

                    <form className="bg-white rounded-md p-5 mt-5 mb-60 w-full">

                        <h1 className="font-bold">Task Name</h1>
                        <input className="px-5 py-2 bg-slate-200 rounded-full w-full" placeholder="Type here..." type="text" />

                        <h1 className="font-bold mt-3">Assigned To</h1>
                        <div className="w-full flex items-center">
                            <input className="border w-full bg-slate-200 rounded-full px-3 py-2 shadow-sm" type="search" name="searchBar" placeholder="search here..." />
                            <button className="bg-slate-200 rounded-full px-3 py-2 ml-2 shadow-sm"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <ul className="mt-5 *:mt-2 text-ellipsis whitespace-nowrap overflow-scroll h-44">
                            <li className="bg-blue-100 flex justify-between items-center px-3 py-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <img className="w-8 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                    <h1 className=" font-bold text-sm">Ruhul Amin</h1>
                                </div>

                                <input className=" bg-white rounded-md input-xs w-28" defaultValue={todayDate} type="date" />
                            </li>
                            <li className="bg-blue-100 flex justify-between items-center px-3 py-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <img className="w-8 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                    <h1 className=" font-bold text-sm">Ruhul Amin</h1>
                                </div>

                                <input className=" bg-white rounded-md input-xs w-28" defaultValue={todayDate} type="date" />
                            </li>
                            <li className="bg-blue-100 flex justify-between items-center px-3 py-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <img className="w-8 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                    <h1 className=" font-bold text-sm">Ruhul Amin</h1>
                                </div>

                                <input className=" bg-white rounded-md input-xs w-28" defaultValue={todayDate} type="date" />
                            </li>
                            <li className="bg-blue-100 flex justify-between items-center px-3 py-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <img className="w-8 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                    <h1 className=" font-bold text-sm">Ruhul Amin</h1>
                                </div>

                                <input className=" bg-white rounded-md input-xs w-28" defaultValue={todayDate} type="date" />
                            </li>
                            <li className="bg-blue-100 flex justify-between items-center px-3 py-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <img className="w-8 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                    <h1 className=" font-bold text-sm">Ruhul Amin</h1>
                                </div>

                                <input className=" bg-white rounded-md input-xs w-28" defaultValue={todayDate} type="date" />
                            </li>
                            <li className="bg-blue-100 flex justify-between items-center px-3 py-2 rounded-md">
                                <div className="flex justify-start items-center gap-3">
                                    <img className="w-8 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                    <h1 className=" font-bold text-sm">Ruhul Amin</h1>
                                </div>

                                <input className=" bg-white rounded-md input-xs w-28" defaultValue={todayDate} type="date" />
                            </li>


                        </ul>
                        <div className=" mt-5 flex justify-end gap-2">
                            <button className="btn btn-sm bg-red-400 text-white">Cancel</button>

                            <input className="btn btn-sm bg-green-400 text-white" type="submit" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Task;