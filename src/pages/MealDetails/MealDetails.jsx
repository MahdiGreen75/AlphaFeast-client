import axios from "axios";
import { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useQueryAllMeals from "../../hooks/AllTheGetRequests/useQueryAllMeals";
import useQueryBreakfast from "../../hooks/AllTheGetRequests/useQueryBreakfast";
import useQueryLunch from "../../hooks/AllTheGetRequests/useQueryLunch";
import useQueryDinner from "../../hooks/AllTheGetRequests/useQueryDinner";
import MealReqButton from "./MealReqButton";
import useQueryUpcomingMeals from "../../hooks/AllTheGetRequests/useQueryUpcomingMeals";
// import { MealReqContext } from "../../providers/mealReqProvider";
// import Swal from "sweetalert2";

const MealDetails = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const { details } = useParams();
    const [allMeals, pending1, refetch1] = useQueryAllMeals();
    const [breakfast, pending2, refetch2] = useQueryBreakfast();
    const [dinner, pending3, refetch3] = useQueryDinner();
    const [lunch, pending4, refetch4] = useQueryLunch();
    const [upcomingMeals, pending5, refetch5] = useQueryUpcomingMeals();
    // const [publishedMeals, setPublishedMeals] = useState([]);


    // useEffect(() => {
    //     axios.get("http://localhost:5000/getMealsPublishedByAdmin")
    //         .then(res => {
    //             setPublishedMeals(res.data);
    //         })
    // }, [])

    // console.log(mealReq);

    const from = location.state.from;
    console.log(from);
    let detailsObj;

    if (pending1 || pending2 || pending3 || pending4 || pending5) {
        return <div className="w-full min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (from === 'allMeals') {
        detailsObj = allMeals;
    }

    if (from === 'upcomingMeals') {
        detailsObj = upcomingMeals;
    }

    if (from === 'breakfast') {
        detailsObj = breakfast;
    }

    if (from === "dinner") {
        detailsObj = dinner;
    }

    if (from === 'lunch') {
        detailsObj = lunch;
    }


    const myObj = detailsObj.filter(item => (item._id === details));

    let {
        _id,
        adminEmail,
        adminName,
        imgLink,
        mealDescription,
        mealReview,
        mealTitle,
        mealPrice,
        mealLikes,
        mealType,
        mealPostTime
    } = myObj[0];

    // console.log(myObj)


    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        //code goes here.
        const userReview = `${review} ---${user?.displayName}`;
        const dataObj = {
            "review": userReview,
            "mealTitle": mealTitle,
            "mealImg": imgLink,
        }
        // console.log(dataObj)
        axios.patch(`http://localhost:5000/reviews/${_id}`, { review: userReview })
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    refetch1();
                    refetch2();
                    refetch3();
                    refetch4();
                    refetch5();
                    e.target.reset();
                    //send the review to the user.
                    axios.patch(`http://localhost:5000/userReviews/${user?.email}`,
                        {
                            dataObj
                        })
                        .then((res) => {
                            console.log('Review stored in the user.', res.data);
                        })
                }
            })
    }

    const mealReqObj = {
        mealId: _id,
        mealTitle: mealTitle,
        likesCount: mealLikes,
        states: "pending",
        mealPrice: mealPrice,
        mealType: mealType,
    }



    return (
        <div className="w-full">
            <div className="w-full flex flex-col justify-center items-center my-5">
                <div className="w-80 sm:w-[800px] p-2 sm:p-5 border-2 m-5 rounded-xl">
                    <div >
                        <img src={imgLink} className="w-full border-slate-200 border-2 rounded-xl" />
                    </div>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Info</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>Meal Title</th>
                                        <td>{mealTitle}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>Meal Distrubutr Name</th>
                                        <td>{adminName}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>Meal Distrubutr Email</th>
                                        <td>{adminEmail}</td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <th>Meal Description</th>
                                        <td>{mealDescription}</td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr>
                                        <th>Meal Post Time</th>
                                        <td>{mealPostTime}</td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr>
                                        <th>Request Your Meal</th>
                                        <MealReqButton mealReqObj={mealReqObj}></MealReqButton>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-80 sm:w-[800px] mx-auto border-2 rounded-xl px-5">
                <div className=" flex items-center justify-center w-full flex-col">
                    <p className="text-2xl font-bold text-center my-2">Review</p>
                    {mealReview.map((item, index) => <div key={index} className="w-full 
                    text-center p-2 sm:p-5 border-2 m-5 rounded-xl ">
                        <p className="text-base sm:text-xl font-medium">{item}</p>
                    </div>)}
                </div>
                {
                    user && <div className="">
                        <div className="w-full flex justify-center mb-5 flex-col border-2 rounded-xl p-5">
                            <form onSubmit={handleSubmit}>
                                <button className="btn btn-sm w-full">Add a review</button>
                                <textarea name={"review"} className="w-full border-2 rounded-md mt-2 outline-none text-sm"></textarea>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default MealDetails;

