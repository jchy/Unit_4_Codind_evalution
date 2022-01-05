import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import SignIn from "../pages/SignIn";

const AllRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <SignIn />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
    </div>
  );
};
export default AllRoutes;
