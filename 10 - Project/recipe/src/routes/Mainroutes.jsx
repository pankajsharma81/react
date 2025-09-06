import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import CreateRecipe from "../pages/CreateRecipe";
import SingleRecipe from "../pages/SingleRecipe";
import PageNotFound from "../pages/PageNotFound";
import AddToFac from "../pages/AddToFac";

export default function Mainroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/recipes" element={<Recipes />} />

      <Route path="/about" element={<About />} />

      <Route path="/create-recipe" element={<CreateRecipe />} />
      <Route path="/recipes/detail/:id" element={<SingleRecipe />} />

      
      <Route path="*" element={<PageNotFound />} />
      <Route path="/fav" element={<AddToFac />} />
    </Routes>
  );
}
