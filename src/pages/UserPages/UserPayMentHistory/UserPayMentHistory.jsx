import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const UserPayMentHistory = () => {
    const [paymentHistory, setPaymentHistory] = useState(null);
    const { user } = useContext(AuthContext);
    const email = (user?.email);

    useEffect(() => {
        axios.get(`http://localhost:5000/userPayment/${email}`)
            .then(res => {
                if (res.data) {
                    setPaymentHistory(res.data);
                } else {
                    setPaymentHistory(false);
                }
            })
    }, [email])
    console.log(paymentHistory, email);
    return (
        <div>
            <h2 className="text-xl font-bold border-b-2 border-slate-900 pb-1 my-5">Your Payment History</h2>
            <div className="p-5 border-2 rounded-md shadow-md">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Payment Info</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        {
                            paymentHistory 
                            ?
                             <>
                                <tbody>
                                    {/* row 1 */}
                                    <tr className="bg-base-200">
                                        <th>Your payment Email</th>
                                        <td>{paymentHistory?.email}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>Date</th>
                                        <td>{paymentHistory?.date}</td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>Your Membership Plan</th>
                                        <td>
                                            <span style={{
                                                backgroundColor: (paymentHistory?.plan) === "gold" ? "gold" : (paymentHistory?.plan) === "silver" ? "silver" : "platinum"
                                            }}
                                                className="px-2 py-1 border-2 rounded-md font-bold shadow-lg">{paymentHistory?.plan}</span>
                                        </td>
                                    </tr>
                                    {/* row  */}
                                    <tr>
                                        <th>Your Transaction Id</th>
                                        <td>{paymentHistory?.transactionId}</td>
                                    </tr>
                                </tbody>
                            </>
                            :
                            <span className="text-blue-400 font-bold text-xs my-5">
                                You have no payment history. You have to buy a membership. then you can proceed.
                            </span>
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserPayMentHistory;