import { authConstants } from "./actionTypes";

export const loginSuccess = (auth) => {
  return {
    type: authConstants.LOGIN_SUCCESS,
    payload: {
      isAuth: auth
    }
  };
};
