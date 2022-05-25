import React from "react";
import computer from "../../assets/images/computer.jpg";

const Banner = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={computer} className=" rounded-lg shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h1 class="text-5xl font-bold">Welcome to Our site...</h1>
            <p class="py-6">
              We provide your best choice of computer accessories, which are
              made our factory to improve your experience and feel better in the
              modern Technology, Thanks for with us.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
