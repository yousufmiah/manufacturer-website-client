import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

// stripe public key
const stripePromise = loadStripe(
  "pk_test_51L0mjQIIu8CcZoX9qJO9X3oWS27zXDk2WaocEe4sNr9U4Rb06VbYyuGrFW9OgMHCNqEw6H7UygwVYv8qk7168TLw009PMdUWfj"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/orders/${id}`;

  // console.log(url);

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" w-full md:w-1/2 mx-auto">
      <div className="card w-50 bg-base-200 shadow-xl my-12">
        <div className="card-body">
          <h2 className="card-title">Please Pay for </h2>
          <h2 className="text-2xl font-bold text-black">
            Product Name: <span className="text-primary">{order.name}</span>
          </h2>
          <p>
            <strong>Quantity: {order.quantity} pcs.</strong>
          </p>
          <p>
            <strong>Price:$ {order.price}</strong>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 shadow-2xl bg-base-200">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
      <div className="text-xl mt-5">
        <p>For test</p>
        <h2 className="font-bold">Mastercard</h2>
        <h2>5555 5555 5555 4444</h2>
        <h2>Any future date </h2>
        <h2>Any 3 digit</h2>
      </div>
    </div>
  );
};

export default Payment;
