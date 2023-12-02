import { Link } from "react-router-dom";
import useQueryLunch from "../../../hooks/AllTheGetRequests/useQueryLunch";
import LikeComponent from "../../Meals/LikeComponent";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Lunch = () => {
    const [lunch, isPending] = useQueryLunch();
    const {user} = useContext(AuthContext);

    if (isPending) {
        return <div className="w-full flex justify-center items-center mt-5 min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {
                lunch.map(item =>
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
                                        <Link to={`/meals/${item._id}`} state={{ from: "lunch" }}>
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

export default Lunch;