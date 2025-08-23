export default function App() {
  function nonPara() {
    console.log("Non parameterized");
  }

  function para(name) {
    console.log("parameterized", name);
  }

  return (
    <div>
      <button onClick={nonPara}>non-parameterized</button>
      <button onClick={()=>para("pankaj")}>parameterized</button>
    </div>
  );
}
