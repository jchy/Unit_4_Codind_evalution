import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTodos } from "./api";

function TodoList() {
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      {todos?.map((i) => (
        <div style={{ border: "1px solid black", gap: "2rem" }}>
          <p>{i.id}</p>
          <p>{i.node_id}</p>
          <p>Repository Name : {i.name}</p>
          <p>Description : {i.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
