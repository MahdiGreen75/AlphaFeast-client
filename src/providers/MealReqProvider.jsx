/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MealReqContext = createContext(null);

const MealReqProvider = ({children}) => {
    const [mealReq, setMealReq] = useState("Request the meal");

    return (
        <MealReqContext.Provider value={[mealReq, setMealReq]}>
            {children}
        </MealReqContext.Provider>
    );
};

export default MealReqProvider;