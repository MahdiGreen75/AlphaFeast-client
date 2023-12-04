/* eslint-disable react/prop-types */

const UserPayCard = ({ email, price, date, plan, transactionId, order }) => {

    return (
        <div className="p-5 border-2 m-5 rounded-md shadow-xl">
            <div className="w-full flex justify-center items-center">
                <h2 className="text-base font-bold text-center my-2 pb-1 border-b-2 w-fit border-black">User {order + 1}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Payment Info</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>Payment Email</th>
                            <td>{email}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>Date</th>
                            <td>{date}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>Paid</th>
                            <td>{price}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>Due</th>
                            <td>0</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>Membership Plan</th>
                            <td>
                                <span style={{
                                    backgroundColor: (plan) === "gold" ? "gold" : (plan) === "silver" ? "silver" : "platinum"
                                }}
                                    className="px-2 py-1 border-2 rounded-md font-bold shadow-lg">{plan}</span>
                            </td>
                        </tr>
                        {/* row  */}
                        <tr>
                            <th>Transaction Id</th>
                            <td>{transactionId}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default UserPayCard;

/***
 * 
 *  "_id": "656d61f84208ba08f14ed6f2",
    "email": "qarimahdi217@gmail.com",
    "price": 799,
    "date": "2023-12-04T05:22:00.182Z",
    "transactionId": "pi_3OJUbHAqipLci2El0pdEQLsI",
    "plan": "gold"
 */