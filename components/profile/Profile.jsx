import React from "react";

function Profile() {
  return (
    <div className="mx-auto bg-white shadow shadow-gray-300 items-center p-4">
      <div className="mx-auto bg-gray-200 border-2 border-purple-400 border-t-blue-500  align-center h-20 w-20 rounded-full"></div>
      <p className="text-center text-gray-600 font-semibold">@lorjenr_</p>
      <p className="text-center text-sm text-gray-400">Keep Learning</p>

      <div className=" w-full mt-4 mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white hover:bg-gray-100 shadow shadow-gray-300 rounded text-center">
            <p className="font-semibold text-sm -mb-2 text-gray-600">10k</p>
            <span className="text-sm -mt-10 text-gray-400">Follow</span>
          </div>
          <div className="bg-white hover:bg-gray-100 shadow shadow-gray-300  rounded text-center">
            <p className="font-semibold text-sm -mb-2 text-gray-600">4k</p>
            <span className="text-sm -mt-20 text-gray-400">following</span>
          </div>
          <div className="bg-white hover:bg-gray-100 shadow shadow-gray-300  rounded text-center">
            <p className="font-semibold text-sm -mb-2 text-gray-600">18</p>
            <span className="text-sm -mt-10 text-gray-400">Posts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
