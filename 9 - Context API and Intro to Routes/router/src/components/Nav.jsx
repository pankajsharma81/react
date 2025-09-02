import { Link } from "react-router";

export default function Nav() {
  return (
    <div className="flex justify-center pt-5 space-x-5 text-xl font-semibold">
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/service">Service</Link>
        <Link to="/about">About</Link>
    </div>
  )
}
