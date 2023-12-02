import { Link } from "react-router-dom";
import useQueryDinner from "../../../hooks/AllTheGetRequests/useQueryDinner";
import LikeComponent from "../../Meals/LikeComponent";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Dinner = () => {
    const [breakfast, isPending] = useQueryDinner();
    const {user}  = useContext(AuthContext);

    if(isPending) {
        return <div className="w-full flex justify-center items-center my-10 min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {
                breakfast.map(item =>
                    <div key={item._id}>
                        <div className="shadow-xl flex flex-col justify-center items-center gap-2 p-5 border m-5 rounded">
                            <div className="w-full h-48"><img className="w-full h-full border-2 rounded" src={item.imgLink} /></div>
                            <h2 className="text-base font-bold">{item.mealTitle}</h2>
                            <p className="flex items-center justify-center">
                                <span className="text-base font-semibold">Price:</span>
                                <span className="font-light text-base">${item.mealPrice}</span>
                            </p>
                            <div style={
                                    user ?
                                        { justifyContent: "space-between" }
                                        :
                                        { justifyContent: "center" }
                                } className="flex items-center w-full">
                                    <div>
                                        <Link to={`/meals/${item._id}`} state={{ from: "dinner" }}>
                                            <button className="btn btn-primary">Details</button>
                                        </Link>
                                    </div>
                                    {
                                        user && <>
                                            <div>
                                                <LikeComponent id={item._id}></LikeComponent>
                                            </div>
                                        </>
                                    }
                                </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Dinner;