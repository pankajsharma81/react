import { useState } from "react";
import { nanoid } from "nanoid";
export default function Create(props) {
  const { todo, setTodo } = props;
  
  const [title, setTitle] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };

    // const copyTodo = [...todo];
    // copyTodo.push(newTodo);
    // setTodo(copyTodo);

    setTodo([...todo, newTodo]);
    setTitle("");
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="enter your task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <button>Add Task</button>
      </form>
    </div>
  );
}
