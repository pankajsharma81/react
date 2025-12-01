import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const LoginHandler = (data) => {
    console.log(data);
  };
  return (
    <form
      className="py-10 px-10 flex flex-col max-w-120 gap-4"
      onSubmit={handleSubmit(LoginHandler)}
    >
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="border p-2 rounded"
      />

      <button className="bg-blue-500 text-white rounded text-lg">Login User</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>{" "}
      </p>
    </form>
  );
};

export default Login;
