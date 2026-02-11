import React from "react";
import logoImage from "../assets/logoImage.jpg";
import { Link, useNavigate} from "react-router-dom";

const Header = () => {
  const navigate= useNavigate();
  return (
    <>
      <div className="bg-(--primary) px-4 py-2 flex justify-between items-center ">
        <Link to={"/"}>
          <img src={logoImage} alt="Logo" className="h-12 w-20 " />
        </Link>

        <div className="flex gap-4 text-white text-xl">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>

        <div className="flex gap-3">
          <button
            className="bg-(--secondary) py-2 px-4 rounded-xl text-white font-semibold"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="bg-(--secondary) py-2 px-4 rounded-xl text-white font-semibold"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
