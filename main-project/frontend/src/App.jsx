import { useEffect } from "react";
import axios from "./api/axios.config";

const App = () => {
  const getProduct = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getProduct()
  },[])
  return <div>App</div>;
};

export default App;
