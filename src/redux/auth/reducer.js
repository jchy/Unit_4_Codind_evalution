import { authConstants } from "./actionTypes";

const initState = {
  isAuth: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true
      };
    }
    default:
      return state;
  }
}

export default reducer;
