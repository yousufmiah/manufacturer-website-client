import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>

      <li>
        <NavLink to="/review">Review</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li>
        {user ? (
          <div>
            <div className="navbar-end">
              <label
                tabIndex="1"
                htmlFor="dashboard-sidebar"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
              </label>
              <ul
                tabindex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>
                    <label
                      tabIndex="0"
                      className="btn w-24 btn-ghost btn-circle avatar"
                    >
                      <div className="w-24 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                      </div>
                    </label>
                  </a>
                </li>
                {/* <li className="mt-20">
                  <a className="justify-between">
                    Profile
                    <span className="badge ">New</span>
                  </a>
                </li> */}
                <li className="mt-12 text-2xl">
                  <Link to="/myitems" className="text-xl">
                    My Items
                  </Link>
                </li>
                <li className="text-2xl">
                  <Link to="/portfolio" className="text-xl">
                    Portfolio
                  </Link>
                </li>

                <li>
                  <button
                    onClick={logout}
                    className="btn btn-active btn-primary text-white"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <NavLink to="/Login">Login</NavLink>
        )}
      </li>
    </>
  );

  return (
    //===============
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">JM Computers</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
