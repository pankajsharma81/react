import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([
    { id: 1, title: "demo-task", isCompleted: false },
  ]);

  const [title,setTitle] = useState("")
  const [isCompleted,setIsCompleted] = useState(false);
  const [gender,setGender] = useState("male")
  const [city,setCity] = useState("mohali");

  function submitHandler(){
    console.log("first")
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="enter your task" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <br />
        <br />
        <input type="checkbox" checked={isCompleted} onChange={(e)=>setIsCompleted(e.target.checked)} /> todo
        <br />
        <br />
        <input type="radio" value="male" onChange={e=>setGender(e.target.value)} checked={gender=="male" && true} />Male
        <input type="radio" value="female" onChange={e=>setGender(e.target.value)} checked={gender=="female" && true}/>Female
        <br />
        <br />
        <select value={city} onChange={e=>setCity(e.target.value)} >
            <option value="delhi">Delhi</option>
            <option value="agra">Agra</option>
            <option value="mohali">Mohali</option>
        </select>
        <br />
        <br />
        <button>Add Task</button>
      </form>
    </div>
  );
}
