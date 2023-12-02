import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useQueryGetAdminPublishedMeals = () => {
    const { data: arr = [], refetch, isPending } = useQuery({
        queryKey: ['allMeals'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/getMealsPublishedByAdmin');
            return res.data;
        }
    })

    return [arr, isPending, refetch];
};

export default useQueryGetAdminPublishedMeals;