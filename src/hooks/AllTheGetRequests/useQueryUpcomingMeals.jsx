import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useQueryUpcomingMeals = () => {
    const { data: arr = [], refetch, isPending } = useQuery({
        queryKey: ['upcomingMeals'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/upcomingMeals');
            return res.data;
        }
    })

    return [arr,isPending, refetch];
};

export default useQueryUpcomingMeals;