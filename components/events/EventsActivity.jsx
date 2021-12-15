import React from "react";

function EventsActivity() {
  return (
    <div className="bg-white">
      <div className=" px-2">
        <p className="text-gray-500 text-sm mb-2 font-semibold">
          Tranding Feeds
        </p>
        <div className="w-full bg-white shadow shadow-4 mb-2 p-2 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4">
            <div className="bg-gray-200 px-2 rouned rounded-lg h-40 lg:w-40 lg:mb-0 mb-2"></div>
            <div className="bg-gray-200 px-2 rouned rounded-lg  h-40 lg:w-40  mb-2"></div>
            <div className="bg-gray-200 px-2 rouned rounded-lg  h-40 lg:w-40 mb-2"></div>
            <div className="bg-gray-200 px-2 rouned rounded-lg  h-40 lg:w-40 mb-2"></div>
          </div>
        </div>
      </div>

      <div className="px-2">
        <p className="text-gray-500 text-sm font-semibold mb-2">
          Suggestions for you
        </p>

        <div className="w-full  bg-white shadow shadow-4 mb-2">
          <div className="bg-gray-200 p-4 flex items-center">
            <div className="h-10 w-10 bg-gray-300 mb-2 rounded-full"></div>
            <div className="items-center">
              <p className="text-sm font-semibold ml-1 text-gray-500">
                @siapaSaya
              </p>
            </div>
          </div>
        </div>

        <div className="w-full  bg-white shadow shadow-4 mb-2">
          <div className="bg-gray-200 p-4 flex items-center">
            <div className="h-10 w-10 bg-gray-300 mb-2 rounded-full"></div>
            <div className="items-center">
              <p className="text-sm font-semibold ml-1 text-gray-500">
                @siapaSaya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsActivity;
