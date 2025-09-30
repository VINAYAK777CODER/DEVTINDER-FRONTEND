// Feed.jsx

import React, { useEffect } from 'react'
import axios from "axios"; 
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import FeedCard from './FeedCard';

const Feed = () => {
  const feed = useSelector((store)=>store.feed)
  const dispatch=useDispatch();
  
  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", { withCredentials: true }); 
      dispatch(addFeed(res?.data?.data))
    } catch (err) {
      console.log("Error fetching feed:", err.response?.data || err);
    }
  };

  useEffect(() => {
    if(!feed)
    {
      getFeed();
    }
  }, [feed]);

  // const handleIgnore = (id) => {
  //   console.log("Ignored:", id);
  // };

  // const handleInterest = (id) => {
  //   console.log("Interested In:", id);
  // };

 return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center gap-6 py-10">
    {feed?.[0] ? (
      <FeedCard user={feed[0]} />
    ) : (
      <p>Loading feed...</p>
    )}
  </div>
);

};

export default Feed;
