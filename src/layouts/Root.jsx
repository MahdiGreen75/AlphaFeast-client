import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";


const Root = () => {
    return (
        <div className="px-0 xl:max-w-6xl lg:max-w-[900px] md:max-w-2xl sm:px-5 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;