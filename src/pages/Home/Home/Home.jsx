import MemberShip from "../../MemberShip/MemberShip";
import Banner from "../Banner/Banner"
import Faqs from "../Faqs/Faqs";
import MealsByCategory from "../MealsByCategory/MealsByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealsByCategory></MealsByCategory>
            <MemberShip></MemberShip>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;