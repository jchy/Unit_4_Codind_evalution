import { createContext, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export const AppContext = createContext();

function UserInput({ onAdd, onSearch }) {
  const [state, setState] = useState("masai");
  const [page, setPage] = useState(1);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Stack direction="row" spacing={2}>
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Search Repository On Github"
          style={{ fontSize: "20px" }}
        />
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            onAdd(state);
            setState("");
          }}
        >
          <SearchIcon /> Repo
        </Button>
        <input
          value={page}
          onChange={(e) => setPage(e.target.value)}
          placeholder="Search Page"
        />
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            onSearch(page);
            setPage(1);
          }}
        >
          <SearchIcon /> Page
        </Button>
      </Stack>
    </div>
  );
}

export default UserInput;
