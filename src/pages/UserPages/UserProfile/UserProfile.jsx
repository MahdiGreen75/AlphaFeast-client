import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
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
                <h2 className="text-2xl font-semibold">Badge: <span className="text-xs text-white px-2 py-1 rounded bg-gray-500">Bronze</span></h2>
            </div>
        </>
    );
};

export default UserProfile;