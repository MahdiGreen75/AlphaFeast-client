import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/manageUsers")
            .then(res => {
                const nonAdminUsers = res.data.filter(item => item.role === "user")
                setValue(nonAdminUsers);
            })
    }, [])

    const makeAnUserAdmin = (email) => {
        axios.patch(`http://localhost:5000/makeAdmin/${email}`)
            .then(res => {
                console.log("Promoted to admin", res.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Promoted to admin successfully.",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div className="p-5 border-2 rounded-md mt-5 shadow-xl">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>User Names</th>
                            <th>User Emails</th>
                            <th>Make Admin?</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {value.length === 0 ? <>
                            <h2 className="text-center">No users right now.</h2>
                        </> : <>
                            {
                                value.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.user_name}</td>
                                    <td>{item.user_email}</td>
                                    <td><button onClick={() => makeAnUserAdmin(item.user_email)} className="bg-blue-500 hover:bg-blue-700 active:bg-blue-900 px-2 py-1 rounded-md text-white duration-300">
                                        Make
                                    </button></td>
                                    <td><button className=" pointer-events-none bg-slate-500 px-2 py-1 rounded-md text-white">Bronze</button></td>
                                </tr>)
                            }
                        </>}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageUsers;