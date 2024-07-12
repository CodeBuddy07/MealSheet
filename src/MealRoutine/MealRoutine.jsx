import { useEffect, useState } from "react";

const MealRoutine = () => {

    const [selected, setSelected] = useState("Tue");
    const [addTo, setAddTo] = useState("");
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        fetch("MealRoutineDB.json")
            .then((res) => res.json())
            .then((x) => setData(x));
    }, []);

    const ManageAdd = (e) => {
        e.preventDefault();
        const item = e.target.name.value;
        data.find(x => x.Weekday == selected)[addTo].push(item);
        
        e.target.reset();
        setVisible(false);
    }

    const ManageDelete = (meal,plot) => {
        
        data.find(x => x.Weekday == selected)[plot] = data.find(x => x.Weekday == selected)[plot].filter(x=> x!= meal);
        console.log(data)
    }

    return (
        <div className="p-5 pt-0">
            <div className="flex gap-3 justify-center items-center overflow-scroll py-3 h-16 px-5 pl-20 border-b  ">
                <span onClick={() => setSelected("Sat")} className={selected == "Sat" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Sat</span>
                <span onClick={() => setSelected("Sun")} className={selected == "Sun" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Sun</span>
                <span onClick={() => setSelected("Mon")} className={selected == "Mon" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Mon</span>
                <span onClick={() => setSelected("Tue")} className={selected == "Tue" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Tue</span>
                <span onClick={() => setSelected("Wed")} className={selected == "Wed" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Wed</span>
                <span onClick={() => setSelected("Thu")} className={selected == "Thu" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Thu</span>
                <span onClick={() => setSelected("Fri")} className={selected == "Fri" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Fri</span>
            </div>

            <div className=" shadow-md rounded-md bg-orange-100 w-full p-5 flex gap-10 relative border mt-5 ">
                <h1 className="bg-green-400 text-white px-2 rounded-md rounded-b-none rounded-r-none h-max w-max font-semibold absolute top-0 left-0">DAY</h1>
                <img className="mt-2 max-h-24" src="curry.png" alt="" />
                <ol className=" list-disc *:font-normal *:text-slate-800  w-full text-left border-l pl-7 border-black">

                    {/* {console.log(data.filter(x => x.Weekday == selected)[0]?.Day)} */}
                    {data.filter(x => x.Weekday == selected)[0]?.Day?.map((meal, index) =>
                        <li key={index}>{meal} <span onClick={()=>ManageDelete(meal,"Day")} className="text-red-500"><i className="fa-regular fa-sm fa-trash-can"></i></span></li>
                    )}
                    <button onClick={() => {setVisible(true); setAddTo("Day")}} className="btn-xs px-7 bg-green-300 shadow-sm rounded-md mt-2"><span className="text-white ">ADD <i className="fa-solid fa-lg fa-circle-plus"></i></span></button>

                </ol>
            </div>
            <div className=" shadow-md rounded-md bg-blue-100 w-full p-5 flex gap-10 relative border mt-5">
                <h1 className="bg-green-400 text-white px-2 rounded-md rounded-b-none rounded-r-none h-max w-max font-semibold absolute top-0 left-0">NIGHT</h1>
                <img className="mt-2 max-h-24" src="curry.png" alt="" />
                <ol className=" list-disc *:font-normal *:text-slate-800  w-full text-left  border-l pl-7 border-black">

                    {data.filter(x => x.Weekday == selected)[0]?.Night?.map((meal, index) =>
                        <li key={index}>{meal} <span className="text-red-500"><i className="fa-regular fa-sm fa-trash-can"></i></span></li>
                    )}
                    <button onClick={() => {setVisible(true); setAddTo("Night")}} className="btn-xs px-7 bg-green-300 shadow-sm rounded-md mt-2"><span className="text-white ">ADD <i className="fa-solid fa-lg fa-circle-plus"></i></span></button>
                </ol>
            </div>

            <div className={visible? "absolute grid place-items-center top-0 right-0 bottom-0 left-0 min-w-screen min-h-screen bg-black/30 backdrop-blur-sm" : "hidden"}>
                <form onSubmit={(e)=>ManageAdd(e)} className="bg-white p-5 rounded-md w-[90%]">
                    <h1 className="font-bold">Item Name</h1>
                    <input required className="px-3 py-2 border rounded-md w-full" name="name" placeholder="Type here..." type="text" />
                    <div className=" mt-5 flex justify-end gap-2">
                        <button onClick={() => setVisible(false)} className="btn btn-sm bg-red-400 text-white">Cancel</button>

                        <input className="btn btn-sm bg-green-400 text-white" type="submit" value="Add" />
                        
                    </div>
                </form>
            </div>
        </div>

    );
};

export default MealRoutine;