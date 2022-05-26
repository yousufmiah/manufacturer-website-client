import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="text-primary text-4xl text-center font-bold">
        <h3>Profile</h3>
      </div>
      <div className="w-9/12 mx-auto my-10 text-xl">
        <p>
          <strong>information about this site</strong>
          <p>
            {" "}
            - Main admin is yousufweb99@gmail.com password 123456 who has full
            power of admin role.
          </p>
          <br />
          <p>
            {" "}
            - only Main Admin can do everything in this site. ## -like- add new
            product, delete product from main data etc.,
          </p>
          <br />
          <p>
            {" "}
            - admin can make a admin others user but this admin have no full
            power.
          </p>
          <br />
          <p>
            {" "}
            - if user want to get full power like main admin. It needs to be
            verified email.
          </p>

          <br />
          <p> - user can order, order delete, payment by card</p>

          <br />
          <p>
            {" "}
            -half admin can add new product, order place, order cancel. but
            he/she can not enter manage item.
          </p>

          <br />
          <p>
            {" "}
            -Thank you very much for your visiting in the website which is
            highly appreciated.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Profile;
