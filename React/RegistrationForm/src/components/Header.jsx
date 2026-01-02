import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-950 text-white text-4xl py-3 flex justify-between items-center">
        <h1>Registration Form</h1>
        <div className="flex gap-3">
          <Link to={"/"} className="text-decoration-none text-light">
            Home
          </Link>
          <Link to={"/register"} className="text-decoration-none text-light">
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
