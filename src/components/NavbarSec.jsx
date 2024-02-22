import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function NavbarSec() {
  return (
    <div className="w-[100vw] flex justify-center items-center px-2 py-2 font-semibold">
      <div className="px-4 py-2">
        <NavLink to={'/shop'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Shop</NavLink>
      </div>
      <div className="px-4 py-2">
        <NavLink to={'/'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Home</NavLink>
      </div>

      <NavLink to={'/'} className="flex flex-col items-center px-4 cursor-pointer">
        <img src={Logo} alt="Floral Extracts" className="h-14" />
        <h1 className="text-3xl text-[#290c06] font-bold ">Floral Extacts</h1>
      </NavLink>
      <div className="px-4 py-2">
        <NavLink to={'/about'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">About</NavLink>
      </div>
      <div className="px-4 py-2">
        <NavLink to={'/contact'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Contact</NavLink>
      </div>
    </div>
  );
}

export default NavbarSec;
