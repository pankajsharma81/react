import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-22 w-full space-x-10">
      <NavLink to="/" className={(e) => (e.isActive ? "text-red-300" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/recipes"
        className={(e) => (e.isActive ? "text-red-300" : "")}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/about"
        className={(e) => (e.isActive ? "text-red-300" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/create-recipe"
        className={`py-2 px-4 border rounded bg-blue-50 text-black font-extralight ${(
          e
        ) => (e.isActive ? "text-red-300" : "")}`}
      >
        Create Recipe
      </NavLink>
      <NavLink to="/fav" className={(e) => (e.isActive ? "text-red-300" : "")}>
        Fav
      </NavLink>
    </div>
  );
};

export default Navbar;
