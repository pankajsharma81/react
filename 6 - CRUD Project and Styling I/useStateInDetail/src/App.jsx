import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

export default function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "demo-task", isCompleted: false },
  ]);
  return (
    <div>
      <Create todo={todo} setTodo={setTodo} />
      <Read todo={todo} setTodo={setTodo} />
    </div>
  );
}
