import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess
} from "../redux/app/action";

export const getTodos = (text, page) => (dispatch) => {
  // pre fetch
  const requestAction = getTodosRequest();
  dispatch(requestAction);
  return fetch(
    `https://api.github.com/search/repositories?q=${text}&page=2&per_page=${page}`
  )
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = getTodosSuccess(res);
      console.log(successAction);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = getTodosFailure();
      dispatch(failureAction);
    });
};

export const addTodos = (text) => (dispatch) => {
  const requestAction = addTodosRequest();
  dispatch(requestAction);
  return fetch(
    "https://api.github.com/search/repositories?q=masai&page=2&per_page=4",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: text,
        status: false
      })
    }
  )
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = addTodosSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = addTodosFailure();
      dispatch(failureAction);
    });
};
