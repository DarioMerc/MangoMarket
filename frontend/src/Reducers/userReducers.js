import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }; //success sends data in payload
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }; //fail sends error
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
