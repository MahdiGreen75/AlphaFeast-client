import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useQueryAllMeals = () => {
    const { data: arr = [], refetch, isPending } = useQuery({
        queryKey: ['allMeals'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/allMeals');
            return res.data;
        }
    })

    return [arr,isPending, refetch];
};

export default useQueryAllMeals;