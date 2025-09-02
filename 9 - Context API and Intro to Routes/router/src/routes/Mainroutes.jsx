import { Route, Routes } from "react-router";
import Home from "../components/Home";
import Product from "../components/Product";
import Service from "../components/Service";
import About from "../components/About";
import ProductDetail from "../components/ProductDetail";
import ServiceDetail from "../components/ServiceDetail";
import ServiceUpdate from "../components/ServiceUpdate";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />}>
        <Route path="/service/detail" element={<ServiceDetail />} />
        <Route path="/service/update" element={<ServiceUpdate />} />
      </Route>
    </Routes>
  );
};

export default Mainroutes;
