import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const UserProfile = () => {
    const [badge, setBadge] = useState('Bronze');
    const { user } = useContext(AuthContext);
    const email = user?.email;
    // console.log(user)

    useEffect(() => {
        axios.get(`http://localhost:5000/userPayment/${email}`)
            .then(res=>{
                if(res.data) {
                    console.log(res.data.plan)
                    setBadge(res.data.plan)
                }
            })
    }, [email])

    return (
        <>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full flex justify-center items-center gap-2 py-24">
                {
                    user?.photoURL && <>
                        <div className="w-8 h-8 border rounded-full my-2 shadow-lg">
                            <img src={user?.photoURL} className="w-full h-full object-cover border rounded-full" />
                        </div>
                    </>
                }
                <h2 className="text-2xl font-semibold">Hi , <span>{user?.displayName}</span></h2>
            </div>
            <div className="p-5 border-2 rounded-md mt-5">
                <h2 className="text-2xl font-semibold">Email: <span className="font-light">{user?.email}</span></h2>
                <h2 className="text-2xl font-semibold">Badge: <span className="text-xs px-2 py-1 rounded font-bold border">{badge.toUpperCase()}</span></h2>
            </div>
        </>
    );
};

export default UserProfile;