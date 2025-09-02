import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../context/Wrapper";

export default function Read() {
  const [todo, setTodo] = useContext(todoContext);
  const deleteHandler = (id) => {
    const filter = todo.filter((todo) => id != todo.id);
    setTodo(filter);
    toast.error("task deleted");
  };

  return (
    <div>
      {todo.map((task) => (
        <li key={task.id}>
          {task.title} |{" "}
          <button onClick={() => deleteHandler(task.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}
