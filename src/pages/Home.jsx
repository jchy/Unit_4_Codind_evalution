// import { useDispatch } from "react-redux";
// import { v4 as uuid } from "uuid";
// import {
//   addTodosFailure,
//   addTodosRequest,
//   addTodosSuccess
// } from "../redux/app/action";
// import { addTodos, getTodos } from "./api";
// import TodoInput from "./TodoInput";
// import TodoList from "./TodoList";

// function Todo() {
//   const dispatch = useDispatch();
//   const handleAdd = (text) => {
//     dispatch(addTodos(text)).then((res) => {
//       dispatch(getTodos(text));
//     });
//   };

//   return (
//     <div>
//       <TodoInput onAdd={handleAdd} />
//       <TodoList />
//     </div>
//   );
// }

// export default Todo;
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Pagination from "./Pagination";
import { addTodos, getTodos } from "./api";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Todo() {
  const [page, setPage] = useState(1);
  const [perPageInput, setPerPageInput] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const dispatch = useDispatch();
  const handleAdd = (text) => {
    dispatch(addTodos(text)).then((res) => {
      dispatch(getTodos(text));
    });
  };

  const handlePage = (page) => {
    dispatch(addTodos(page)).then((res) => {
      dispatch(getTodos(page));
    });
  };

  const changePageTo = (num) => {
    if (num <= 1) {
      setPage(1);
      return;
    }
    setPage(num);
  };

  const handlePerPage = () => {
    setPerPage(perPageInput);
  };

  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <TodoInput onAdd={handleAdd} onSearch={handlePage} />
      <TodoList allFunc={[changePageTo, perPage, page, setPage]} />
      <Pagination
        currentPage={page}
        onClickCallback={(page) => changePageTo(page)}
        total={Math.ceil(30 / perPage)}
      />
    </div>
  );
}

export default Todo;
