import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState([]);

  useEffect(()=>{
    const recipe = JSON.parse(localStorage.getItem("recipes"))
    setRecipe(recipe)
  },[])

  const value = { recipe, setRecipe };
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export default RecipeProvider;

// {
//       id: 1,
//       title: "Classic Margherita Pizza",
//       chef: "pankaj sharma",
//       desc: "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.Drizzle with olive oil and season with salt and pepper.",
//       ingr: [
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste",
//       ],
//       inst: [
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot.",
//       ],

//       image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//       category: "dinner",
//     }
