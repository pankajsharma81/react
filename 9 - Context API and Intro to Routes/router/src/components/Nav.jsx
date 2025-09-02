import { NavLink } from "react-router"

export default function Nav() {
  return (
    <div className="flex justify-center pt-5 space-x-5 text-xl font-semibold">
        <NavLink className={({isActive})=>isActive?"text-blue-600" : ""} to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive?"text-blue-600" : ""} to="/product">Product</NavLink>
        <NavLink className={({isActive})=>isActive?"text-blue-600" : ""} to="/service">Service</NavLink>
        <NavLink className={({isActive})=>isActive?"text-blue-600" : ""} to="/about">About</NavLink>
    </div>
  )
}
