import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "right", gap: "2rem" }}>
      <Link to="/search">Search</Link>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
