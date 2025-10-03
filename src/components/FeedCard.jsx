import React, { useState } from "react";

const FeedCard = ({ user }) => {
  const { firstName, lastName, photo_url, age, gender, about } = user;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.03] transition duration-300">
{/* Profile Image */}
<div className="w-full h-64 sm:h-72 md:h-80 lg:h-72 overflow-hidden">
  <img
    src={
      photo_url ||
      "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-man-570x570.png"
    }
    alt={firstName}
    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
  />
</div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 space-y-2 sm:space-y-3">
        {/* Name, Age & Gender */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              {firstName} {lastName}
            </h2>
            <span className="px-2 py-1 bg-pink-100 text-pink-600 text-[10px] sm:text-xs font-semibold rounded-full">
              NEW
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
            <span>Age: {age || "N/A"}</span>
            <span>|</span>
            <span>Gender: {gender || "N/A"}</span>
          </div>
        </div>

        {/* About (Collapsible) */}
        <div className="text-gray-700 text-xs sm:text-sm leading-relaxed bg-gray-50 rounded-lg p-3 border border-gray-100 break-words whitespace-pre-line">
  <p className={`${isExpanded ? "" : "line-clamp-3"}`}>
    {about || "No bio available."}
  </p>
  {about?.length > 80 && (
    <button
      className="text-blue-500 text-[10px] sm:text-xs mt-1 hover:underline"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? "Read Less ▲" : "Read More ▼"}
    </button>
  )}
</div>


        {/* Buttons */}
        <div className="flex justify-between pt-3 sm:pt-4 gap-2">
          <button className="w-full py-2 text-xs sm:text-sm bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition">
            ❌ Ignore
          </button>
          <button className="w-full py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:opacity-90 transition">
            ❤️ Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
