import { createContext, useDebugValue, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { addRepo } from "../redux/app/action";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px"
        }}
      >
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
      <div
        state={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          marginTop: "30px"
        }}
      >
        {todos?.map((i) => (
          <Box
            sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}
            style={{ background: "yellow" }}
          >
            <Paper sx={{ maxWidth: 600, my: 1, mx: "auto", p: 2 }}>
              <Grid container wrap="wrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                  <Typography> Repository Name : {i.name}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        ))}
      </div>
    </>
  );
}

export default Search;
