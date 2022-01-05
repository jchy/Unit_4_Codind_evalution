import { createContext, useState } from "react";

export const AppContext = createContext();

function TodoInput({ onAdd }) {
  const [state, setState] = useState("");

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
    </div>
  );
}

export default TodoInput;
