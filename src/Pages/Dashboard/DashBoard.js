import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../firebase.init";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin();
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        {/* <h2 className="text-3xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          <li>
            <Link to="/dashboard/purchase">Purchase</Link>
          </li>
          <li>
            <Link to="/dashboard/history">History</Link>
          </li>
          <li>
            <Link to="/dashboard/additem">Add Item</Link>
          </li>

          {/* {admin && ( */}
          <>
            <li>
              <Link to="/dashboard/allusers">All Users</Link>
            </li>

            <li>
              <Link to="/dashboard/manageItems">Manage Items</Link>
            </li>
          </>
          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
