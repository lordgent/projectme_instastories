import { USER_LOGIN } from "../../actions/UserAction";

const intitalState = {
  UserResult: false,
  UserLoading: false,
  UserError: false,
};

const UserSuccess = (state = intitalState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        UserResult: action.payload.data,
        UserLoading: action.payload.loading,
        UserError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default UserSuccess;
