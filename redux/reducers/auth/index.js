import { AUTH_LOGIN, LOGOUT } from "../../actions/authAction";

const intitalState = {
  AuthResult: false,
  AuthLoading: false,
  AuthError: false,

  LogoutUser: false,
  LogoutError: false,
};

const AuthUser = (state = intitalState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        AuthResult: action.payload.data,
        AuthLoading: action.payload.loading,
        AuthError: action.payload.errorMessage,
      };

    case LOGOUT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AuthUser;
