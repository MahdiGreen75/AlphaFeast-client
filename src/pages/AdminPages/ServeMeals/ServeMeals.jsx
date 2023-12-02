import axios from "axios";
// import { useContext } from "react";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { MealReqContext } from "../../../providers/mealReqProvider";
// import useMealReqButton from "../../../hooks/useMealReqButton/useMealReqButton";
// import ServeMealsButton from "./ServeMealsButton";
import useMealReqButton from "../../../hooks/useMealReqButton/useMealReqButton";
import Swal from "sweetalert2";
// import useMealReqButton from "../../../hooks/useMealReqButton/useMealReqButton";
// import { AuthContext } from "../../../providers/AuthProvider";


const ServeMeals = () => {
    const [value, setValue] = useState([]);
    // const initialText = localStorage.getItem('displayText') || 'Initial Text';
    // const [loadDeliverBtn, setLoadDeliverBtn] = useState(false);

    const [mealReq, setMealReq] = useContext(MealReqContext);
    const [, isPending, refetch] = useMealReqButton(mealReq);
    // const { user } = useContext(AuthContext);
    // console.log();
    useEffect(() => {
        axios.get(`http://localhost:5000/getall`)
            .then(res => {
                setValue(res.data);
            })
    }, []);

    const handleServeMealRequest = (id, email) => {
        setMealReq(id);
        // console.log(id, email);
        // updating the meal request to "delivered."
        const reqObj = {
            email
        }

        axios.patch(`http://localhost:5000/deliverMeal/${id}`, { reqObj })
            .then(res => {
                // console.log("Delivered to the user.", res.data);
                if (res.data.modifiedCount || res.data.matchedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Meal delivered successfully.",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    console.log("inside.")
                    refetch();
                }
            });
    }

    if (isPending) {
        return <p className="w-full flex items-center justify-center mt-5">
            <span className="loading loading-spinner loading-lg"></span>
        </p>
    }

    return (
        <div className="my-5 flex flex-col items-center justify-center">
            <div className="my-5 w-fit">
                <h2 className="text-xl font-semibold text-center border-b-2 border-black pb-2">Below are users who requested for meals.</h2>
            </div>
            <div className="space-y-5">
                {value.map(item1 => <div key={item1._id}>
                    <div className="">
                        <div className="p-5 border-2 rounded-md space-y-2 shadow-xl">
                            <h2 className="text-sm font-semibold">User Name: {item1.user_name}</h2>
                            <h2 className="text-sm font-semibold">User Email: {item1.user_email}</h2>
                            <div className="divider"></div>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Order</th>
                                                <th>Meal Title</th>
                                                <th>Meal Type</th>
                                                <th>Serve</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* row 1 */}
                                            {
                                                item1.requestedMealsId.map((item, index) => <tr key={index}>
                                                    <th>{index + 1}</th>
                                                    <td>{item.mealTitle}</td>
                                                    <td>{item.mealType}</td>
                                                    {/* <td>
                                                        <ServeMealsButton id={item.mealId}></ServeMealsButton>
                                                    </td> */}
                                                    <td>
                                                        <button onClick={() => handleServeMealRequest(item.mealId, item1.user_email)} className="text-white font-semibold bg-blue-500 hover:bg-blue-700 active:bg-blue-800 px-2 py-1 rounded-md duration-300">Serve</button>
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ServeMeals;