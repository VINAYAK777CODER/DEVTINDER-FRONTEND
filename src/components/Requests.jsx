import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestSlice'

const Requests = () => {
    const myRequests=useSelector(store=>store.request)
    const dispatch=useDispatch();
    const fetchRequests=async ()=>{
       try {
         const res= await axios.get(BASE_URL+"/user/request/received",{withCredentials:true} )
          console.log(res);
          dispatch(addRequests(res.data?.data))
          console.log(myRequests);
       } catch (err) {
        console.log(err);
        
       }

    }
    useEffect(()=>{
        fetchRequests();
    },[])

    if (!myRequests || myRequests.length === 0) {
  return (
    <div className="flex items-center justify-center min-h-screen text-gray-500 font-medium">
      No Requests Found
    </div>
  );
}


 return (
  <div className="flex flex-col items-center min-h-screen gap-6 p-4">
    {myRequests.map((req, idx) => {
      const { fromUserId } = req;
      const { firstName, lastName, photo_url, about } = fromUserId;

      return (
        <div
          key={idx}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl shadow-xl p-4 w-full max-w-md flex flex-col sm:flex-row items-center sm:items-start gap-4 transform hover:scale-[1.02] transition"
        >
          {/* Left: Profile Picture */}
          <div>
            <img
              src={photo_url}
              alt={firstName}
              className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-md"
            />
          </div>

          {/* Right: Name, About & Buttons */}
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-bold tracking-wide">
              {firstName} {lastName}
            </h3>
            <p className="text-white/90 text-sm line-clamp-2 mb-3">{about}</p>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-green-500 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-green-600 transition">
                Accept
              </button>
              <button className="flex-1 bg-red-500 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-red-600 transition">
                Reject
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);


}

export default Requests