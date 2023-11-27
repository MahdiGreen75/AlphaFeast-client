import MemberShip from "../../MemberShip/MemberShip";
import Banner from "../Banner/Banner"
import MealsByCategory from "../MealsByCategory/MealsByCategory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealsByCategory></MealsByCategory>
            <MemberShip></MemberShip>
        </div>
    );
};

export default Home;