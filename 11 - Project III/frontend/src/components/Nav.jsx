import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex h-22 w-full justify-center items-center shadow space-x-10 text-2xl bg-blue-300 text-black">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
    </div>
  );
};

export default Nav;
