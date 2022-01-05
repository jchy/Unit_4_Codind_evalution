import { appConstants } from "./actionTypes";

const initState = {
  todos: [],
  isLoading: true,
  isError: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case appConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: action.payload.token
      };
    }
    case appConstants.GET_REPO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case appConstants.GET_REPO_SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos.items,
        isLoading: false
      };
    }
    case appConstants.GET_REPO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case appConstants.ADD_REPO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case appConstants.ADD_REPO_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case appConstants.ADD_REPO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }

    case appConstants.ADD_REPO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    default:
      return state;
  }
}

export default reducer;
