// FeedCard.jsx

import React from "react";

const FeedCard = ({ user}) => {
    const {firstName,lastName,photo_url,age,gender,about,skills}=user
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300">
      {/* Profile Image */}
      <img
        src={photo_url}
        alt={firstName}
        className="w-full h-64 object-cover"
      />

      {/* Card Body */}
      <div className="p-5 space-y-3">

        {/* Name & Badge */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">
            {firstName} {lastName}
          </h2>
          <span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-semibold rounded-full">
            NEW
          </span>
        </div>

        {/* About */}
        <p className="text-gray-600 text-sm">{about}</p>

        {/* Skills */}
        {skills?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
              >
                {skill}
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          <button
            // onClick={onIgnore}
            className="w-full py-2 mr-2 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            ❌ Ignore
          </button>
          <button
            // onClick={onInterest}
            className="w-full py-2 ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:opacity-90 transition"
          >
            ❤️ Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
