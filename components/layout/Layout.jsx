import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Cookie from "js-cookie";
import Router from "next/router";
import TabBottom from "../navbar/TabBottom";

function Layout(props) {
  const { children } = props;
  return (
    <div className="w-full bg-white">
      <Navbar />
      {children}
      <TabBottom />
    </div>
  );
}

export default Layout;
