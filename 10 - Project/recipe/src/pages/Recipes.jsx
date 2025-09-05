import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { recipe } = useContext(RecipeContext);
  return (
    <div>
      {recipe.length > 0 ? (
        <div className="flex mt-10 flex-wrap ">
          {recipe.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="flex justify-center mt-10 text-7xl font-semibold">
          No Recipe Found
        </p>
      )}
    </div>
  );
};

export default Recipes;
