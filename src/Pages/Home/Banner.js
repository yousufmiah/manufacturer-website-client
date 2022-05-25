import React from "react";
import computer from "../../assets/images/computer.jpg";
import flower from "../../assets/images/flower.jpg";

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
            {/* <!-- The button to open modal --> */}
            <label for="my-modal-6" class="btn modal-button btn-primary">
              Get Started
            </label>
            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle md:modal-middle">
              <div class="modal-box text-center">
                <h3 class="font-bold text-4xl mb-5 text-primary ">
                  Congratulations to visit the website!!!
                </h3>
                <div>
                  <img src={flower} alt="" />
                </div>
                <div class="modal-action">
                  <label for="my-modal-6" class="btn">
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
