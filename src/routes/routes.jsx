import Root from "../layouts/Root";
import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Meals from "../pages/Meals/Meals";
import UpcomingMeals from "../pages/UpcomingMeals/UpcomingMeals";

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
                path: "/upcomingMeals",
                element: <UpcomingMeals></UpcomingMeals>
            }
        ]

    },
]);

export default router;