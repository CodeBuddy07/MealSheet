import { useEffect } from "react";
import { useState } from "react";

const Task = () => {

    //const todayDate = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString().padStart(2, "0") + '-' + (new Date().getDate() + 1).toString().padStart(2, "0");
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState([]);
    const [taskData, setTaskData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchTerm2, setSearchTerm2] = useState("");

    useEffect(() => {
        fetch("DB.json")
            .then(res => res.json())
            .then(x => setData(x));
    }, []);

    useEffect(() => {
        fetch("TaskDB.json")
            .then(res => res.json())
            .then(x => setTaskData(x));
    }, []);

    function getWeekDay(x) {
        const date = new Date(x);

        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return daysOfWeek[date.getDay()];
    }

    function getMonthDay(x) {

        const date = new Date(x);
        return date.getDate();
    }

    function manageAdd(e) {
        e.preventDefault();
        const TaskName = e.target.taskName.value;
        data.map(user => e.target[`${user.user_name}assignedDate`].value ? user.tasks ? user.tasks.push({ "name": TaskName, "assigned_date": e.target[`${user.user_name}assignedDate`].value }) : user.tasks = [{ "name": TaskName, "assigned_date": e.target[`${user.user_name}assignedDate`].value }] : true);
        taskData.push(TaskName);
        e.target.reset();
        setVisible(false);
    }

    function manageSearch(e) {
        e.preventDefault();

        const listItems = document.querySelectorAll(".try");
        listItems.forEach(element => {
            if (element.innerText.toLowerCase().search(searchTerm2.toLowerCase()) > -1) {
                element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
            }
        });

    }

    //user.tasks.push({"name" : TaskName, "assigned_date": e.target[`${user.user_name}assignedDate`].value})
    return (
        <div className="p-5 ">

            <button onClick={() => setVisible(true)} className="bg-slate-200 rounded-md w-full py-3 font-bold">ADD <i className="fa-solid fa-xl fa-circle-plus"></i></button>
            {taskData.map((task, index) =>
                <div key={index} className="grid place-items-center p-3 bg-slate-200 mt-5 rounded-md">
                    <h1 className="text-lg font-bold">{task}</h1>
                    <div className="w-full flex items-center mt-3">
                        <input onChange={(e) => setSearchTerm(e.target.value + "," + task)} className="border w-full bg-white rounded-full px-3 py-2 shadow-sm" type="search" name="searchBar" placeholder="search here..." />
                        <button className="bg-white rounded-full px-3 py-2 ml-2 shadow-sm"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className="w-full mt-5">
                        <ul className="w-full *:mt-2">
                            {
                                data.map(user => user.tasks?.filter(x => x.name == task).filter(x => searchTerm.includes(task) ? getWeekDay(x.assigned_date).toLowerCase().search(searchTerm.replace(`,${task}`, "").toLowerCase()) > -1 || getMonthDay(x.assigned_date).toString().search(searchTerm.replace(`,${task}`, "")) > -1 || user.user_name.toLowerCase().search(searchTerm.replace(`,${task}`, "").toLowerCase()) > -1 : x.name == task).map((y, index) =>
                                    <li key={index} className="flex justify-between items-center w-full bg-blue-200 rounded-md px-2 py-1" >
                                        
                                        <div className="flex justify-start items-center gap-3">
                                            
                                            <img className="w-9 rounded-full border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                            <h1 className=" font-bold">{user.user_name}</h1>
                                        </div>
                                        <div className="text-center text-white pr-3">
                                            <h1 className="text-xl font-bold">{getMonthDay(y.assigned_date)}</h1>
                                            <p className="font-normal text-xs ">{getWeekDay(y.assigned_date)}</p>
                                        </div>
                                    </li>
                                ))


                            }


                        </ul>
                    </div>
                </div>
            )}
            <div className={visible ? "bg-black/30 backdrop-blur-sm absolute top-0 right-0 left-0 bottom-0 grid place-items-center px-5 " : "hidden"}>

                <form onSubmit={(e) => manageAdd(e)} className="bg-white rounded-md p-5 mt-5 mb-60 w-full">

                    <h1 className="font-bold">Task Name</h1>
                    <input required className="px-5 py-2 bg-slate-200 rounded-full w-full" placeholder="Type here..." name="taskName" type="text" />

                    <h1 className="font-bold mt-3">Assigned To</h1>
                    <div className="w-full flex items-center mt-5">
                        <input onChange={(e) => setSearchTerm2(e.target.value)} className="border w-full bg-slate-200 rounded-full px-3 py-2 shadow-sm" type="search" name="searchBar" placeholder="search here..." />
                        <button onClick={(e) => manageSearch(e)} className="bg-slate-200 rounded-full px-3 py-2 ml-2 shadow-sm"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <ul className=" mt-2 *:mt-2 text-ellipsis whitespace-nowrap overflow-scroll h-44">
                        {
                            data.map((user, index) =>
                                <li key={index} className=" bg-blue-100 flex justify-between items-center px-3 py-2 rounded-md">
                                    <div className="flex justify-start items-center gap-3">
                                        <img className="w-12 rounded-lg border-2 border-blue-500" src="/Cat03.jpg" alt="" />
                                        <div>
                                            <h1 className=" try font-bold text-sm w-2 text-ellipsis">{user.user_name}</h1>
                                            <div className="flex justify-center items-center gap-2">
                                                <span className="text-xs font-bold">Assign Date: </span>
                                                <input className=" bg-white rounded-md input-xs w-28 text-black" name={`${user.user_name}assignedDate`} defaultValue="mm/dd/yyyy" type="date" />
                                            </div>
                                        </div>
                                    </div>


                                </li>)
                        }



                    </ul>
                    <div className=" mt-5 flex justify-end gap-2">
                        <button onClick={() => setVisible(false)} className="btn btn-sm bg-red-400 text-white">Cancel</button>

                        <input className="btn btn-sm bg-green-400 text-white" type="submit" value="Add" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Task;