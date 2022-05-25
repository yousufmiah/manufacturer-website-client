import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddItem = () => {
  // Use form====================
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorage_key = "67febf73481b92452ca92d9303a63966";

  //IMAGE storage system
  const onSubmit = async (data) => {
    // console.log("data", data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorage_key}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            description: data.description,
            quantity: data.quantity,
            price: data.price,
            img: img,
          };
          // send to your database
          fetch("https://safe-anchorage-26846.herokuapp.com/items", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              // console.log("product", inserted);
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the Product");
              }
            });
        }
        // console.log("imgbb", result);
      });
  };

  return (
    <div className="w-1/2 mx-auto text-center">
      <h2 className="text-3xl font-bold text-primary">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* =====name start==== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-full "
            {...register("name", {
              required: {
                value: true,
                message: "Product Name is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        {/* ========name end========= */}
        {/* =====description start==== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text font-bold">Description</span>
          </label>
          <input
            type="text"
            placeholder="Product Description"
            className="input input-bordered w-full "
            {...register("description", {
              required: {
                value: true,
                message: "Product description is required",
              },
            })}
          />
          <label class="label">
            {errors.description?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        {/* ========description end========= */}
        {/* =====Quantity start==== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text font-bold">Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Product Quantity"
            className="input input-bordered w-full "
            {...register("quantity", {
              required: {
                value: true,
                message: "Product quantity is required",
              },
            })}
          />
          <label class="label">
            {errors.quantity?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.quantity.message}
              </span>
            )}
          </label>
        </div>
        {/* ========quantity end========= */}
        {/* =====Unit price start==== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text font-bold">Unit Price</span>
          </label>
          <input
            type="number"
            placeholder="Unit Price"
            className="input input-bordered w-full "
            {...register("price", {
              required: {
                value: true,
                message: "Product price is required",
              },
            })}
          />
          <label class="label">
            {errors.price?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        {/* ========quantity end========= */}

        {/* =====photo load==== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text font-bold">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full "
            {...register("image", {
              required: {
                value: true,
                message: "Image is required",
              },
            })}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        {/* ========name end========= */}

        <input
          className="btn btn-primary w-full mt-5 max-w-xs text-white"
          type="submit"
          value="Add New Product"
        />
      </form>
    </div>
  );
};

export default AddItem;
