import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../Auth/AuthProvider";


const useAdmin = () => {

    const { user ,serverRootUrl }  = useContext(AuthContext);
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axios.get(serverRootUrl+"/"+user.email);
            if(res.data == 'admin' ){
                return true;
            }
            return false;
        }
    });

    return [isAdmin, isAdminLoading];

};

export default useAdmin;

