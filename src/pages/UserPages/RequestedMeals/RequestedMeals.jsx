import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const RequestedMeals = () => {
    const [value, setValue] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/userReqMeals/${user?.email}`)
            .then(res => {
                setValue(res.data);
            })
    }, [user?.email])

    const handleCancelRequest = () => {
        // axios.delete(`http://localhost:5000/userReqMealsDelete/${user?.email}`)
        //     .then(res => {
        //         console.log(res.data);
        //     })
    }

    return (
        <div>
            <div className="p-5 border-2 mt-5 rounded-md shadow-xl">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Order</th>
                                <th>Meal Title</th>
                                <th>Likes Count</th>
                                <th>Statistics</th>
                                {/* <th>Requests</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                value?.map((item, index) => <tr  key={item._id}>
                                    <>
                                        <td>{index + 1}</td>
                                        <td>{item.mealTitle}</td>
                                        <td>{item.likesCount}</td>
                                        <td>{item.states}</td>
                                        {/* <td><button onClick={handleCancelRequest} className="text-xs font-bold text-white bg-blue-600 active:bg-blue-800 px-2 py-1 rounded-md">Cancel</button></td> */}
                                    </>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default RequestedMeals;
