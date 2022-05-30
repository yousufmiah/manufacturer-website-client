import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import DashBoard from "./Pages/Dashboard/DashBoard";
import History from "./Pages/Dashboard/History";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";

import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFount";

import ViewReview from "./Pages/Dashboard/ViewReview";
import Review from "./Pages/Dashboard/Review";

import Profile from "./Pages/Profile";
import Portfolio from "./Pages/Portfolio";
import AddItem from "./Pages/Items/AddItem";
import Purchase from "./Pages/Dashboard/Purchase";
import AllItems from "./Pages/Items/Allitems";
import ManageItems from "./Pages/Dashboard/ManageItems";
import AllUsers from "./Pages/Dashboard/AllUsers";
import PlaceOrder from "./Pages/Dashboard/PlaceOrder";
import Payment from "./Pages/Dashboard/Payment";
import Allorders from "./Pages/Dashboard/Allorders";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />

        <Route path="review" element={<Review />} />

        <Route path="allitems" element={<AllItems></AllItems>}></Route>

        <Route path="profile" element={<Profile />} />
        <Route path="portfolio" element={<Portfolio />} />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route path="purchase" element={<Purchase></Purchase>}></Route>
          <Route path="profile" element={<Profile />} />
          <Route path="allusers" element={<AllUsers></AllUsers>}></Route>
          <Route path="allorder" element={<Allorders />}></Route>

          <Route path="review" element={<Review></Review>}></Route>
          <Route path="additem" element={<AddItem></AddItem>}></Route>
          <Route path="placeorder" element={<PlaceOrder></PlaceOrder>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>

          <Route
            path="manageitems"
            element={
              <RequireAuth>
                <ManageItems></ManageItems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="manageitems"
            element={
              <RequireAdmin>
                <ManageItems></ManageItems>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
