// import React, { useEffect } from "react";
import instance from "../utils/axios";

const Home = () => {
  const getData = async () => {
    const product = await instance.get("/products");
    console.log(product.data);
  };

  // useEffect(() => {
  //   console.log("useEffect is mounted");
  //   getData()
  //   return () => {
  //     console.log("useEffect is un mounted");
  //   };
  // });

  return (
    <div className="container mx-auto">
      Home
      <br />
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default Home;
