import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserReviews = () => {
    const [value, setValue] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/userReview/${user?.email}`)
            .then(res => {
                setValue(res.data);
            })
    }, [user?.email])

    // const handleCancelRequest = () => {
    //     // axios.delete(`http://localhost:5000/userReqMealsDelete/${user?.email}`)
    //     //     .then(res => {
    //     //         console.log(res.data);
    //     //     })
    // }
    console.log(value.user_reviews);
    return (
        <div>
            <div className="p-5 border-2 mt-5 rounded-md shadow-xl">

                {
                    value.user_reviews?.length === 0 ? <>
                        <h2 className="text-xl font-semibold ">You have no reviews</h2>
                    </> :
                        <>
                            <h2 className="text-xl font-semibold ">You reviewed on {value.user_reviews?.length} meals:</h2>
                            {
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Review</th>
                                                <th>Meal Title</th>
                                                <th>Meal Image</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            {
                                                value.user_reviews?.map((item, idx) =>
                                                    <tr key={idx}>
                                                        <th>1</th>
                                                        <td>{item.review}</td>
                                                        <td>{item.mealTitle}</td>
                                                        <td><img className="w-20 border border-black" src={item.mealImg}/></td>
                                                    </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            }
                        </>
                }
            </div>
        </div >
    );
};

export default UserReviews;
