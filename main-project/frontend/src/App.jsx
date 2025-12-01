import { useEffect } from "react";
import { asyncGetUser } from "./store/features/userAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const data = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(asyncGetUser());
  }, []);
  return <div>App</div>;
};

export default App;
