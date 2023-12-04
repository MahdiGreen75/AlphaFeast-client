/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const CheckOutForm = ({ plan }) => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    let price;
    if (plan === "silver") {
        price = 499;
    } else if (plan === "gold") {
        price = 799;
    } else {
        price = 999;
    }

    console.log("Inside from checkOut", plan, price);

    useEffect(() => {
        axios.post(`http://localhost:5000/create-payment-intent`, { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[Payment Error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "anonymous@anotherMail.com",
                        name: user?.displayName || "anonymous",
                    },
                },
            },
        );

        if (confirmError) {
            console.log("confirm error");
        } else {
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("Transaction Id", paymentIntent.id);
                setTransactionId(paymentIntent.id);

                //now save the payment in the database
                const payment = {
                    email: user?.email,
                    price: price,
                    date: new Date(), //utc date convert, convert to moment js
                    transactionId: paymentIntent.id,
                    plan: plan
                }

                //send payment data to database
                const res = await axios.post("http://localhost:5000/payments", payment);
                console.log("Payment Confirmation Successfull", res.data.insertedId);
                if(res.data?.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Congratulations, $${price} payment succesfull. Thanks for joining ${plan} membership.`,
                        showConfirmButton: false,
                        timer: 3000
                      });
                }

            }
        }

    }

    return (
        <form onSubmit={handleSubmit} className="p-8 border-2 m-5 rounded-md shadow-xl">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-sm btn-primary mt-4">
                Pay
            </button>
            <p className="text-red-600 text-xs font-bold my-5">{error}</p>
            {transactionId && <p className="text-slate-900 text-xs font-bold my-5">
                <span>Transaction Id: </span><span className="font-normal">{transactionId} </span>
            </p>}
        </form>
    );
};

export default CheckOutForm;