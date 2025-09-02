import { useNavigate } from "react-router";

export default function Product() {
  const navigate = useNavigate();

  const navigateHandler = (name) => {
    navigate(`/product/detail/${name}`);
  };

  return (
    <div className="container mx-auto my-5">
      <p className="text-5xl font-light tracking-tight py-5">Products</p>

      <h1 className="text-2xl py-3">Product 1</h1>
      <button
        className="border px-2 py-3 rounded text-xl bg-gray-500 text-white mb-5"
        onClick={() => navigateHandler("Project 1")}
      >
        Product Detail
      </button>

      <h1 className="text-2xl py-3">Product 2</h1>
      <button
        className="border px-2 py-3 rounded text-xl bg-gray-500 text-white mb-5"
        onClick={() => navigateHandler("Project 2")}
      >
        Product Detail
      </button>

      <h1 className="text-2xl py-3">Product 3</h1>
      <button
        className="border px-2 py-3 rounded text-xl bg-gray-500 text-white mb-5"
        onClick={() => navigateHandler("Project 3")}
      >
        Product Detail
      </button>
    </div>
  );
}
