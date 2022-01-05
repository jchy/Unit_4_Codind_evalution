import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
        gap: "2rem",
        justifyContent: "center",
        border: "1px solid black",
        padding: "10px",
        margin: "0px",
        // padding: "0px",
        marginBottom: "20px",
        background: "yellow"
      }}
    >
      <Link to="/search">Search</Link>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
