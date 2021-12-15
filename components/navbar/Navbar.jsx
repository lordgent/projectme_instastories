import React, { useState } from "react";
import Link from "next/link";
import Cookie from "js-cookie";

function Navbar() {
  const [IsMobile, setIsMobile] = useState(false);
  return (
    <div className="bg-white mx-auto px-4 ">
      <div className="flex items-center justify-between px-4 lg:px-20">
        <div>
          <Link href="/">
            <a className="text-gray-500 text-1xl font-semibold ">HiEveryone</a>
          </Link>
        </div>
        <div>
          <input
            type="text"
            className="shadow hidden lg:block shadow  px-2 h-8"
            placeholder="Search"
          />
        </div>
        {!Cookie.get("tokenkey") ? (
          ""
        ) : (
          <div className="flex ">
            <a className=" px-2 text-gray-500 py-2 lg:py-5">
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

            <a className="text-gray-500 px-2 py-2 lg:py-5">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
