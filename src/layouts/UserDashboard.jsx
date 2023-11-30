import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const UserDashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-start">
                    <div className="w-full flex justify-between items-center bg-blue-400">
                        <span className="font-semibold text-base lg:hidden">AlphaFeast</span>
                        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden m-3 font-bold">
                            <GiHamburgerMenu></GiHamburgerMenu>
                        </label>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-auto min-h-full bg-base-200 text-base-content space-y-2 font-semibold">
                        {/* Sidebar content here */}
                        <li>
                            <NavLink to={"/userDashboard/profile"}>Your Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/userDashboard/requestedMeals"}>Requested Meals</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/userDashboard/userReviews"}>Your Reviews</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UserDashboard;