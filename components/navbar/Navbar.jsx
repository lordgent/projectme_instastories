import React, { useState } from "react";
import Link from "next/link";
import Cookie from "js-cookie";

function Navbar() {
  const [IsMobile, setIsMobile] = useState(false);
  return (
    <div className="bg-white mx-auto px-4">
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-between items-center px-4 py-2 lg:py-0 border-b border-gray-200 lg:border-b-0">
          <div className=" items-center py-4">
            <Link href="/">
              <a className="text-gray-500 text-1xl font-semibold ">
                HiEveryone
              </a>
            </Link>
          </div>
          <div>
            <button
              onClick={() => setIsMobile(!IsMobile)}
              className="focus:outline-none text-gray-500 block lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {!IsMobile ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`  ${
            IsMobile ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row justify-between transition-all py-4 lg:py-0`}
        >
          {!Cookie.get("token") ? (
            <div> </div>
          ) : (
            <div className="absolute lg:right-2 right-10  mx-auto p-2 items-center shadow lg:shadow-none bg-white flex flex-col lg:flex-row items-center">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className=" px-4 h-8 shadow lg:h-4 rounded-full text-gray-500 py-2 lg:py-5"
              />

              <Link href="/login">
                <a className=" px-4 text-gray-500 py-2 lg:py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </Link>

              <Link href="/login">
                <a className="text-gray-500 px-4 py-2 lg:py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
