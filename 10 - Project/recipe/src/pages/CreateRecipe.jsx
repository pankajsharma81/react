import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RecipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { recipe, setRecipe } = useContext(RecipeContext);

  const submitHandler = (data) => {
    console.log(data);
    data.id = nanoid();

    const copyRecipe = [...recipe];
    copyRecipe.push(data);
    setRecipe(copyRecipe);
    
    localStorage.setItem("recipes", JSON.stringify(copyRecipe));

    // setRecipe([...recipe, data]);
    toast.success("Recipe Created Successfully");

    reset();
    navigate("/recipes");
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="container mx-auto">
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

      <button className="py-2 px-4 border rounded bg-gray-800 font-extralight mt-3">
        Submit
      </button>
    </form>
  );
};

export default CreateRecipe;
