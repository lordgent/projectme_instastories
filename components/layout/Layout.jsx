import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Cookie from "js-cookie";
import Router from "next/router";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../../redux/reducers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

function Layout(props) {
  const { children } = props;
  return (
    <Provider store={store}>
      <div className="w-full bg-white">
        <Navbar />
        {children}
      </div>
    </Provider>
  );
}

export default Layout;
