// FeedCard.jsx
import React from "react";

const FeedCard = ({ user }) => {
  const { firstName, lastName, photo_url, age, gender, about } = user;

  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition duration-300">
      
      {/* Profile Image */}
      <div className="w-full h-56 overflow-hidden">
        <img
          src={photo_url || "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-man-570x570.png"}
          alt={firstName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-3">
        
        {/* Name, Age & Gender */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              {firstName} {lastName}
            </h2>
            <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-semibold rounded-full">
              NEW
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Age: {age || "N/A"}</span>
            <span>|</span>
            <span>Gender: {gender || "N/A"}</span>
          </div>
        </div>

        {/* About */}
        <p className="text-gray-600 text-sm">{about}</p>

        {/* Buttons */}
        <div className="flex justify-between pt-4 gap-2">
          <button
            className="w-full py-2 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            ❌ Ignore
          </button>
          <button
            className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:opacity-90 transition"
          >
            ❤️ Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
