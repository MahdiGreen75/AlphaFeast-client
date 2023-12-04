import axios from "axios";
import { useEffect, useState } from "react";
import UserPayCard from "./UserPayCard";


const PaymentHistoryAdmin = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:5000/allUserPayments`)
            .then(res=>{
                setUsers(res.data);
            })
    }, [])

    console.log(users);

    return (
        <div>
            {
                users.map((item, index)=><UserPayCard key={item._id} {...item} order={index}></UserPayCard>)
            }
        </div>
    );
};

export default PaymentHistoryAdmin;