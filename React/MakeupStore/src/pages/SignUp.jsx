import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((previousData) => ({ ...previousData, [name]: value }));
  };
  const handleClearForm = () => {
    setSignUpData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      console.log(signUpData);
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
        <h1 className="text-4xl mt-5">SignUp</h1>
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
                value={signUpData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border-0 text-2xl"
                reqired
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
                value={signUpData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border-0 text-2xl"
                required
              />
            </div>

            <hr className="mx-15 mb-10" />

            <div className="mt-5 flex items-center mx-10 gap-2">
              <label htmlFor="confirmpassword">
                <RiLockPasswordLine className="text-2xl mt-1" />
              </label>
              <input
                type="confirmpassword"
                name="confirmpassword"
                id="confirmpassword"
                value={signUpData.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your confirm password"
                className="border-0 text-2xl"
                reqired
              />
            </div>

            <hr className="mx-15 mb-10" />
            <button
              className="border py-2 px-5 my-3 rounded-2xl bg-blue-400"
              type="submit"
            >
              SignUp
            </button>
          </form>
        </div>
        <div>
          Aldready have an account?
          <Link to={"/login"} className="text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
