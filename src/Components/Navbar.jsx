import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/leavemsg">Leave Msg</Link>
      <Link to="/todoapp">Todo App</Link>
    </div>
  );
};

export default Navbar;
