import React from "react";
import { toast } from "react-toastify";

const AllUser = ({ user, refetch }) => {
  const { email, role } = user;
  console.log(user);

  const makeAdmin = () => {
    fetch(`https://safe-anchorage-26846.herokuapp.com/user-t/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("No authorized to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an Admin`);
        }
      });
  };

  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default AllUser;
