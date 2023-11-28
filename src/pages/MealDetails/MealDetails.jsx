import { useLocation } from "react-router-dom";

const MealDetails = () => {
    const location = useLocation();
    const {
        _id,
        adminEmail,
        adminName,
        imgLink,
        mealDescription,
        mealReview,
        mealTitle,
        mealPostTime

    } = location.state;
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
                                        <td>
                                            <button className="btn btn-primary">Request</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-80 sm:w-[800px] p-2 sm:p-5 border-2 m-5 rounded-xl flex items-center justify-center mx-auto">
                <>
                    {mealReview.map((item, index) => <div key={index} className="w-full text-center">
                        <p className="text-2xl font-bold text-center my-2">Review Of</p>
                        <p className="text-base sm:text-xl font-medium">{item}</p>
                    </div>)}
                </>
                <div className="w-full flex justify-start">
                    <button className="btn btn-sm">Add a review</button>
                </div>
            </div>
            <div className="w-80 sm:w-[800px] p-2 sm:p-5 border-2 m-5 rounded-xl flex items-center justify-center mx-auto">
                {mealReview.map((item, index) => <div key={index} className="w-full text-center">
                    <p className="text-2xl font-bold text-center my-2">Review Of</p>
                    <p className="text-base sm:text-xl font-medium">{item}</p>
                </div>)}
            </div>
        </div>
    );
};

export default MealDetails;

/**
 * 
 * 
 * "_id": "6565d90426095db25ad26d2b",
    "imgLink": "https://i.ibb.co/nLMxjMv/img-1.jpg",
    "adminEmail": "qarimahdi217gmail.com",
    "adminName": "Mahdi Aiden",
    "mealDescription": "It is egg curry which is made with awesome mixture of spices. consider taking this meal. you will love it.",
    "mealPrice": "50",
    "mealLikes": "0",
    "mealReview": [
      "Egg curry is awesome. it was so delicious that i can't forget it till now!"
    ],
    "mealTitle": "Egg Curry",
    "mealType": "breakfast",
    "upcomingOrAddMeals": "addToMeals",
    "mealRequest": false,
    "mealPostTime": "2023-11-28T12:11:48.036Z"
 */