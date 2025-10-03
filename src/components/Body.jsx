import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Accessing user data from Redux store
  // If user exists here, we avoid making unnecessary API calls
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    try {
      // ✅ This API checks if the user is logged in (session stored via cookie)
      // ✅ withCredentials:true sends browser cookies automatically
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      // ✅ Store the returned user in Redux for global access
      // This ensures we don't need to call this API again unless refreshed
      dispatch(addUser(res?.data?.user));

    } catch (err) {
      // ❌ If cookie/session is invalid (expired or missing), redirect to login
      if (err?.response?.status === 401) {
        navigate("/login");
        // alert("Invalid Credentials");
      } else {
        console.error("Something went wrong:", err);
      }
    }
  };

  useEffect(() => {
    // ✅ useEffect runs automatically when the component mounts
    // ✅ Acts as "On Page Load Checker"

    // ✅ Only fetch user if Redux does NOT already have it
    //    → Avoids unnecessary API calls on every route change
    //    → But still restores user session after refresh (since Redux resets on refresh)
    if (!userData) {
      fetchUser();
    }

  }, [userData]); // ✅ Runs again ONLY if userData changes

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
