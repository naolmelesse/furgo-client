import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import "../styles/checkout.scss";
import axios from 'axios';
import dayjs from 'dayjs';


const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
    //console.log(startDate);
    async function rent(){
    //     const token = localStorage.getItem("token");
    //     const decodedValue = JSON.parse(atob(token.split('.')[1]));
    //     const rentData = {
    //         tripStart: startDate.date,
    //         tripEnd: endDate.date,
    //         host: carData.owner,
    //         car: carData._id,
    //         renter: decodedValue['_id'],
    //         total_income: dayjs(endDate.date).diff(dayjs(startDate.date), 'days') * carData.price
    //     };
        await axios.post('/car-rented', {rentData: ""}).then((res) => {
            console.log(res);
        }).catch(err => console.log(err));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          return;
        }
    
        setIsLoading(true);
    
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://localhost:3000",
          },
        });
    }

  return (
    <div>
      <div className="car">
        <img
          src=""
          alt=""
        />
        <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
        </div>
      </div>
      <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
        <button disabled={isLoading || !stripe || !elements} id="submit">
            <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
            </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
        </form>
    </div>
  );
} 

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default Checkout;