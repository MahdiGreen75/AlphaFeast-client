import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

//Todo: add publishable key
//pk_test_51OJGggAqipLci2ElQfxVdiTu8vNDr6g8kBw8mLhn46wpTkNXLTPdFzpj4k51gnf2ks4NoJ3RlVb8kEc8zO1ggikH00c3CKRr6o
// console.log();
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckOut = () => {
    const id = useParams();
    const from = id.checkId
    
    let service;
    if(from === "silver") {
        service = "silver";
    } else if(from === "gold") {
        service = "gold";
    } else {
        service = "platinum";
    }
    // console.log(service);
    return (
        <div>
            <Elements stripe={stripePromise} >
                <CheckOutForm plan={service}/>
            </Elements>
        </div>
    );
};

export default CheckOut;