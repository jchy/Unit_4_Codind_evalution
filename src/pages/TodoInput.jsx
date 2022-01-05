// import { createContext, useState } from "react";

// export const AppContext = createContext();

// function TodoInput({ onAdd }) {
//   const [state, setState] = useState("");

//   return (
//     <div>
//       <input
//         value={state}
//         onChange={(e) => setState(e.target.value)}
//         placeholder="Search Repository On Github"
//       />
//       <button
//         onClick={() => {
//           onAdd(state);
//           setState("");
//         }}
//       >
//         SEARCH
//       </button>
//     </div>
//   );
// }

// export default TodoInput;
import { createContext, useState } from "react";

export const AppContext = createContext();

function TodoInput({ onAdd, onSearch }) {
  const [state, setState] = useState("masai");
  const [page, setPage] = useState(1);

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
