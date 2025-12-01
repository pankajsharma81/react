import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const registerHandler = (data) => {
    data.id = nanoid();
    data.isAdmin = false;
    console.log(data);
  };

  return (
    <form
      className="py-10 px-10 flex flex-col max-w-120 gap-4"
      onSubmit={handleSubmit(registerHandler)}
    >
      <input
        type="text"
        placeholder="Username"
        {...register("username")}
        className="border p-2 rounded"
      />
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

      <button className="bg-blue-500 text-white rounded text-lg">Register</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>{" "}
      </p>
    </form>
  );
};

export default Register;
