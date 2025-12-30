import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((previousData) => ({ ...previousData, [name]: value }));
  };
  const handleClearForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      console.log(loginData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="border text-center mx-120 my-30 rounded-2xl">
        <h1 className="text-4xl mt-5">Login</h1>
        <div>
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className="mt-5 flex items-center mx-10 gap-2">
              <label htmlFor="email">
                <AiOutlineMail className="text-2xl mt-1" />
              </label>

              <input
                type="email"
                name="email"
                id="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border-0 text-2xl"
                required
              />
            </div>
            <hr className="mx-15 mb-10" />

            <div className="mt-5 flex items-center mx-10 gap-2">
              <label htmlFor="password">
                <RiLockPasswordLine className="text-2xl mt-1" />
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border-0 text-2xl"
                required
              />
            </div>
            <hr className="mx-15 mb-10" />
            <button
              className="border py-2 px-10 my-3 rounded-2xl bg-blue-400"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>

        <div>
          Don't have an account?   
          <Link to={"/signup"} className="text-blue-600">
                SignUp
              </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
