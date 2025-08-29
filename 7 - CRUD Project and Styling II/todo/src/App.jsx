import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "demo-task", isCompleted: false },
  ]);

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      title,
      isCompleted: false,
    };

    setTodo([...todo, newTodo]);
    setTitle("");
  };

  const handleDel = (id) => {
    const filteredTodo = todo.filter((todo) => todo.id != id);
    setTodo(filteredTodo);
  };

  return (
    <div>
      <h1>Todo Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your task"
        />
        <br />
        <br />
        <button>Add Task</button>
      </form>

      {
      todo.map((task) => (
        <li key={task.id}>
          {task.title}{" "}
          <button onClick={() => handleDel(task.id)}>Delete Task</button>{" "}
        </li>
      ))
      }

    </div>
  );
}
