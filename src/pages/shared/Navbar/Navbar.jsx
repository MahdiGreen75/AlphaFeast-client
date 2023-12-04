import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { GiRiceCooker } from "react-icons/gi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/isAdmin/${user?.email}`)
            .then(res => {
                setAdmin(res.data);
            })
    })

    // console.log(user);
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log("LogOut successfull");
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Good bye, ${user?.displayName}! See ya!!!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const navLink = <>
        <li><span><NavLink to="/">Home</NavLink></span></li>
        <li><span><NavLink to={'/meals'}>Meals</NavLink></span></li>
        <li><span><NavLink to={"/upcomingMealsForUsers"}>Upcoming Meals</NavLink></span></li>
        <li><span><NavLink to={'/login'}>Join Us</NavLink></span></li>
        {/* <li><span><NavLink to={'/paymentHistory'}>Payment History</NavLink></span></li> */}
    </>

    return (
        <div className="navbar bg-base-100 border-2 rounded-full my-2 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><GiRiceCooker className="text-2xl"></GiRiceCooker>AlphaFeast</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            {
                user ?
                    <>
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="p-1 m-1 rounded-full bg-blue-500 shadow-xl"><img className="w-10 h-10 object-cover rounded-full" src={user?.photoURL ? user?.photoURL : "0"} /></div>
                                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><span className="pointer-events-none font-bold">{user?.displayName}</span></li>
                                    {/* Admin Or User Dashboard based on admin identification */}
                                    <li><span><NavLink to={admin === "admin" ? "/adminDashboard" : "/userDashboard"}>{admin === "admin" ?" Dashboard (Admin)" : "DashBoard"}</NavLink></span></li>
                                    <li><span><NavLink onClick={handleLogout}>Logout</NavLink></span></li>
                                </ul>
                            </div>
                        </div>
                    </>
                    :
                    <div className="navbar-end opacity-0 cursor-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1 rounded-full bg-slate-500"><img className="w-4 rounded-full" src={user?.photoURL ? user?.photoURL : "0"} /></div>
                            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><span className="pointer-events-none font-bold">{user?.displayName}</span></li>
                                {/* Admin Or User Dashboard based on admin identification */}
                                <li><span><NavLink to={admin === "admin" ? "/adminDashboard" : "/userDashboard"}>{admin === "admin" ?" Dashboard (Admin)" : "DashBoard"}</NavLink></span></li>
                                <li><span><NavLink onClick={handleLogout}>Logout</NavLink></span></li>
                            </ul>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Navbar;