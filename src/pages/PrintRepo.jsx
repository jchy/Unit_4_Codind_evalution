import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getRepo } from "./api";
import Pagination from "./Pagination";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function PrintRepo({ allFunc }) {
  const [changePageTo, perPage, page, setPage] = allFunc;

  let { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepo());
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
          <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            <Paper sx={{ maxWidth: 600, my: 1, mx: "auto", p: 2 }}>
              <Grid container wrap="wrap" spacing={2}>
                <Grid item>
                  <Typography>ID : {i.id}</Typography>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography> Repo_name : {i.name}</Typography>
                </Grid>
                <Grid item xs zeroMinWidth>
                  <Typography Wrap> Description : {i.description}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        ))}
      </div>
    </>
  );
}

export default PrintRepo;
