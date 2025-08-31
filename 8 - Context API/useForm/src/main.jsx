import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import Wrapper from "./components/wrapper.jsx";

createRoot(document.getElementById("root")).render(
  <Wrapper App={<App/>} />
  // <>
  //   <App />
  //   <ToastContainer position="top-center" />
  // </>
);
