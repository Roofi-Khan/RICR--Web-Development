import React from "react";

const Login = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="bold text-4xl pt-10">Login Here</h1>
            <span>Let's Begin</span>
          </div>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-fit py-3 px-3  border-2 border-gray-300 rounded-lg focus:outline-none  focus:border-(--secondary-focus) transition disabled:cursor-not-allowed disabled:bg-gray-300"
                  placeholder="Enter your Registered Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full h-fit py-3 px-3  border-2 border-gray-300 rounded-lg focus:outline-none  focus:border-(--secondary-focus) transition disabled:cursor-not-allowed disabled:bg-gray-300"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
