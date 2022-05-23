import React from "react";

const item = ({ item }) => {
  const { _id, name, description, quantity, img, price } = item;

  return (
    <div>
      <div class="card bg-base-100 shadow-xl">
        <div className="flex justify-center">
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
            type="text"
            placeholder="Minimum Order 10"
            class="input input-bordered w-full text-center"
          />
          <div class="card-actions ">
            <button class="mt-3 btn btn-primary w-full ">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default item;

// import Swal from "sweetalert2";

// const Item = ({ item }) => {
//   // console.log(item);
//   const { _id, name, description, quantity, img, price } = item;

//   const handleUpdateItem = (id) => {
//     // const updatedItem = item;
//     // updatedItem.quantity = quantity - 1;
//     // send data to the server
//     //   if (quantity > 0) {
//     //     const url = `http://localhost:5000/item/${id}`;
//     //     fetch(url, {
//     //       method: "PUT",
//     //       headers: {
//     //         "content-type": "application/json",
//     //       },
//     //       body: JSON.stringify(updatedItem),
//     //     });
//     //     Swal.fire({
//     //       icon: "success",
//     //       text: "Delivered Success.",
//     //       showConfirmButton: false,
//     //       timer: 2000,
//     //     });
//     //   }
//   };

//   return (
//     <div class="card w-96 bg-base-100 shadow-xl">
//       <figure class="px-10 pt-10">
//         <img
//           src="https://api.lorem.space/image/shoes?w=400&h=225"
//           alt="Shoes"
//           class="rounded-xl"
//         />
//       </figure>
//       <div class="card-body items-center text-center">
//         <h2 class="card-title">Shoes!</h2>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div class="card-actions">
//           <button class="btn btn-primary">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Item;
