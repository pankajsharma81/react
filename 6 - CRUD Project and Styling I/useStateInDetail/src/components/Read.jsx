import React from "react";

export default function Read(props) {
  const { todo, setTodo } = props;

  return (
    <div>
      {todo.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </div>
  );
}
