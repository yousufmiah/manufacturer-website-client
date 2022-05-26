import React from "react";
import computer from "../../assets/images/computer.jpg";
import flower from "../../assets/images/flower.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img src={computer} className=" rounded-lg shadow-2xl" />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold">Welcome to Our site...</h1>
            <p className="py-6">
              We provide your best choice of computer accessories, which are
              made our factory to improve your experience and feel better in the
              modern Technology, Thanks for with us.
            </p>
            {/* <!-- The button to open modal --> */}
            <label
              htmlFor="my-modal-6"
              className="btn modal-button btn-primary"
            >
              Get Started
            </label>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle md:modal-middle">
              <div className="modal-box text-center">
                <h3 className="font-bold text-4xl mb-5 text-primary ">
                  Congratulations to visit the website!!!
                </h3>
                <div>
                  <img src={flower} alt="" />
                </div>
                <div className="modal-action">
                  <label htmlFor="my-modal-6" className="btn">
                    Go
                  </label>
                </div>
              </div>
            </div>
            {/* modal end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
