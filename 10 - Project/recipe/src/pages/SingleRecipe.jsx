import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { RecipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
  // dynamic route
  const params = useParams();
  const { recipe, setRecipe } = useContext(RecipeContext);
  const detailRecipe = recipe.find((item) => params.id == item.id);
  console.log(detailRecipe);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: detailRecipe.title,
      image: detailRecipe.image,
      chef: detailRecipe.chef,
      desc: detailRecipe.desc,
      category: detailRecipe.category,
    },
  });
  const navigate = useNavigate();

  // update
  const updateHandler = (data) => {
    const index = recipe.findIndex((item) => params.id == item.id);
    const copyRecipe = [...recipe];
    copyRecipe[index] = { ...recipe[index], ...data };
    setRecipe(copyRecipe);
    toast.success("Recipe Updated!");
  };

  // delete
  const deleteHandler = () => {
    const filter = recipe.filter((item) => item.id != params.id);
    setRecipe(filter);
    toast.error("Recipe Deleted!");
    navigate("/recipes");
  };

  
    useEffect(() => {
      console.log("useEffect is mounted");
      // getData()
      return () => {
        console.log("useEffect is un mounted");
      };
    },[]);

  return detailRecipe ? (
    <div className=" flex w-full container mx-auto">
      <div className="left w-1/2">
        <h1 className="text-5xl font-bold py-5">{detailRecipe.title}</h1>
        <img
          src={detailRecipe.image}
          alt=""
          className="w-[25vw] bg-white p-2 rounded-xl"
        />
        {/* <p>{detailRecipe.chef}</p> */}
      </div>

      <div className="right w-1/2">
        <form
          onSubmit={handleSubmit(updateHandler)}
          className="container mx-auto"
        >
          <input
            {...register("image")}
            type="url"
            placeholder="Enter Image Url"
            className="block border-b outline-0 px-2 py-3"
          />
          <input
            {...register("title")}
            type="text"
            placeholder="Recipe Title"
            className="block border-b outline-0 px-2 py-3"
          />
          <input
            {...register("chef")}
            type="text"
            placeholder="Chef Name"
            className="block border-b outline-0 px-2 py-3"
          />
          <textarea
            {...register("desc")}
            placeholder="// Start from here..."
            className="block border-b outline-0 px-2 py-3"
          />
          <textarea
            {...register("ingr")}
            placeholder="// Write Ingredients seperated by comma"
            className="block border-b outline-0 px-2 py-3"
          />
          <textarea
            {...register("inst")}
            placeholder="// Write Instructions seperated by comma"
            className="block border-b outline-0 px-2 py-3"
          />
          <select
            {...register("category")}
            className="block border-b outline-0 px-2 py-3"
          >
            <option value="breakfast" className="bg-blue-100 text-black">
              Breakfast
            </option>
            <option value="lunch" className="bg-blue-100 text-black">
              Lunch
            </option>
            <option value="supper" className="bg-blue-100 text-black">
              Supper
            </option>
            <option value="dinner" className="bg-blue-100 text-black">
              Dinner
            </option>
          </select>

          <button className="py-2 px-4 border rounded bg-blue-800 font-extralight mt-3">
            Update
          </button>
          <button
            onClick={deleteHandler}
            className="py-2 px-4 border rounded bg-red-800 font-extralight mt-3"
          >
            Delete
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
