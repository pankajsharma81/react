import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

export default function App() {
  const [userName, setUserName] = useState([
    { name: "ram", age: 43 },
    { name: "Shyam", age: 83 },
    { name: "aman", age: 56 },
  ]);

  return (
    <div>
      <Create />
      <Read userName={userName} setUserName={setUserName} />
    </div>
  );
}
