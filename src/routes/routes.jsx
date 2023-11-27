import Root from "../layouts/Root";


import {
    createBrowserRouter
  } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <div>Error occured!</div>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <div>Hey  , fool</div>
            }
        ]

    },
]);

export default router;