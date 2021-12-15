import { API } from "../../pages/api/be";
import swal from "sweetalert";
import Cookie from "js-cookie";
import Router from "next/router";

export const AUTH_LOGIN = "AUTH_LOGIN";
export const LOGOUT = "LOGOUT";
export const loginAuth = (data) => {
  console.log(data);
  return (dispatch) => {
    dispatch({
      type: AUTH_LOGIN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    API.post("/signin", data, config)

      .then((response) => {
        console.log(response.data.user);
        swal("Login is Success");
        Router.push("/");
        Cookie.set("tokenkey", response.data.user.token);
        dispatch({
          type: AUTH_LOGIN,
          payload: {
            loading: true,
            data: response.data.user,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_LOGIN,
          payload: {
            loading: false,
            data: false,
            errorMessage: err,
          },
        });
      });
  };
};

export const LogoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    Cookie.remove("tokenkey");
    Router.push("/login");
    dispatch({
      type: LOGOUT,
      payload: {
        loading: true,
        errorMessage: false,
      },
    });
  };
};
