import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export const AppContext = createContext();

function TodoInput({ onAdd, onSearch }) {
  const [state, setState] = useState("masai");
  const [page, setPage] = useState(1);

  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
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
  );
}

export default TodoInput;
