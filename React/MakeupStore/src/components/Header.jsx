import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-blue-400 flex justify-between py-3 ">
      <h1 className="text-5xl text-white">Makeup Store</h1>
      <div className="flex gap-4 justify-center items-center px-4">
        <Link to={"/"} className="text-white text-2xl flex items-center">
          <IoHome />
          <span>Home</span>
        </Link>
        <Link to={"/about"} className="text-white text-2xl">
          About
        </Link>
        <Link to={"/product"} className="text-white text-2xl">
          Product
        </Link>
        <Link to={"/contact"} className="text-white text-2xl">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
