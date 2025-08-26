import { useState } from "react";

export default function Create() {

  const [fullname, setFullname] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newName = { fullname };
    console.log(newName);
  }

  return (
    <div>
      <h1>NewUser</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          placeholder="Enter your name"
        />

        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
