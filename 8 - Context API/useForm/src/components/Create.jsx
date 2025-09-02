import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useContext } from "react";
import { todoContext } from "../context/Wrapper";

export default function Create() {
  
  const [todo, setTodo] = useContext(todoContext);

  const {
    register, // 2-way binding
    handleSubmit, // submission
    reset, // form reset
    formState: { errors }, // error
  } = useForm();

  const submitHandler = (data) => {
    // -----> yah event(e) nahi milta, data milta hai
    data.isCompleted = false;
    data.id = nanoid();

    const copyTodos = [...todo];
    copyTodos.push(data);
    setTodo(copyTodos);
    toast.success("task created");

    reset();
  };
  // console.log(errors.title.message);

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title cannot be empty" })}
          type="text"
          placeholder="Enter your task"
        />

        {/* {errors && errors.title && errors.title.message && (
          <small> {errors.title.message} </small>
        )} */}

        <small> {errors?.title?.message} </small>

        <br />
        <br />
        <button>Add Todo</button>
        <br />
        <br />
      </form>
    </div>
  );
}
