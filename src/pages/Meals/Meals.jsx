import { Link } from "react-router-dom";
import useQueryAllMeals from "../../hooks/AllTheGetRequests/useQueryAllMeals";
import { useContext, useState } from "react";
import LikeComponent from "./LikeComponent";
import { AuthContext } from "../../providers/AuthProvider";
// import useQueryGetAdminPublishedMeals from "../../hooks/AllTheGetRequests/useQueryGetAdminPublishedMeals/useQueryGetAdminPublishedMeals";
// import axios from "axios";


const Meals = () => {
    const [allMeals, isPending] = useQueryAllMeals();
    const [searchType, serSearchType] = useState("price");
    const [searchTerm, serSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState('');
    // const [publishedMeals, setPublishedMeals] = useState([]);
    // const [publishedMeals] = useQueryGetAdminPublishedMeals();
    const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     axios.get("http://localhost:5000/getMealsPublishedByAdmin")
    //         .then(res => {
    //             setPublishedMeals(res.data);
    //         })
    // }, [])

    if (isPending) {
        return <div className="w-full flex justify-center items-center my-10 min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    const handleSearch = (e) => {
        e.preventDefault();
        //code goes here...


        console.log(searchType, searchTerm);
        e.target.reset();
        setSortOrder("");
        serSearchTerm("");
    }

    console.log(searchTerm);
    // console.log("published", publishedMeals);
    return (
        <>
            <div className="flex justify-center items-center p-10 bg-gradient-to-r from-cyan-500 to-blue-500 w-full border-2 rounded-md shadow-xl">
                <form onSubmit={handleSearch} className="flex flex-col justify-center items-center">
                    <label htmlFor="search">
                        <p className="text-base font-semibold my-2 ml-1">Do you want to __</p>
                        <select onChange={(e) => serSearchType(e.target.value)} value={searchType} id="search" className="select select-bordered w-full max-w-xs italic text-xs font-semibold">
                            <option value={"price"} className="italic text-xs font-semibold">Search by price?</option>
                            <option value={"title"} className="italic text-xs font-semibold">Search by title?</option>
                            {/* <option value={"type"} className="italic text-xs font-semibold">Search by Category? <span className="text-xs font-extralight text-slate-100">( breakfast, lunch, dinner )</span></option> */}
                        </select>
                    </label>
                    {
                        searchType === "price" ?
                            <span>
                                <label htmlFor="sel">
                                    <p></p>
                                    <span className="flex justify-center items-center gap-2 my-2">
                                        <label className="flex justify-center items-center">
                                            <input
                                                name="price"
                                                type="radio"
                                                onChange={() => setSortOrder('asc')}
                                                value="asc"
                                                id="sel"
                                                checked={sortOrder === 'asc'}
                                            />
                                            <span className="text-xs font-light ml-2">Ascending</span>
                                        </label>
                                        <label className="flex justify-center items-center">
                                            <input
                                                name="price"
                                                type="radio"
                                                onChange={() => setSortOrder('dsc')}
                                                value="dsc"
                                                id="sel"
                                                checked={sortOrder === 'dsc'}
                                            />
                                            <span className="text-xs font-light ml-2">Descending</span>
                                        </label>
                                    </span>
                                </label>
                            </span>
                            :
                            <input onChange={(e) => serSearchTerm(e.target.value)} value={searchTerm} type="text" name="searchTerm" placeholder="Type here" className="input input-bordered w-full max-w-xs mt-2 italic text-xs font-semibold" />
                    }

                    <div className="w-full flex justify-center items-center">
                        <></>
                    </div>
                </form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {
                    allMeals.sort((a, b) => {
                        if (sortOrder === "asc") {
                            return +(a.mealPrice) - +(b.mealPrice);
                        }
                        if (sortOrder === 'dsc') {
                            return +(b.mealPrice) - +(a.mealPrice);
                        }
                    }).filter(item => {
                        const trimmedMealTitle = item.mealTitle.trim();
                        const trimmedSearchTerm = searchTerm.trim();

                        if (trimmedSearchTerm) {
                            // Check if both trimmedMealTitle and trimmedSearchTerm are not empty
                            return (trimmedMealTitle !== "" && trimmedSearchTerm !== "" && trimmedMealTitle.toLowerCase().includes(trimmedSearchTerm.toLowerCase()));
                        } else {
                            return item;
                        }
                    }
                    ).map(item =>
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
                                        <Link to={`/meals/${item._id}`} state={{ from: "allMeals" }}>
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
        </>

    );
};

export default Meals;