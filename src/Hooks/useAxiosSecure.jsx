import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";




const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
});


const useAxiosSecure = () => {
    
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    useEffect(()=>{
        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, async (error) =>{
            const status = error.response.status;
            if(status === 401 || status === 403){
                await logOut();
                navigate('/signup')
            }
            return Promise.reject(error)
        });
    },[])

    return axiosSecure;
};

export default useAxiosSecure;