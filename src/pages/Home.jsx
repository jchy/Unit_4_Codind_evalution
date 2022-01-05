import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess
} from "../redux/app/action";
import { addTodos, getTodos } from "./api";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();
  const handleAdd = (text) => {
    dispatch(addTodos(text)).then((res) => {
      dispatch(getTodos(text));
    });
  };

  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </div>
  );
}

export default Todo;
