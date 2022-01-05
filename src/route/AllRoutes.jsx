import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const AllRoutes = () => {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <About />
      </Route>
      <Route exact path="/search">
        <About />
      </Route>
    </div>
  );
};
export default AllRoutes;
