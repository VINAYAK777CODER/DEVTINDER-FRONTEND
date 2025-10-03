import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

const Connections = () => {
    const userConnections = useSelector(store => store.connection);
    const dispatch = useDispatch();

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", { withCredentials: true });
            // console.log(res?.data?.data);
            dispatch(addConnections(res?.data?.data));
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchConnections();
    }, []);

    // ✅ Conditional Rendering AFTER useEffect
    
    if (userConnections === null) return <h1>Loading...</h1>;
    if (userConnections.length === 0) return <h1>No connections</h1>;

    return (
    <div className="flex flex-col items-center min-h-screen gap-6 p-4">
  {userConnections.map((conn, idx) => (
    <div
      key={idx}
      className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl shadow-xl p-4 w-full max-w-md flex items-center gap-4 transform hover:scale-[1.02] transition"
    >
      {/* Left: Profile Picture */}
      <div>
        <img
          src={conn.photo_url}
          alt={conn.firstName}
          className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-md"
        />
      </div>

      {/* Right: Name and About */}
      <div className="flex flex-col">
        <h3 className="text-xl font-bold tracking-wide">
          {conn.firstName} {conn.lastName}
        </h3>
        <p className="text-white/90 text-sm line-clamp-2">{conn.about}</p>
      </div>
    </div>
  ))}
</div>

);
};

export default Connections;
