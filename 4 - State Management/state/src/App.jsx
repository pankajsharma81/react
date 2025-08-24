import React from "react";

export default function App() {
  const str = "pankaj";
  const num = 21;
  const bool = true;
  const nl = null;
  const un = undefined;

  const arr = ["happy", undefined, null, 123];
  const obj = { name: "react", born: 1997 };
  return (
    <div>
      <h1>String:{str}</h1>
      <h2>Number:{num}</h2>
      <h2>Boolean:{bool}</h2>
      <h2>Null:{nl}</h2>
      <h2>Undefined:{un}</h2>
      <h2>Array:{arr}</h2>
      <h2>Object:{obj.name || obj.born}</h2>
    </div>
  );
}
