import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useQueryDinner = () => {
    const { data: arr = [], refetch, isPending } = useQuery({
        queryKey: ['dinner'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/dinner');
            return res.data;
        }
    })

    return [arr, isPending, refetch];
};

export default useQueryDinner;