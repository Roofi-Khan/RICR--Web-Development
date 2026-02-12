import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    cfPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      password: "",
      cfPassword: "",
    });
  };

  const validate = () => {
    console.log("Form Validation started successfully")
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be more than 3 characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only contain A-z,a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email,
      )
    ) {
      Error.email = "Use proper email format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      Error.mobile = "Only Indian mobile number allowed";
    }
    if (formData.password !== formData.cfPassword) {
      toast.error("Password doesn't match");
      handleClearForm();
    }
    setValidationError(Error);
    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the form correctly");
      return;
    }
    try {
        console.log("Form try catch successfully")
                   
      //   const res = await api.post("auth/register", formData);
      console.log(formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error("Fill the form Correctly");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Register Now
            </h1>
            <p>Your 1 Step towards Success</p>
          </div>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <form onSubmit={handleSubmit} onReset={handleClearForm}>
              <div className="pt-3">
                <div className="space-y-4 px-5 m-3">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      placeholder="Enter your full name"
                      disabled={isLoading}
                      onChange={handleChange}
                       required
                      className="w-full h-fit py-3 px-3  border-2 border-gray-300 rounded-lg focus:outline-none  focus:border-(--secondary-focus) transition disabled:cursor-not-allowed disabled:bg-gray-300"
                    />
                    {validationError.fullName && (
                      <span className="text-xs text-red-500">
                        {validationError.fullName}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      placeholder="Enter your Email"
                      disabled={isLoading}
                      onChange={handleChange}
                       required
                      className="w-full h-fit py-3 px-3  border-2 border-gray-300 rounded-lg focus:outline-none  focus:border-(--secondary-focus) transition disabled:cursor-not-allowed disabled:bg-gray-300"
                    />
                    {validationError.email && (
                      <span className="text-xs text-red-500">
                        {validationError.email}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      maxLength="10"
                      value={formData.mobile}
                      placeholder="Enter your Mobile Number"
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                      className="w-full h-fit py-3 px-3  border-2 border-gray-300 rounded-lg focus:outline-none  focus:border-(--secondary-focus) transition disabled:cursor-not-allowed disabled:bg-gray-300"
                    />
                    {validationError.mobile && (
                      <span className="text-xs text-red-500">
                        {validationError.mobile}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      placeholder="Enter the password"
                      disabled={isLoading}
                      onChange={handleChange}
                       required
                      className="w-full h-fit py-3 px-3  border-2 border-gray-300 rounded-lg focus:outline-none  focus:border-(--secondary-focus) transition disabled:cursor-not-allowed disabled:bg-gray-300"
                    />
                    {validationError.password && (
                      <span className="text-xs text-red-500">
                        {validationError.password}
                      </span>
                    )}
                  </div>

                  <div>
                    <input
                      type="password"
                      name="cfPassword"
                      value={formData.cfPassword}
                      placeholder="Confirm your password"
                      disabled={isLoading}
                      onChange={handleChange}
                       required
                      className="w-full h-fit py-3 px-3  border-2 border-gray-300 rounded-lg focus:outline-none  focus:border-(--secondary-focus) transition disabled:cursor-not-allowed disabled:bg-gray-300"
                    />
                    {validationError.cfPassword && (
                      <span className="text-xs text-red-500">
                        {validationError.cfPassword}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      type="reset"
                      disabled={isLoading}
                      className="py-2 px-4 rounded-xl text-white font-semibold bg-linear-to-r from-(--secondary) to-(--secondary-focus) hover:from-(--secondary) hover:to-(--primary) transition duration-300 transform disabled:cursor-not-allowed disabled:scale-100"
                    >
                      Clear
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="py-2 px-4 rounded-xl text-white font-semibold bg-linear-to-r from-(--secondary) to-(--secondary-focus) hover:from-(--secondary) hover:to-(--primary) transition duration-300 transform disabled:cursor-not-allowed disabled:scale-100"
                    >
                      {isLoading ? "Submitting" : "Submit"}
                    </button>
                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
