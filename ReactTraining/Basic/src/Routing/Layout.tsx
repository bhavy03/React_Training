import React from "react";
import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <h1>Welcome to My Site</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <hr />
      <Outlet /> {/* This is where the nested routes will render */}
    </div>
  );
}
