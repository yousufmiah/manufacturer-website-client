import React from "react";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="my-12 text-center mx-auto w-1/2">
      <div>
        <h1 className="text-xl md:text-4xl text-primary font-bold">
          Contact Form
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type your name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type your email"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="write here your message"
          ></textarea>
        </div>

        <button className=" mt-5 btn btn-primary md:px-16 ">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
