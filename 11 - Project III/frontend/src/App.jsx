import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, []);

  return (
    <div>
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
