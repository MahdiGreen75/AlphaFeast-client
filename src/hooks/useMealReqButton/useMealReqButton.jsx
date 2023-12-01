import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const useMealReqButton = (id) => {
    const { user } = useContext(AuthContext);
    // console.log(id);
    const { data: arr = [], refetch, isPending } = useQuery({
        queryKey: [`${user?.email}`],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/mealReqQuery/${user?.email}`);
            return res.data;
        }
    })
    // console.log(arr);
    const finalArr = arr?.filter(item => item.mealId === id);
    return [finalArr, isPending, refetch];
};

export default useMealReqButton;