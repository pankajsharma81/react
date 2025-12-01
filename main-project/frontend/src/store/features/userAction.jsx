import axios from "../../api/axios.config";
import { loadUser } from "./userSlice";

export const asyncGetUser =()=> async (dispatch,getState) => {
  try {
    // console.log(getState())
    const response = await axios.get("/users");
    // console.log(response.data);
    dispatch(loadUser(response.data))

  } catch (error) {
    console.log(error);
  }
};


