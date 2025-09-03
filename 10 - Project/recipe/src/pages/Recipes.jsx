import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'

const Recipes = () => {
  const {recipe} = useContext(RecipeContext);
  return (
    <div>{
      recipe.map((item)=> <div key={item.id}>{item.title}</div> )
      }</div>
  )
}

export default Recipes