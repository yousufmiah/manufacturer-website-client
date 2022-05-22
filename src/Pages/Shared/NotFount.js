import React from "react";
import notFoundImg from "../../assets/404-error-page-not-found.jpg";

const NotFound = () => {
  return (
    <div className="h-screen align-items-center ">
      <img className="w-100" src={notFoundImg} alt="" />
    </div>
  );
};

export default NotFound;
