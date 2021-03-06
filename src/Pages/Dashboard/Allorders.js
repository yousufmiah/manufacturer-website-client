import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Allorders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // console.log(orders);

  useEffect(() => {
    fetch(`https://safe-anchorage-26846.herokuapp.com/get-orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // update
  const handleUpdateItem = (id) => {
    navigate(`/updateItem/${id}`);
    // console.log(id);
  };

  // delete
  const handleDelete = (id) => {
    // console.log(id);

    const proceed = window.confirm("Are you sure to Cancel?");
    if (proceed) {
      const url = `https://safe-anchorage-26846.herokuapp.com/d-order-items/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-primary mb-5">All Users Orders</h3>
      <div>
        <table className="table table-striped">
          <thead>
            <tr className="">
              <th scope="col">Sl. No.</th>
              <th scope="col">Photo</th>
              <th scope="col">user Name</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Payment</th>
              <th scope="col">Update</th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              return (
                <tr>
                  <td className="my-5 " scope="row">
                    {order._id}
                  </td>
                  <td>
                    <img
                      style={{ height: "70px", width: "70px" }}
                      src={order.img}
                      alt=""
                    />
                  </td>
                  <td>{order.userName}</td>
                  <td>{order.name}</td>
                  <td>{order.description}</td>
                  <td>{order.quantity}</td>
                  <td>Tk {order.price}</td>

                  <td>
                    {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-xs btn-success">Pay</button>
                      </Link>
                    )}
                    {order.price && order.paid && (
                      <div>
                        <p>
                          <span className="text-success">Paid</span>
                        </p>
                        <p>
                          Transaction Id:
                          <span className="text-success">
                            {order.transactionId}
                          </span>
                        </p>
                      </div>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleUpdateItem(order._id)}
                      className="btn btn-xs btn-primary "
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-xs btn-warning text-white"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mx-auto w-full text-xl font-bold">
          <div>
            <div className="flex justify-around">
              <h2>
                Total quantity :
                {orders.reduce((n, { quantity }) => n + quantity, 0)}
              </h2>
              <h2>
                Total Price : Tk
                {orders.reduce(
                  (n, { quantity, price }) => n + quantity * price,
                  0
                )}
              </h2>
            </div>
            <div>
              <Link to="/dashboard/placeorder" className="btn btn-primary">
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl mt-5">
          <strong>Place order</strong> button is under construction. Please
          check payment by small button of pay with green color, thanks.
        </h2>
      </div>
    </div>
  );
};

export default Allorders;
