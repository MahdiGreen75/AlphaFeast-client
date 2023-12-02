import { Link } from "react-router-dom";
import useQueryUpcomingMeals from "../../../hooks/AllTheGetRequests/useQueryUpcomingMeals";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
// import { data } from "autoprefixer";


const UpcomingMeals = () => {
    const [allMeals, isPending, refetch] = useQueryUpcomingMeals();
    const [meals, setMeals] = useState([]);
    const { user } = useContext(AuthContext);
    const admin = user?.email;
    if (isPending) {
        return <div className="w-full flex justify-center items-center my-10 min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    const handlePublishAdmin = (item) => {
        console.log('***', item);
        axios.post(`http://localhost:5000/upcomingMealsByAdmin/${admin}`, item)
            .then(res => {
                if (res.data.insertedId) {
                    const remaining = allMeals.filter(i => (!(i._id === item._id)));
                    setMeals(remaining);
                    axios.delete(`http://localhost:5000/delUpcomingMeals/${item._id}`)
                        .then(res => {
                            if (res.data.deletedCount) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Meal Published Successfully.",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                refetch();
                            }
                        })
                }
            })
    }

    let dataArr;
    console.log(meals);
    if (meals.length === 0) {
        dataArr = allMeals;
    } else {
        dataArr = meals;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {
                dataArr.map(item =>
                    <div key={item._id}>
                        <div className="shadow-xl flex flex-col justify-center items-center gap-2 p-5 border m-5 rounded">
                            <div className="w-full h-48"><img className="w-full h-full border-2 rounded" src={item.imgLink} /></div>
                            <h2 className="text-base font-bold">{item.mealTitle}</h2>
                            <p className="flex items-center justify-center">
                                <span className="text-base font-semibold">Price:</span>
                                <span className="font-light text-base">${item.mealPrice}</span>
                            </p>
                            <div>
                                <>
                                    <button onClick={() => handlePublishAdmin(item)} className="text-white bg-blue-500 active:bg-blue-800 px-2 py-1 rounded-md cursor-pointer font-bold text-xs">Publish</button>
                                </>
                                {/* <Link to={`/meals/${item._id}`} state={{ from: "upcomingMeals" }}>
                                    <button className="btn btn-primary">Details</button>
                                </Link> */}
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default UpcomingMeals;

