import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../redux/actions/authAction";
import swal from "sweetalert";

function ListBar() {
  const dispatch = useDispatch();

  const logoutuser = () => {
    dispatch(LogoutUser());
    swal("Logout Success");
  };
  return (
    <div className=" lg:block hidden shadow shadow-gray-200 fixed bottom-0 lg:relative bg-white w-full mx-auto ">
      <div className="lg:flex-col w-full flex mx-auto">
        <div className=" block flex hover:bg-gray-100  px-2 text-gray-700 text-sm py-4">
          <div className="flex items-center">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <Link href="/">
              <a className="ml-2 lg:text-sm text-xs font-semibold text-gray-500">
                Feed
              </a>
            </Link>
          </div>
        </div>

        <div className=" block flex hover:bg-gray-100  px-2 text-gray-700 text-sm py-4">
          <div className="flex items-center">
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
            <Link href="/">
              <a className="ml-2 lg:text-sm text-xs font-semibold text-gray-500">
                My Collcection
              </a>
            </Link>
          </div>
        </div>

        <div className=" block flex hover:bg-gray-100  px-2 text-gray-700 text-sm py-4">
          <div className="flex items-center">
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
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <Link href="/">
              <a className="ml-2 lg:text-sm text-xs font-semibold text-gray-500">
                Message
              </a>
            </Link>
          </div>
        </div>

        <div
          className=" block flex hover:bg-gray-100  px-2 text-gray-700 text-sm py-4"
          onClick={logoutuser}
        >
          <div className="flex items-center">
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
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>

            <a className="ml-2 lg:text-sm text-xs font-semibold text-gray-500">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListBar;
