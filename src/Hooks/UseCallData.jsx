import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCallData = (placeholder) => {
    const axiosSecure = useAxiosSecure();

    const{ isLoading, refetch, data: data = []} = useQuery({
        queryKey: [`${placeholder}`],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/get?key=${placeholder}`);
            return res.data;
        } 
    })

    return [data, refetch, isLoading];

}

export default useCallData;