import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useQueryBreakfast = () => {
    const { data: arr = [], refetch, isPending } = useQuery({
        queryKey: ['breakfast'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/breakfast');
            return res.data;
        }
    })

    return [arr,isPending, refetch];
};

export default useQueryBreakfast;