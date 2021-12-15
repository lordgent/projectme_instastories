import React, { useEffect } from "react";
import "../styles/globals.css";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../redux/reducers";
import Cookie from "js-cookie";
import { AuthToken } from "../pages/api/be";
import Router from "next/router";
const token = Cookie.get("tokenkey");
if (token) {
  AuthToken(token);
}
console.log(token);
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const token = Cookie.get("tokenkey");
    if (token) {
      AuthToken(token);
    }
    if (!Cookie.get("tokenkey")) {
      Router.push("/login");
    }
  }, []);

  const store = createStore(reducers, compose(applyMiddleware(thunk)));
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
