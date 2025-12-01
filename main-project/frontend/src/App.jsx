// import { useEffect } from "react";
// import { asyncGetUser } from "./store/features/userAction";
// import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import MainRoutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div>
      <Navbar/>
      <MainRoutes />
    </div>
  );
};

export default App;
