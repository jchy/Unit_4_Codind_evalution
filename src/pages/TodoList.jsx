import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTodos } from "./api";
import Pagination from "./Pagination";

function PrintRepo({ allFunc }) {
  const [changePageTo, perPage, page, setPage] = allFunc;

  let { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  todos = todos.filter(
    (_, i) => i >= (page - 1) * perPage && i < page * perPage
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          marginBottom: "20px",
          marginTop: "20px"
        }}
      >
        {isLoading && <h3>Loading...</h3>}
        {isError && <h3> Something went wrong!</h3>}
        {todos?.map((i) => (
          <div
            style={{
              // display: "flex",
              border: "1px solid black",
              // gap: "2rem",
              padding: "20px"
              // flexDirection: "column"
            }}
          >
            <p>ID : {i.id}</p>
            <p>Repository Name : {i.name}</p>
            <p>NODE ID: {i.node_id}</p>
            <p>Description : {i.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default PrintRepo;
