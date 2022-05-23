import React from "react";

import { FaUserAlt, FaReply } from "react-icons/fa";
import { IoIosHeartDislike } from "react-icons/io";
const ViewReview = ({ review }) => {
  const { name, description, img, time } = review;

  return (
    <div className="">
      <div className="flex flex-col md:flex-row w-full ">
        <div className="my-5 w-24 h-24 mr-8">
          {img ? (
            <img src={img} alt="" />
          ) : (
            <FaUserAlt className="text-xl w-4" />
          )}
        </div>
        <div className="text-left">
          <div className="flex flex-col md:flex-row w-full">
            <h4>
              {name} (<span className="fs-6">{time}</span>)
            </h4>
            <div>
              <IoIosHeartDislike className="mx-1" />
              <FaReply className="mx-1" />
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewReview;
