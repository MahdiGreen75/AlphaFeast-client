/* eslint-disable react/prop-types */

import axios from "axios";
import { useContext } from "react";
// import { useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useMealReqButton from "../../hooks/useMealReqButton/useMealReqButton";

const MealReqButton = ({ mealReqObj }) => {
    // console.log(mealReqObj.mealId)
    const [data, isPending] = useMealReqButton(mealReqObj.mealId);
    const { user } = useContext(AuthContext)

    //this is final
    // console.log(data[0]?.states)
    const hendleRequest = () => {
        //send the meal request to individual users
        axios.patch(`http://localhost:5000/mealReq/${user?.email}`,
            {
                mealReqObj
            })
            .then((res) => {
                console.log('Meal Requeste to the server', res.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Meal Request Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    if (isPending) {
        return <div className="w-full flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <td>
            {
                (data[0]?.states) === undefined ? <>
                    <button onClick={hendleRequest} className="btn btn-sm btn-success">Request The Meal</button>
                </>
                    :
                    <>
                        <button className="btn btn-sm pointer-events-none opacity-60 btn-warning">{data[0]?.states}</button>
                    </>
            }
        </td>
    );
};

export default MealReqButton;