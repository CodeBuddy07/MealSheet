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


    function calculateTotal() {


        for (var i = 0; i < data.length; i++) {


            if (document.getElementById("dayTotal" + data[i].user_id)) {
                //Day Total Calculation
                const dayCells = document.querySelectorAll(`.day${data[i].user_id}`);
                let totalDay = 0;
                dayCells.forEach(cell => {
                    const cellValue = parseFloat(cell.innerText) || 0;

                    totalDay += cellValue;
                });
                document.getElementById("dayTotal" + data[i].user_id).innerText = totalDay;


                //Night Total Calculation
                const nightCells = document.querySelectorAll(`.night${data[i].user_id}`);
                let totalNight = 0;
                nightCells.forEach(cell => {
                    const cellValue = parseFloat(cell.innerText) || 0;

                    totalNight += cellValue;
                });
                document.getElementById("nightTotal" + data[i].user_id).innerText = totalNight;


                //Guest Day Total Calculation
                const gDayCells = document.querySelectorAll(`.gDay${data[i].user_id}`);
                let totalGDay = 0;
                gDayCells.forEach(cell => {
                    const cellValue = parseFloat(cell.innerText) || 0;

                    totalGDay += cellValue;
                });
                document.getElementById("gDayTotal" + data[i].user_id).innerText = totalGDay;


                //Guest Night Total Calculation
                const gNightCells = document.querySelectorAll(`.gNight${data[i].user_id}`);
                let totalGNight = 0;
                gNightCells.forEach(cell => {
                    const cellValue = parseFloat(cell.innerText) || 0;

                    totalGNight += cellValue;
                });
                document.getElementById("gNightTotal" + data[i].user_id).innerText = totalGNight;

                //Day-Night Total & Guest Day-Night Total Calculation
                document.getElementById("dayNightTotal" + data[i].user_id).innerText = totalDay + totalNight;
                document.getElementById("gDayNightTotal" + data[i].user_id).innerText = totalGDay + totalGNight;

                document.getElementById("Total" + data[i].user_id).innerText = totalGDay + totalGNight + totalDay + totalNight;
            }


        }

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
            <div className="flex justify-between items-center">
                <input onChange={(e) => { calculateTotal(); mealQueryByDate(e) }} className="input input-sm border border-black" type="month" name="monthSelector" defaultValue={new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString().padStart(2, "0")} />
                <button className="btn btn-sm bg-green-500 text-white px-7 rounded py-2" onClick={exportTableToExcel}>Export</button>
            </div>
            {loading ? <LoadingScreen></LoadingScreen> : <p></p>}
            <div className="overflow-scroll rounded-md border border-green-500 mt-2 -mx-5">
                <table hidden={loading ? true : false} id="myTable" border={1} className="w-full whitespace-nowrap">
                    <thead className="border *:border *:*:border *:*:px-5 *:*:py-2 border-black text-center">
                        <tr >
                            <th rowSpan={2}>Date</th>
                            {data.map((user, index) => {
                                return <th key={index} colSpan={4}>{user.user_name}</th>;
                            })}
                        </tr>
                        <tr>
                            {data.map((user, index) => {

                                return <React.Fragment key={index}>

                                    <td>Day</td>
                                    <td>Night</td>
                                    <td>G. Day</td>
                                    <td>G. Night</td>
                                </React.Fragment>;
                            })}

                        </tr>
                    </thead>
                    <tbody className="border *:border *:*:border *:*:px-5 *:*:py-2 border-black text-center [&>*:nth-child(odd)]:bg-slate-50">


                        {dates.map((date, index) => {
                            return <tr key={index}>
                                {
                                    <>
                                        <td className=" w-max">{date}</td>
                                        {data.map((user, index) => {

                                            return <React.Fragment key={index}>
                                                <td className={"day" + user.user_id}   >{user.data.find((el) => el.date == date)?.day_meal}</td>
                                                <td className={"night" + user.user_id} >{user.data.find((el) => el.date == date)?.night_meal}</td>
                                                <td className={"gDay" + user.user_id}  >{user.data.find((el) => el.date == date)?.guest_day_meal}</td>
                                                <td className={"gNight" + user.user_id}>{user.data.find((el) => el.date == date)?.guest_night_meal}</td>
                                            </React.Fragment>
                                        })}

                                    </>
                                }
                            </tr>

                        })}
                        <tr>
                            <td rowSpan={3}>TOTAL</td>
                            {data.map((user, index) => {

                                return <React.Fragment key={index}>
                                    <td id={"dayTotal" + user.user_id}>x</td>
                                    <td id={"nightTotal" + user.user_id}>Null2</td>
                                    <td id={"gDayTotal" + user.user_id}>Null3</td>
                                    <td id={"gNightTotal" + user.user_id}>Null4</td>
                                </React.Fragment>

                            })}

                        </tr>
                        <tr>

                            {data.map((user, index) => {

                                return <React.Fragment key={index}>

                                    <td colSpan={2} id={"dayNightTotal" + user.user_id}></td>
                                    <td colSpan={2} id={"gDayNightTotal" + user.user_id}>r</td>

                                </React.Fragment>

                            })}

                        </tr>
                        <tr>

                            {data.map((user, index) => {

                                return <React.Fragment key={index}>

                                    <td colSpan={4} id={"Total" + user.user_id}>r</td>

                                </React.Fragment>

                            })}

                        </tr>

                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Home;