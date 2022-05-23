import React from "react";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div class="my-12 text-center mx-auto w-1/2">
      <div>
        <h1 className="text-xl md:text-4xl text-primary font-bold">
          Contact Form
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type your name"
            class="input input-bordered w-full "
          />
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type your email"
            class="input input-bordered w-full "
          />
        </div>
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea
            class="textarea textarea-bordered"
            placeholder="write here your message"
          ></textarea>
        </div>

        <button class=" mt-5 btn btn-primary md:px-16 ">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
