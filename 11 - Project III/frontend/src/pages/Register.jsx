import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();

  const RegisterHandler = (user) => {
    user.id = nanoid();

    console.log(user);
  };

  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
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
        Already have an account? <Link to="/login" className="text-blue-400">Login</Link>{" "}
      </p>
    </form>
  );
};

export default Register;
