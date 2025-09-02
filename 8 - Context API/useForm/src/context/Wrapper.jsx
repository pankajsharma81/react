import { createContext, useState } from "react";

export const todoContext = createContext(null);

export default function Wrapper(props) {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "demo",
      isCompleted: false,
    },
  ]);
  return (
    <todoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </todoContext.Provider>
  );
}
