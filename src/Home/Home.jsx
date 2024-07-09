import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen";


const Home = () => {
    const nowMonth = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString().padStart(2, "0");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dates, setDates] = useState(generateDatesArray(nowMonth))

    useEffect(() => {
        fetch("./DB.json")
            .then(res => res.json())
            .then(data => setData(data))


    }, []);

    function getNextDate(date) {
        const nextDate = new Date(date);
        nextDate.setDate(nextDate.getDate() + 1);
        return nextDate;
    }

    // Function to format date as YYYY-MM-DD
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Function to generate an array of dates
    function generateDatesArray(startDate) {
        const datesArray = [];
        let currentDate = new Date(startDate);

        // Get the month and year from the startDate
        const month = currentDate.getMonth();
        while (currentDate.getMonth() === month) {
            datesArray.push(formatDate(currentDate));
            currentDate = getNextDate(currentDate);
        }

        return datesArray;
    }

    const mealQueryByDate = (e) => {
        setLoading(true)
        const selectedDate = e.target.value;

        const datesArray = generateDatesArray(selectedDate);

        setDates(datesArray);

        setLoading(false)

    }

    function getTotal(index) {

        let totalDay = 0;

        const dayCells = document.querySelectorAll(index);

        dayCells.forEach(cell => {
            const cellValue = parseFloat(cell.innerText) || 0;

            totalDay += cellValue;
        });
        console.log(totalDay);
        return totalDay.toString();

    }


    function calculateTotal() {


        // for (var i = 0; i < data.length; i++) {


        //     if (document.getElementById("dayTotal" + data[i].user_id)) {
        //         //Day Total Calculation
        //         const dayCells = document.querySelectorAll(`.day${data[i].user_id}`);
        //         let totalDay = 0;
        //         dayCells.forEach(cell => {
        //             const cellValue = parseFloat(cell.innerText) || 0;

        //             totalDay += cellValue;
        //         });
        //         document.getElementById("dayTotal" + data[i].user_id).innerText = totalDay;


        //         //Night Total Calculation
        //         const nightCells = document.querySelectorAll(`.night${data[i].user_id}`);
        //         let totalNight = 0;
        //         nightCells.forEach(cell => {
        //             const cellValue = parseFloat(cell.innerText) || 0;

        //             totalNight += cellValue;
        //         });
        //         document.getElementById("nightTotal" + data[i].user_id).innerText = totalNight;


        //         //Guest Day Total Calculation
        //         const gDayCells = document.querySelectorAll(`.gDay${data[i].user_id}`);
        //         let totalGDay = 0;
        //         gDayCells.forEach(cell => {
        //             const cellValue = parseFloat(cell.innerText) || 0;

        //             totalGDay += cellValue;
        //         });
        //         document.getElementById("gDayTotal" + data[i].user_id).innerText = totalGDay;


        //         //Guest Night Total Calculation
        //         const gNightCells = document.querySelectorAll(`.gNight${data[i].user_id}`);
        //         let totalGNight = 0;
        //         gNightCells.forEach(cell => {
        //             const cellValue = parseFloat(cell.innerText) || 0;

        //             totalGNight += cellValue;
        //         });
        //         document.getElementById("gNightTotal" + data[i].user_id).innerText = totalGNight;

        //         //Day-Night Total & Guest Day-Night Total Calculation
        //         document.getElementById("dayNightTotal" + data[i].user_id).innerText = totalDay + totalNight;
        //         document.getElementById("gDayNightTotal" + data[i].user_id).innerText = totalGDay + totalGNight;

        //         document.getElementById("Total" + data[i].user_id).innerText = totalGDay + totalGNight + totalDay + totalNight;
        //     }


        // }

    }



    function exportTableToExcel() {
        var downloadLink;
        var dataType = 'application/vnd.ms-excel';
        var tableSelect = document.getElementById("myTable");
        var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

        // Specify file name
        var filename = 'MealSheet.xls';

        // Create download link element
        downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            var blob = new Blob(['\ufeff', tableHTML], {
                type: dataType
            });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

            // Setting the file name
            downloadLink.download = filename;

            //triggering the function
            downloadLink.click();
        }
    }



    return (
        <div className="p-5 ">
            <div className="px-5 py-3 mb-5 shadow-md shadow-green-200 bg-green-100 rounded-md min-w-screen flex items-center justify-between">
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
            <div className="w-full text-center mb-3">
                <h1 className="text-xl font-bold"><span className="text-green-400">Meal</span>Sheet</h1>
            </div>
            <div className="flex justify-between items-center">
                <input onChange={(e) => { calculateTotal(); mealQueryByDate(e) }} className="input input-sm border border-black" type="month" name="monthSelector" defaultValue={new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString().padStart(2, "0")} />
                <button className="btn btn-sm bg-green-500 text-white px-7 rounded py-2" onClick={exportTableToExcel}>Export</button>
            </div>
            {loading ? <LoadingScreen></LoadingScreen> : <p></p>}
            <div className="overflow-scroll rounded-md border-2 border-green-500 mt-2 -mx-5">
                <table hidden={loading ? true : false} id="myTable" className="w-full whitespace-nowrap">
                    <thead className=" *:border *:*:border *:*:border-t-0 *:*:px-5 *:*:py-2 text-center">
                        <tr className="[&>*:last-child]:border-r-0">
                            <th className="!border-black !border-l-0" rowSpan={2}>Date</th>
                            {data.map((user, index) => {
                                return <th className=" !border-black !border-l-0 [&>*:last-child]:border-b-black " key={index} colSpan={4}>{user.user_name}</th>;
                            })}
                        </tr>
                        <tr className="[&>*:last-child]:border-r-0">
                            {data.map((user, index) => {

                                return <React.Fragment key={index}>

                                    <th className=" !border-black">Day</th>
                                    <th className=" !border-black">Night</th>
                                    <th className=" !border-black">G. Day</th>
                                    <th className=" !border-black">G. Night</th>
                                </React.Fragment>;
                            })}

                        </tr>
                    </thead>
                    <tbody className=" *:*:border *:*:border-l-0 *:*:px-5 *:*:py-2 border-black text-center [&>*:last-child]:border-b-black [&>*:nth-child(odd)]:bg-slate-50">


                        {dates.map((date, index) => {
                            return <tr className="!border-black [&>*:last-child]:border-r-0" key={index}>
                                {
                                    <>
                                        <td className=" w-max !border-black" >{date}</td>
                                        {data.map((user, index) => {

                                            return <React.Fragment key={index}>
                                                <td className={"day" + user.user_id}   >{user.data.find((el) => el.date == date)?.day_meal}</td>
                                                <td className={"night" + user.user_id} >{user.data.find((el) => el.date == date)?.night_meal}</td>
                                                <td className={"gDay" + user.user_id}  >{user.data.find((el) => el.date == date)?.guest_day_meal}</td>
                                                <td className={" !border-r-black  gNight" + user.user_id}>{user.data.find((el) => el.date == date)?.guest_night_meal}</td>
                                            </React.Fragment>
                                        })}

                                    </>
                                }
                            </tr>

                        })}


                    </tbody>
                    <tfoot className="*:*:border *:*:px-5 *:*:py-2 !border-black text-center">
                        <tr className="">
                            <td className="border-black !border-t-2 !border-l-0 !border-b-0 font-bold" rowSpan={3}>TOTAL</td>
                            {data.map((user, index) => {

                                return <React.Fragment key={index}>
                                    <td id={"dayTotal" + user.user_id} className=" !border-black !border-t-2 " > {getTotal(`.day${user.user_id}`)}</td>
                                    <td id={"nightTotal" + user.user_id} className=" !border-black !border-t-2 " > {getTotal(`.night${user.user_id}`)}</td>
                                    <td id={"gDayTotal" + user.user_id} className=" !border-black !border-t-2 " > {getTotal(`.gDay${user.user_id}`)}</td>
                                    <td id={"gNightTotal" + user.user_id} className="!border-r-0 !border-t-2 !border-black">{getTotal(`.gNight${user.user_id}`)}</td>
                                </React.Fragment>

                            })}

                        </tr>
                        <tr>

                            {data.map((user, index) => {

                                return <React.Fragment key={index}>

                                    <td className=" !border-black" colSpan={2} id={"dayNightTotal" + user.user_id}></td>
                                    <td className="!border-r-0 !border-black" colSpan={2} id={"gDayNightTotal" + user.user_id}>r</td>

                                </React.Fragment>

                            })}

                        </tr>
                        <tr>

                            {data.map((user, index) => {

                                return <React.Fragment key={index}>

                                    <td className=" !border-black !border-b-0 !border-r-0" colSpan={4} id={"Total" + user.user_id}>r</td>

                                </React.Fragment>

                            })}

                        </tr>
                    </tfoot>
                </table>
            </div>



        </div>
    );
};

export default Home;