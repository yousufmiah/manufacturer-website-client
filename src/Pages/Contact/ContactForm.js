import React from "react";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
