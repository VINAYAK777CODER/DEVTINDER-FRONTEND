import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("Nishal@gmail.com");
  const [password, setPassword] = useState("Nishal@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.user));
      navigate("/feed");
    } catch (err) {
      const errorMessage = err?.response?.data?.error || "Something went wrong.";
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 p-4 pt-16">
      
      {/* Floating Animated Login Card */}
      <div className="w-full max-w-md bg-white/75 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8
                      animate-floatCard hover:scale-[1.03] transition-transform duration-700">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-purple-700">DevTinder Login</h2>
          <p className="text-gray-700 mt-1">Find your perfect coding partner</p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full rounded-xl px-4 py-2 border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-gray-700">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full rounded-xl px-4 py-2 border-gray-300
                         focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 font-medium text-center animate-pulse">{error}</p>
          )}

          {/* Login Button */}
          <button
            className="w-full py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600
                       text-white font-semibold shadow-lg hover:shadow-xl hover:opacity-95 transition"
            onClick={(e) => {
              e.preventDefault();
              handlelogin();
            }}
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-700 mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          /* Smooth fade-in + upward movement */
          @keyframes floatCard {
            0% { opacity: 0; transform: translateY(30px); }
            60% { opacity: 1; transform: translateY(-10px); }
            80% { transform: translateY(-5px); }
            100% { transform: translateY(0); }
          }
          .animate-floatCard { animation: floatCard 1s ease-out forwards; }
        `}
      </style>
    </div>
  );
};

export default Login;
