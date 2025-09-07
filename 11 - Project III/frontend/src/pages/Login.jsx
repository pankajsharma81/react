import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();

  const LoginHandler = (user) => {

    console.log(user);
  };

  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="flex items-center flex-col mt-[12%] gap-3 text-black"
    >
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
        Login User
      </button>
      <p className="text-white text-2xl">
        Don't have an account? <Link to="/register" className="text-blue-400">Register</Link>{" "}
      </p>
    </form>
  );
};

export default Login;
