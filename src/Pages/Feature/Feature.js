import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import { BsFlag } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { ImHappy } from "react-icons/im";
import { VscFeedback } from "react-icons/vsc";

const Feature = () => {
  return (
    <div class="card my-16 w-full bg-base-200 shadow-xl">
      <div class="card-body">
        <div className="text-center">
          <div className="mb-10">
            <h2 className="text-xl md:text-4xl font-bold text-primary">
              MILLIONS BUSINESS TRUST US
            </h2>
            <p className="text-xl font-bold text-blue-500">
              Try to understand users Expectation
            </p>
            <div className="flex justify-center">
              <div className="divider w-3/12 h-1 mr-2 bg-blue-500"> </div>
              <div className="divider w-2/12 h-1 mr-2 bg-blue-500"> </div>
              <div className="divider w-1/12 h-1 bg-blue-500"> </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-evenly">
            <div className="text-center flex flex-col items-center ">
              <div className="text-4xl mb-3">
                <BsFlag />
              </div>
              <h2 className="text-3xl font-bold text-primary">72</h2>
              <h4 className="text-lg text-primary">Countries</h4>
            </div>
            <div className="text-center flex flex-col items-center ">
              <div className="text-4xl mb-3">
                <GrProjects />
              </div>
              <h2 className="text-3xl font-bold text-primary">353+</h2>
              <h4 className="text-lg text-primary">Complete Projects</h4>
            </div>
            <div className="text-center flex flex-col items-center ">
              <div className="text-4xl mb-3">
                <HiOutlineSparkles />
              </div>
              <h2 className="text-3xl font-bold text-primary">273+</h2>
              <h4 className="text-lg text-primary">Happy Clients</h4>
            </div>
            <div className="text-center flex flex-col items-center ">
              <div className="text-4xl mb-3">
                <VscFeedback />
              </div>
              <h2 className="text-3xl font-bold text-primary">432</h2>
              <h4 className="text-lg text-primary">Feedbacks</h4>
            </div>
          </div>
          <div className="w-11/2 mx-auto">
            <div className=" flex flex-col md:flex-row w-full justify-around p-8 items-center py-16 mt-10 border shadow-lg">
              <div className="text-left w-5/12">
                <h2 className="text-base md:text-xl text-primary font-bold">
                  Have any question about us or get a products questions?
                </h2>
                <p ckassName="text-blue-500">Don't hesitate to contact us</p>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="mr-5">
                  <button className="w-full my-5 btn btn-primary text-white mr-5">
                    Request For Quote
                  </button>
                </div>
                <div>
                  <button className="w-full my-5 btn btn-secondary text-white">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
