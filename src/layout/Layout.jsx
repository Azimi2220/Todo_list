import React from "react";
import { Outlet, Link } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <nav >
        <ul className="flex items-center justify-around text-white bg-gray-500 p-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
