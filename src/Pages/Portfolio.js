import React from "react";
import portfolio from "../assets/self-pic/Resume of Yousuf Miah.png";

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-10 text-primary">
        Portfolio
      </h2>
      <div className="">
        <img src={portfolio} alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
