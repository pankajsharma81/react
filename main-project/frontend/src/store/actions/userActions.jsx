import axios from "../../api/axios.config";
import { loaduser } from "../reducers/userSlice";

export const registerUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (user) => async (dispatch, getState)=>{
    try {
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log(data[0])
        localStorage.setItem('user', JSON.stringify(data[0]))
    } catch (error) {
        console.log(error)
    }
}

export const logoutUser = () => async (dispatch, getState) => {
    try {
        localStorage.setItem('user',"")
    } catch (error) {
        console.log(error)
    }
}

export const currentUser = () => async (dispatch,getState)=>{
    try {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) dispatch(loaduser(user))
        else console.log("user not logged in!")
    } catch (error) {
        console.log(error)
    }
}