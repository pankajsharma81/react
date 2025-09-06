import React from "react";
import { Link } from "react-router";

const RecipeCard = ({item}) => {
  const { id, title, desc, image, chef } = item;
  return (
    <Link to={`/recipes/detail/${id}`}>
      <div className="container mx-auto px-5 text-black my-10 duration-100 hover:scale-105">
        <div className="max-w-[20vw] h-[55vh] overflow-hidden bg-white rounded-xl p-2 shadow">
          <img
            src={image}
            alt={title}
            className="rounded w-[100vw] h-[50%] object-cover "
          />
          <h1 className="text-2xl font-semibold tracking-tighter">{title}</h1>
          <p className="text-xl font-extralight tracking-tighter">{chef}</p>
          <p className="text-lg">
            {desc?.slice(0, 100)}...
            <small className="text-red-400 font-semibold">more</small>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
