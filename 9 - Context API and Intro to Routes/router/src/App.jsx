import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Product from "./components/Product";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
