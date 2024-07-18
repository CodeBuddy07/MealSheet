import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const SignUp = () => {
    const { googleSignUp, user, serverRootUrl } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const [exist, setExist] = useState(false);
    const [primaryData, setPrimaryData] = useState({});
    const [primaryUser, setPrimaryUser] = useState({});

    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();


    const check = (key, value) => {
        axios.get(serverRootUrl + "/verify?key=" + key + "&value=" + value)
            .then(res => {
                setExist(res.data.status);
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const manageSignIn = () => {

        googleSignUp()
            .then(result => {
                axios.get(serverRootUrl + "/verify?key=email&value=" + result.user.email)
                    .then(res => {
                        if (res.data.status) {
                            navigate('/')
                        } else {
                            axios.get(serverRootUrl + "/verify?key=members&value=" + result.user.email)
                                .then(res => {
                                    if (res.data.status) {
                                        axiosSecure.get("/users?email=" + result.user.email)
                                            .then(res => {
                                                //console.log(res.data.filter(user => user.email === result.user.email)[0].phone)
                                                if (res.data.filter(user => user.email === result.user.email)[0].phone) {
                                                    navigate('/')
                                                } else {
                                                    setPrimaryData(res.data.check);
                                                    setPrimaryUser(result.user);
                                                    result.user ? setVisible(true) : toast.error('Something Wrong!', { position: "top-center", theme: "colored" });
                                                }
                                            })
                                            .catch(err => {
                                                console.log(err)
                                            })

                                    } else {
                                        result.user ? setVisible(true) : toast.error('Something Wrong!', { position: "top-center", theme: "colored" });
                                    }

                                })
                                .catch(err => {
                                    console.log(err)
                                })

                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })


            })
            .catch(err => {
                toast.error('Something Wrong!', { position: "top-center", theme: "colored" });
                console.log(err.message);
            })

    };

    const manageCreate = (e) => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const messName = (form.messName.value).trim().replace(" ", "-");
        const Terms = form.terms.value;
        const photoURL = user?.photoURL || primaryUser?.photoURL;
        const email = user?.email || primaryUser?.email;
        const uid = user?.uid || primaryUser?.uid;

        const data = {
            name: name,
            phone: phone,
            photoURL: photoURL,
            email: email,
            uid: uid,
            role: "admin"
        }

        if (primaryData?.messName) {
            data.role = "member";
            axiosSecure.post("updateuser?email=" + primaryUser.email, data)
                .then(() => {
                    navigate('/');
                })
                .catch(err => {
                    console.log(err)
                })
        } else {

            if (Terms == "on") {
                if (phone.length === 11) {
                    if (phone.startsWith("01")) {
                        if (exist) {
                            toast.error("Mess Already Exists!", { theme: "colored", position: "top-center" })
                        } else {
                            axios.put(serverRootUrl + "/signup?key=" + messName, data, { withCredentials: true })
                                .then(res => {
                                    if (res.data.acknowledged) {
                                        toast.success("Mess Created!", { theme: "colored", position: "top-center" });
                                        navigate('/');
                                    } else {
                                        toast.error("Something is Wrong!", { theme: "colored", position: "top-center" })
                                    }
                                })
                                .catch(err => {
                                    console.log(err);
                                })
                        }
                    } else {
                        toast.error("Not a valid Phone Number!", { theme: "colored", position: "top-center" })
                    }
                } else {
                    toast.error("Not a valid Phone Number!", { theme: "colored", position: "top-center" })
                }
            }
        }

        //setVisible(false)
    };


    return (
        <div className="p-5 relative ">
            <div className=" grid place-items-center ">
                <img className="w-full" src="SignUp.jpg" alt="" />
                <button onClick={manageSignIn} className="rounded-md shadow-md flex justify-start items-center gap-3 px-7 py-2 mt-10 font-semibold bg-green-100"> <img className="w-5 " src="google.png" alt="" />Continue With Google</button>
            </div>
            <div className={visible ? "absolute top-0 right-0 bottom-0 left-0 min-h-screen p-5  bg-white" : "hidden"}>
                <form onSubmit={(e) => manageCreate(e)} >
                    <div className="w-full grid place-content-center my-5">
                        <img className="w-36  rounded-full border-4 border-blue-500" src={primaryUser?.photoURL ? primaryUser.photoURL : user?.photoURL ? user.photoURL : "Cat03.jpg"} alt="" />
                    </div>
                    <div>
                        <h1 className="font-semibold">Your Name</h1>
                        <input name="name" required className="w-full border rounded-md px-3 py-2" placeholder="Type here..." defaultValue={primaryUser?.displayName ? primaryUser.displayName : user?.displayName ? user?.displayName : ""} type="text" />
                    </div>
                    <div className="mt-3">
                        <h1 className="font-semibold">Your Phone Number</h1>
                        <div className="flex justify-start relative items-center">
                            <input name="phone" required className=" w-full border rounded-md px-3 pl-10 py-2 " defaultValue={primaryUser?.PhoneNumber ? primaryUser.PhoneNumber : user?.PhoneNumber ? user?.PhoneNumber : ""} placeholder="Type here..." type="number" />
                            <span className="font-semibold absolute left-2">+88</span>
                        </div>

                    </div>
                    <div className="mt-3">
                        <h1 className="font-semibold">Mess Name</h1>
                        <div className="flex justify-start relative items-center">
                            <input onChange={(e) => check("messName", (e.target.value).toLowerCase().replace(" ", "-"))} name="messName" required className="w-full border rounded-md px-3 pr-10 py-2" placeholder={primaryData?.messName ? primaryData.messName : "Type here..."} defaultValue={primaryData?.messName ? primaryData.messName : ""} disabled={primaryData?.messName ? true : false} type="text" />
                            <span className="font-semibold absolute right-2"> {exist ? <span className="text-red-500"><i className="fa-solid fa-circle-xmark"></i></span> : <span className="text-green-500"><i className="fa-solid fa-circle-check"></i></span>} </span>
                        </div>


                    </div>
                    <div className="flex justify-start items-center gap-5 mt-3">
                        <input required type="checkbox" name="terms" />
                        <p className="font-semibold">I Accept the <span className="text-green-500">Terms & Conditions</span></p>
                    </div>
                    <input className="btn w-full rounded-md text-white bg-green-500 text-lg font-semibold mt-5" type="submit" value="Create" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;