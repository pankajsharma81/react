import { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

export default function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "demo",
      isCompleted: false,
    },
  ]);

  const {
    register,                         // 2-way binding
    handleSubmit,                     // submission
    reset,                            // form reset
    formState: { errors },            // error
  } = useForm();

  const submitHandler = (data) => {           // -----> yah event(e) nahi milta, data milta hai
    data.isCompleted = false;
    data.id = nanoid();

    const copyTodos = [...todo];
    copyTodos.push(data);
    setTodo(copyTodos);

    reset();
  };
  // console.log(errors.title.message);

  const deleteHandler = (id) => {
    const filter = todo.filter((todo) => id != todo.id);
    setTodo(filter);
  };

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

      {todo.map((task) => (
        <li key={task.id}>
          {task.title} |{" "}
          <button onClick={() => deleteHandler(task.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
