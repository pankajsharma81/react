import React from "react";
import { Outlet, useNavigate } from "react-router";

export default function Service() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-extralight my-4">Services</h1>
      <button
        className="border text-lg px-2 py-1 rounded font-semibold bg-blue-50 mb-4"
        onClick={() => navigate("/service/update")}
      >
        More Updates
      </button>
      <br />
      <button
        className="border text-lg px-2 py-1 rounded font-semibold bg-blue-50"
        onClick={() => navigate("/service/detail")}
      >
        More Detail
      </button>
      <Outlet/>
    </div>
  );
}
