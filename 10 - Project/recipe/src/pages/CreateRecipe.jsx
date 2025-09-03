import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeContext";

const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const { recipe, setRecipe } = useContext(RecipeContext);

  const submitHandler = (data) => {
    console.log(data);
    data.id = nanoid();

    // const copyRecipe = [...recipe];
    // copyRecipe.push(data);
    // setRecipe(copyRecipe);

    setRecipe([...recipe, data]);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="container mx-auto">
      <input
        {...register("url")}
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
        {...register("description")}
        placeholder="// Start from here..."
        className="block border-b outline-0 px-2 py-3"
      />
      <textarea
        {...register("ingredients")}
        placeholder="// Write Ingredients seperated by comma"
        className="block border-b outline-0 px-2 py-3"
      />
      <textarea
        {...register("instructions")}
        placeholder="// Write Instructions seperated by comma"
        className="block border-b outline-0 px-2 py-3"
      />
      <select
        {...register("category")}
        className="block border-b outline-0 px-2 py-3"
      >
        <option value="cat-1" className="bg-blue-100 text-black">
          Category 1
        </option>
        <option value="cat-2" className="bg-blue-100 text-black">
          Category 2
        </option>
        <option value="cat-3" className="bg-blue-100 text-black">
          Category 3
        </option>
      </select>

      <button className="py-2 px-4 border rounded bg-gray-800 font-extralight mt-3">
        Submit
      </button>
    </form>
  );
};

export default CreateRecipe;
