import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedCard from "./FeedCard";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const EditProfile = () => {
  const loggedUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [about, setAbout] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Toast state
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // success / error

  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => setToastMessage(""), 3000);
  };

  useEffect(() => {
    if (loggedUser) {
      setFirstName(loggedUser.firstName || "");
      setLastName(loggedUser.lastName || "");
      setPhotoUrl(loggedUser.photo_url || "");
      setAge(loggedUser.age || "");
      setGender(loggedUser.gender || "male");
      setAbout(loggedUser.about || "");
    }
  }, [loggedUser]);

  const liveUser = { firstName, lastName, photo_url: photoUrl, age, gender, about };

  const handleSave = async () => {
    try {
      setLoading(true);
      const updateData = { firstName, lastName, photo_url: photoUrl, age, gender, about };

      const response = await axios.patch(`${BASE_URL}/profile/edit`, updateData, { withCredentials: true });

      dispatch(addUser(response.data?.data));

      // ✅ Toast instead of alert
      showToast("✅ Profile Updated Successfully!", "success");
    } catch (error) {
      console.error(error);
      showToast(error?.response?.data?.message || "⚠️ Error updating profile", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ Custom Gradient Toast */}
{toastMessage && (
  <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
    <div
      className={`px-5 py-3 rounded-xl shadow-lg text-white font-semibold 
      ${toastType === "success"
        ? "bg-gradient-to-r from-purple-600 to-pink-600"
        : "bg-gradient-to-r from-red-500 to-orange-500"
      }`}
    >
      {toastMessage}
    </div>
  </div>
)}


      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-start justify-center gap-10 p-10">
        {/* Left Form */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>

          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input input-bordered w-full rounded-xl" />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input input-bordered w-full rounded-xl" />
          <input type="text" placeholder="Photo URL" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="input input-bordered w-full rounded-xl" />
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className="input input-bordered w-full rounded-xl" />
          <select value={gender} onChange={(e) => setGender(e.target.value)} className="input input-bordered w-full rounded-xl">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} className="input input-bordered w-full rounded-xl h-24 p-3" />

          <button onClick={handleSave} disabled={loading} className="w-full py-2 mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:opacity-90 transition disabled:opacity-50">
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Right Preview */}
        <div className="w-full max-w-sm">
          <h2 className="text-xl font-bold text-gray-700 mb-3">Live Preview</h2>
          <FeedCard user={liveUser} />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
