import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageItems = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
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
    console.log(id);

    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `http://localhost:5000/d-items/${id}`;
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
      <h3 className="text-2xl font-bold text-primary mb-5">Manage Items</h3>
      <div>
        <table className="table table-striped">
          <thead>
            <tr className="">
              <th scope="col">Sl. No.</th>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price Tk</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              return (
                <tr>
                  <td className="my-5 " scope="row">
                    {i + 1}
                  </td>
                  <td>
                    <img
                      style={{ height: "70px", width: "70px" }}
                      src={order.img}
                      alt=""
                    />
                  </td>
                  <td>{order.name}</td>
                  <td>{order.description}</td>
                  <td>{order.quantity}</td>
                  <td>Tk {order.price}</td>
                  <td>
                    <button
                      onClick={() => handleUpdateItem(order._id)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-warning text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
