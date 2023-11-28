import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useQueryLunch = () => {
    const { data: arr = [], refetch, isPending } = useQuery({
        queryKey: ['lunch'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/lunch');
            return res.data;
        }
    })

    return [arr, isPending, refetch];
};

export default useQueryLunch;