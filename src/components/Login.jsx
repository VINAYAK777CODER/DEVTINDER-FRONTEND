import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("simran@gmail.com");
  const [password, setPassword] = useState("Simran@1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.user));
      return navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 p-4 pt-20">
      <div className="card w-full max-w-md shadow-2xl bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl">
        <div className="card-body p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold text-purple-700">
              Login to DevTinder
            </h2>
            <p className="text-gray-600 mt-1">
              Find your perfect coding partner
            </p>
          </div>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Email
                </span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">
                  Password
                </span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            <button
              className="btn w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:opacity-90 transition"
              onClick={(e) => {
                e.preventDefault(); // 🚫 Stop form refresh
                handlelogin(); // ✅ Now axios will run properly
              }}
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              Don't have an account?{" "}
              <a href="#" className="text-pink-600 font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
