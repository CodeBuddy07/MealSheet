import { useEffect, useState } from "react";

const MealRoutine = () => {

    const [selected, SetSelected] = useState("Tue");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("MealRoutineDB.json")
            .then((res) => res.json())
            .then((x) => setData(x));
    }, [])

    return (
        <div className="p-5 pt-0">
            <div className="flex gap-3 justify-center items-center overflow-scroll py-3 h-16 px-5 pl-20 border-b  ">
                <span onClick={() => SetSelected("Sat")} className={selected == "Sat" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Sat</span>
                <span onClick={() => SetSelected("Sun")} className={selected == "Sun" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Sun</span>
                <span onClick={() => SetSelected("Mon")} className={selected == "Mon" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Mon</span>
                <span onClick={() => SetSelected("Tue")} className={selected == "Tue" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Tue</span>
                <span onClick={() => SetSelected("Wed")} className={selected == "Wed" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Wed</span>
                <span onClick={() => SetSelected("Thu")} className={selected == "Thu" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Thu</span>
                <span onClick={() => SetSelected("Fri")} className={selected == "Fri" ? "badge badge-lg transition-all ease-linear  font-semibold bg-green-200" : "badge badge-md transition-all ease-linear font-semibold bg-slate-200"}>Fri</span>
            </div>

            <div className=" shadow-md rounded-md bg-orange-100 w-full p-5 flex gap-10 relative border mt-5 ">
                <h1 className="bg-green-400 text-white px-2 rounded-md rounded-b-none rounded-r-none h-max w-max font-semibold absolute top-0 left-0">DAY</h1>
                <img className="mt-2" src="curry.png" alt="" />
                <ol className=" list-disc *:font-normal *:text-slate-800  w-full text-left border-l pl-7 border-black">

                    {/* {console.log(data.filter(x => x.Weekday == selected)[0]?.Day)} */}
                    {data.filter(x => x.Weekday == selected)[0]?.Day?.map((meal, index) =>
                        <li key={index}>{meal} <span className="text-red-500"><i className="fa-regular fa-sm fa-trash-can"></i></span></li>
                    )}
                    <button className="btn-xs px-7 bg-green-300 shadow-sm rounded-md mt-2"><span className="text-white ">ADD <i className="fa-solid fa-lg fa-circle-plus"></i></span></button>

                </ol>
            </div>
            <div className=" shadow-md rounded-md bg-blue-100 w-full p-5 flex gap-10 relative border mt-5">
                <h1 className="bg-green-400 text-white px-2 rounded-md rounded-b-none rounded-r-none h-max w-max font-semibold absolute top-0 left-0">NIGHT</h1>
                <img className="mt-2" src="curry.png" alt="" />
                <ol className=" list-disc *:font-normal *:text-slate-800  w-full text-left  border-l pl-7 border-black">

                    {data.filter(x => x.Weekday == selected)[0]?.Night?.map((meal, index) =>
                        <li key={index}>{meal} <span className="text-red-500"><i className="fa-regular fa-sm fa-trash-can"></i></span></li>
                    )}
                    <button className="btn-xs px-7 bg-green-300 shadow-sm rounded-md mt-2"><span className="text-white ">ADD <i className="fa-solid fa-lg fa-circle-plus"></i></span></button>
                </ol>
            </div>
        </div>

    );
};

export default MealRoutine;