import Root from "../layouts/Root";


import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <div>Error occured!</div>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]

    },
]);

export default router;