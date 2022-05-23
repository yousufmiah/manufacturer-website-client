import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import DashBoard from "./Pages/Dashboard/DashBoard";
import History from "./Pages/Dashboard/History";

import Users from "./Pages/Dashboard/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";

import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Blogs from "./Pages/Blogs/Blogs";
import NotFound from "./Pages/Shared/NotFount";
import Purchase from "./Pages/Items/Purchase";
import ViewReview from "./Pages/Dashboard/ViewReview";
import Review from "./Pages/Dashboard/Review";
import MyItems from "./Pages/MyItems/MyItems";
import Allitems from "./Pages/Items/Allitems";
import Profile from "./Pages/Profile";
// import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="review" element={<Review />} />
        <Route path="viewReview" element={<ViewReview />} />
        <Route path="allitems" element={<Allitems />} />
        <Route path="myitems" element={<MyItems />} />
        <Route path="profile" element={<Profile />} />

        <Route path="dashboard" element={<DashBoard />}>
          <Route path="history" element={<History></History>}></Route>
          {/* <Route path="payment/:id" element={<Payment></Payment>}></Route> */}
          <Route path="users" element={<Users></Users>}></Route>

          {/* <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route> */}
          {/* <Route
            path="manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctors></ManageDoctors>
              </RequireAdmin>
            }
          ></Route> */}
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
