import { createContext, useDebugValue, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { addRepo } from "../redux/app/action";

export const AppContext = createContext();

function Search() {
  const [state, setState] = useState("masai");
  const [page, setPage] = useState(1);

  let { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  console.log(todos);
  const dispatch = useDispatch();

  const onAdd = () => {
    return fetch(`https://api.github.com/search/repositories?q=${state}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const getData = addRepo(res.items);
        dispatch(getData);
      });
  };
  const onSearch = () => {};

  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div>
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Search Repository On Github"
        />
        <button
          onClick={() => {
            onAdd(state);
            setState("");
          }}
        >
          SEARCH
        </button>

        <input
          value={page}
          onChange={(e) => setPage(e.target.value)}
          placeholder="Search Page"
        />

        <button
          onClick={() => {
            onSearch(page);
            setPage(1);
          }}
        >
          Page
        </button>
      </div>
      <div>
        {todos?.map((i) => (
          <div
            style={{
              border: "1px solid black",
              // gap: "2rem",
              padding: "20px"
              // flexDirection: "column"
            }}
            key={i.id}
          >
            <p>Repository Name : {i.name}</p>
            <p>NODE ID: {i.node_id}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;
