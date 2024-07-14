import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";


const Login = () => {

    const {googleSignUp} = useContext(AuthContext);


    const manageSignIn = ()=>{

        //console.log(import.meta.env.VITE_API_KEY)

        googleSignUp()
            .then(result => {
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            })

    }

    return (

        <div className="p-5 grid place-items-center">
            <img className="w-full" src="LogIn.jpg" alt="" />
            <button onClick={manageSignIn} className="rounded-md shadow-md flex justify-start items-center gap-3 px-7 py-2 mt-10 font-semibold bg-green-100"> <img className="w-5 " src="google.png" alt="" />Continue With Google</button>
        </div>
    );
};

export default Login;