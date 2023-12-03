import Root from "../layouts/Root";
import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Meals from "../pages/Meals/Meals";
import AdminDashBoard from "../layouts/AdminDashBoard";
import UpcomingMeals from "../pages/AdminPages/UpcomingMeals/UpcomingMeals";
import ManageUsers from "../pages/AdminPages/ManageUsers/ManageUsers";
import AdminProfile from "../pages/AdminPages/AdminProfile/AdminProfile";
import ServeMeals from "../pages/AdminPages/ServeMeals/ServeMeals";
import AddMeals from "../pages/AdminPages/AddMeals/AddMeals";
import AllReviews from "../pages/AdminPages/AllReviews/AllReviews";
import MealDetails from "../pages/MealDetails/MealDetails";
import UserDashboard from "../layouts/UserDashboard";
import UserProfile from "../pages/UserPages/UserProfile/UserProfile";
import RequestedMeals from "../pages/UserPages/RequestedMeals/RequestedMeals";
import UserReviews from "../pages/UserPages/UserReviews/UserReviews";
import PrivateRoute from "./PrivateRoute";
import UpcomingMealsForUsers from "../pages/Home/UpcomingMealsForUsers/UpcomingMealsForUsers";
import CheckOut from "../pages/CheckOut/CheckOut";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <div>Error occured!</div>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/meals',
                element: <Meals></Meals>
            },
            {
                path: '/meals/:details',
                element: <MealDetails></MealDetails>
            },
            {
                path: "/checkOutPage/:checkId",
                element: <CheckOut></CheckOut>
            },
            {
                path: "/upcomingMealsForUsers",
                element: <UpcomingMealsForUsers></UpcomingMealsForUsers>
            }
        ]

    },
    {
        path: "adminDashboard",
        element: <PrivateRoute><AdminDashBoard></AdminDashBoard></PrivateRoute>,
        children: [
            {
                path: "profile",
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "addMeals",
                element: <AddMeals></AddMeals>
            },
            {
                path: "allReviews",
                element: <AllReviews></AllReviews>
            },
            {
                path: 'serveMeals',
                element: <ServeMeals></ServeMeals>
            },
            {
                path: 'upcomingMeals',
                element: <UpcomingMeals></UpcomingMeals>
            }
        ]
    },
    {
        path: "userDashboard",
        element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
        children: [
            {
                path: "profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: 'requestedMeals',
                element: <RequestedMeals></RequestedMeals>
            },
            {
                path: "userReviews",
                element: <UserReviews></UserReviews>
            }
        ]
    }
]);

export default router;