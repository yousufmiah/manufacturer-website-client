import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const AllItem = ({ item }) => {
  const { _id, name, description, quantity, img, price } = item;
  const [order, setOrder] = useState(10);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const placeOrder = () => {
    if (order >= 10 && order <= quantity) {
      const newOrder = item;
      newOrder.quantity = order;
      newOrder.email = user?.email;
      newOrder.time = Date().toLocaleString();

      fetch(`https://safe-anchorage-26846.herokuapp.com/orders-item`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newOrder),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Order Successfully");
          navigate("/purchase");
        });
    }
  };
  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <div className="text-center items-center mx-auto p-4 w-48 h-48">
          <img src={img} alt="pic" class="rounded-xl" />
        </div>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <small>Avaliable Quantiry: {quantity}</small>
            <small>Price Per Unit Tk: {price}</small>
          </div>
          <input
            onBlur={(e) => setOrder(e.target.value)}
            type="text"
            placeholder="Minimum Order 10"
            class="input input-bordered w-full text-center"
          />
          <div class="card-actions ">
            <button onClick={placeOrder} class="mt-3 btn btn-primary w-full ">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItem;
