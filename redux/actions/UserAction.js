import { API } from "../../pages/api/be";
import swal from "sweetalert";
import Cookie from "js-cookie";
import Router from "next/router";

export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN,
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

    API.get("/auth", data, config)

      .then((response) => {
        dispatch({
          type: USER_LOGIN,
          payload: {
            loading: true,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: USER_LOGIN,
          payload: {
            loading: false,
            data: false,
            errorMessage: err,
          },
        });
      });
  };
};
