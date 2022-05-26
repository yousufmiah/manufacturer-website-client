import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Item = ({ item }) => {
  const { _id, name, description, quantity, img, price } = item;
  const [order, setOrder] = useState(0);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const placeOrder = () => {
    if (order) {
      if (order >= 10 && order <= quantity) {
        const newOrder = item;
        newOrder.quantity = +order;
        newOrder.email = user?.email;
        newOrder.time = Date().toLocaleString();

        fetch(`http://localhost:5000/orders-item`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newOrder),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Order Successfully");
            navigate("/dashboard/purchase");
          });
      } else {
        alert("below items or out of available quantity");
      }
    } else if (item.quantity) {
      alert("Already exist.");
    } else {
      alert("Please enter quantity.");
    }
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="text-center items-center mx-auto p-4 w-48 h-48">
          <img src={img} alt="pic" className="rounded-xl" />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <small>
              <strong>Avaliable Quantiry: {quantity}</strong>
            </small>
            <small>
              <strong>Price Per Unit Tk: {price}</strong>
            </small>
          </div>
          <input
            onBlur={(e) => setOrder(e.target.value)}
            type="text"
            placeholder="Minimum Order 10"
            className="input input-bordered w-full text-center"
          />
          <div className="card-actions ">
            <button
              onClick={placeOrder}
              className="mt-3 btn btn-primary w-full "
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
