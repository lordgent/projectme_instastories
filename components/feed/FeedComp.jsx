/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";

import { io } from "socket.io-client";
import Image from "next/image";
import Cookie from "js-cookie";
let socket;
function FeedComp() {
  const [posts, setPosts] = useState([]);
  const [likes, setlikes] = useState(false);
  useEffect(() => {
    socket = io("http://localhost:4005");
    getStaticProps();
    return () => {};
  }, []);

  async function getStaticProps() {
    socket.emit("LoadAllPosts");
    socket.on("PostsUsers", (data) => {
      setPosts(data);
    });
  }

  const handleLike = () => {
    setlikes(true);
  };

  return (
    <div className="w-full mx-auto ">
      <p className="mb-2 font-semibold text-sm text-gray-500 mt-2">Feed</p>
      <div className="grid grid-cols-1 h-screen overflow-x-auto">
        {posts?.map((item, idx) => (
          <div className="p-4 border-2 bg-white mb-4" key={idx}>
            <div className="h-80 bg-gray-300 rounded">
              <div className="h-full bg-red-400">
                <img
                  src={`https://res.cloudinary.com/dtujegrtj/image/upload/v1639261778/${item?.imagepost}.jpg`}
                  alt={item?.imagepost}
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6  ${
                    likes ? "text-red-500" : "text-gray-500"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={handleLike}
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6  w-6 text-gray-500 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </span>
            </div>
            <p className="text-gray-600 font-semibold text-sm mt-2">120 Like</p>
            <p className="text-xs text-gray-500">
              <b className="text-gray-600 mr-2">{item?.user?.username}</b>
              {item?.caption}
            </p>
          </div>
        ))}
        {/* ==== */}

        {/* ======= ===== */}
      </div>
    </div>
  );
}

export default FeedComp;
// Lordgent1998#

// https://res.cloudinary.com/dtujegrtj/image/upload/v1639238921/imageposts/jobxwtm9wcaquhysytmj.jpg
// https://res.cloudinary.com/dtujegrtj/image/upload/v1639261778/imageposts/kfhdzh4zctqtjdianhxa.jpg
