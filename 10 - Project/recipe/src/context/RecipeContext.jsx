import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({children}) => {
  const [recipe, setRecipe] = useState("");
  const value = { recipe, setRecipe };
  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
