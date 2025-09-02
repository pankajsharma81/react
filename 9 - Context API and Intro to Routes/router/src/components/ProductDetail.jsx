import React from "react";
import { useNavigate, useParams } from "react-router";

export default function ProductDetail() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params)

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-xl">{params.name}</h1>
      <p>Product Description...</p>
      <button
        className="border px-2 py-3 rounded text-xl bg-gray-500 text-white mb-5"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}
