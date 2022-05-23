import React from "react";
import notFoundImg from "../../assets/404-error-page-not-found.jpg";

const NotFound = () => {
  return (
    <div className=" flex justify-center place-items-center ">
      <img className="w-1/2" src={notFoundImg} alt="" />
    </div>
  );
};

export default NotFound;
