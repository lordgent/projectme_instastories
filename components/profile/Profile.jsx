import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/actions/UserAction";
function Profile() {
  const dispatch = useDispatch();
  const { UserResult } = useSelector((state) => state.UserSuccess);
  console.log(UserResult);
  useEffect(() => {
    dispatch(userLogin());
  }, [dispatch]);
  console.log(UserResult);
  return (
    <div className="mx-auto bg-white shadow shadow-gray-300 items-center p-4">
      <div className="mx-auto bg-gray-800 border-4 border-purple-400 border-t-blue-500  align-center h-20 w-20 rounded-full">
        {!UserResult.improfile ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full text-gray-200"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
      <p className="text-center text-gray-600 font-semibold">
        {UserResult?.username}
      </p>
      <p className="text-center text-sm text-gray-400">{UserResult?.email}</p>

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
