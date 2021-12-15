import React, { useState } from "react";

function StroyComp() {
  const [modal, setmodal] = useState(false);

  return (
    <div className="w-full bg-white shadow rounded  border-gray-300 mx-auto px-2">
      <button
        onClick={() => setmodal(true)}
        className="text-gray-50 bg-gradient-to-r from-blue-400 to-purple-500 shadow py-2 px-2 rounded text-xs"
      >
        POSTS +
      </button>
      <p className="text-gray-500 text-sm font-semibold">Stories</p>
      <div className="flex gap-2 overflow-x-auto ">
        <div className="py-2">
          <div className="h-10 border-2 border-purple-400 bg-purple-500 border-t-blue-500  w-10 rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
        <div className="py-2">
          <div className="h-10 w-10 bg-gray-200 border-2 border-purple-400 border-t-blue-500  rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default StroyComp;
