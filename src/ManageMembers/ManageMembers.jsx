import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import LoadingScreen from "../LoadingScreen";
import { toast } from "react-toastify";



const ManageMembers = () => {
    const [search, setSearch]= useState("");
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);

    const { isSuccess, data: data = [], error } = useQuery({
        queryKey: ['data'],
        queryFn: () => {
            const res = axiosSecure.get(`/users?email=${user?.email}`)
            return res;
        }
    })

    if (!isSuccess) {
        <LoadingScreen></LoadingScreen>
    }

    if (error) {
        console.log(error);
        toast.error("Something is Wrong!", { theme: "colored", position: "top-center" });
    }

    const addUser = () => {
        const newUser = document.getElementById("emailInput").value;
        const data = {
            email: newUser
        }
        if (newUser.includes("@") && newUser.includes(".")) {
            axiosSecure.post('/adduser?email=' + user.email, data)
                .then(() => {
                    toast.success("User Added", { theme: "colored", position: "top-center" });
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            toast.error("Enter a valid!", { theme: "colored", position: "top-center" });
        }

    }

    


    return (
        <div className="p-5 ">
            <div className="flex justify-center items-center">
                <input id="emailInput" className="py-2 w-full px-3 border rounded-md " placeholder="example@example.com" type="email" />
                <button onClick={addUser} className="bg-green-500 text-white font-bold btn-sm rounded-md ml-3">ADD</button>
            </div>
            <div className="mt-5 border-2 border-green-500  overflow-scroll -mx-5 rounded-md min-h-96">

                <ol className=" [&>*:nth-child(even)]:bg-slate-200  ">
                    <div className="flex justify-center items-center py-3 px-2 border w-full">
                        <input onChange={(e) => setSearch(e.target.value)} className=" w-full flex-1 border rounded-full px-2 py-1 shadow-sm" type="search" name="searchBar" placeholder="search here..." />
                        <button className="border rounded-full px-2 py-1 ml-2 shadow-sm"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    {data?.data?.filter(x=>  (x.email.toLowerCase().search(search.toLowerCase()) > -1) || (x.name? x.name.toLowerCase().search(search.toLowerCase()) > -1 : false)).map((user, index) =>
                        <li key={index} className=" px-2 py-2 text-nowrap w-full">
                            <div className="flex items-center gap-3  ">
                                <h1 className="font-semibold">{(index + 1).toString().padStart(3, "0")}.</h1>
                                <h1 className="font-semibold">{user.name ? user.name : "Unnamed"} <span className="font-normal text-sm">({user.email})</span></h1>
                            </div>
                            <div className="flex items-center gap-3  ml-12">
                                <span className="text-red-500"><i className="fa-solid fa-trash-can"></i></span>
                                <select className="border rounded-md" defaultValue={user.role ? user.role : "Member"} >
                                    <option value="Admin">Admin</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Member">Member</option>
                                </select>
                            </div>
                        </li>
                    )}


                </ol>

            </div>
        </div>
    );
};

export default ManageMembers;