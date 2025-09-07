import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/userActions";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    console.log(user)
    dispatch(asyncRegisterUser(user));
    navigate("/login")
  };

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex items-center flex-col mt-[12%] gap-3 text-black"
    >
      <input
        type="text"
        {...register("username")}
        placeholder="UserName"
        className="bg-blue-100 p-4 rounded text-lg"
      />
      <input
        type="email"
        {...register("email")}
        placeholder="Email"
        className="bg-blue-100 p-4 rounded text-lg"
      />
      <input
        type="password"
        {...register("password")}
        placeholder="Password"
        className="bg-blue-100 p-4 rounded text-lg"
      />
      <button className="bg-blue-100 px-4 py-2 rounded text-lg">
        Register User
      </button>
      <p className="text-white text-2xl">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400">
          Login
        </Link>{" "}
      </p>
    </form>
  );
};

export default Register;
