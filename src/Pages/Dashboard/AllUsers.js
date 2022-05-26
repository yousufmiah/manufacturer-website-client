import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllUser from "./AllUser";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://safe-anchorage-26846.herokuapp.com/user-t", {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(users);
  return (
    <div>
      <h2 className="mb-5 text-2xl text-center font-bold text-primary">
        All Users: {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Manage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <AllUser key={user._id} user={user} refetch={refetch}></AllUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
