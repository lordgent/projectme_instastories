import { combineReducers } from "redux";
import AuthUser from "./auth";
import UserSuccess from "./users";
export default combineReducers({
  AuthUser,
  UserSuccess,
});
