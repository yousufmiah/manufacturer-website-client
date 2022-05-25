import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AllUsers = () => {
  const [users] = useAuthState(auth);
  console.log(users);
  return (
    <div>
      {/* {users.map((u) => (
        <p>{u.email}</p>
      ))} */}
      {/* <h2>{user.name}</h2>
      <h2>{user.email}</h2> */}
    </div>
  );
};

export default AllUsers;

// import React, { useEffect, useState } from "react";

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AllUsers = () => {
//   const navigate = useNavigate();
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetch("https://safe-anchorage-26846.herokuapp.com/get-orders-items")
//       .then((res) => res.json())
//       .then((data) => setOrders(data));
//   }, []);

//   // update
//   const handleUpdateItem = (id) => {
//     navigate(`/updateItem/${id}`);
//     // console.log(id);
//   };

//   // delete
//   const handleDelete = (id) => {
//     // console.log(id);

//     const proceed = window.confirm("Are you sure to Cancel?");
//     if (proceed) {
//       const url = `https://safe-anchorage-26846.herokuapp.com/d-order-items/${id}`;
//       console.log(url);
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           const remaining = orders.filter((order) => order._id !== id);
//           setOrders(remaining);
//         });
//     }
//   };

//   return (
//     <div className="text-center">
//       <h3 className="text-2xl font-bold text-primary mb-5">Purchase Items</h3>
//       <div>
//         <table className="table table-striped">
//           <thead>
//             <tr className="">
//               <th scope="col">Sl. No.</th>
//               <th scope="col">Photo</th>
//               <th scope="col">Name</th>
//               <th scope="col">Description</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Unit Price</th>
//               <th scope="col">Total Price</th>
//               <th scope="col">Update</th>
//               <th scope="col">Cancel</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order, i) => {
//               return (
//                 <tr>
//                   <td className="my-5 " scope="row">
//                     {i + 1}
//                   </td>
//                   <td>
//                     <img
//                       style={{ height: "70px", width: "70px" }}
//                       src={order.img}
//                       alt=""
//                     />
//                   </td>
//                   <td>{order.name}</td>
//                   <td>{order.description}</td>
//                   <td>{order.quantity}</td>
//                   <td>Tk {order.price}</td>
//                   <td>
//                     <button
//                       onClick={() => handleUpdateItem(order._id)}
//                       className="btn btn-primary"
//                     >
//                       Update
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => handleDelete(order._id)}
//                       className="btn btn-warning text-white"
//                     >
//                       Cancel
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//           <div>
//             <h2>
//               Price:
//               {orders.reduce(
//                 (n, { quantity, price }) => n + quantity * price,
//                 0
//               )}
//             </h2>
//           </div>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;
