import React, { use, useState } from "react";
import toast from "react-hot-toast";

const Registration = () => {
  const [RegistrationData, setRegistrationData] = useState({
    fullName: "",
    gender: "",
    email: "",
    number: "",
    dob: "",
    qualification: "",
    score: "",
    address: "",
    city: "",
    pinCode: "",
    guardianName: "",
    guardianNumber: "",
    coachingInfo: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError,setValidationError]=useState({})

  const handleClearForm = () => {
    setRegistrationData({
      fullName: "",
      gender: "",
      email: "",
      number: "",
      dob: "",
      qualification: "",
      score: "",
      address: "",
      city: "",
      pinCode: "",
      guardianName: "",
      guardianNumber: "",
      coachingInfo: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((previousData) => ({ ...previousData, [name]: value }));
  };

  const validate=()=>{
    let Error={}

    if(RegistrationData.fullName.length<3){
      Error.fullName="Name should be more than 3 characters";
    }else{
      if(!/^[A-Za-z ]+$/.test(RegistrationData.fullName)){
        Error.fullName="Only Contain A-Z,a-z and space";
      }
    }

    if(!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(RegistrationData.email)){
      Error.email="Use Proper Email Format";
    }


    if(!/^[6-9]\d{9}$/.test(RegistrationData.number)){
      Error.number="Only Indian Mobile Number allowed";
    }

    setValidationError(Error);
    return Object.keys(Error).length >0 ? false : true;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if(!validate()){
      setIsLoading(false);
      toast.error("Fill the Form Correctly");
      return;
    }
    try {
      console.log(RegistrationData);
      toast.success("Registration Successfull");
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
     
      <main className="mx-20 border my-20 pb-15">
        <form onSubmit={handleSubmit} onReset={handleClearForm}>

          <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
          <span className="px-2 text-2xl text-blue-400  bg-white -top-6 absolute">
            Personal Information
          </span>
          <div className="grid gap-3">
            <div className="flex align-middle">
              <label htmlFor="fullName" className="w-60">
                Full Name: <sup className="text-red-500">*</sup>
              </label>
              <div>
                <input
                type="text"
                name="fullName"
                id="fullName"
                value={RegistrationData.fullName}
                onChange={handleChange}
                className="mx-5 border w-4xl focus:outline-none focus:border-indigo-500 rounded"
                required
                
              />
              {validationError.fullName && (<div className="text-xs text-red-500">{validationError.fullName}</div>)}
              </div>
            </div>

            <div className="flex align-middle">
              <label htmlFor="gender" className="w-60">
                Gender: <sup className="text-red-500">*</sup>
              </label>
              <input
                type="radio"
                name="gender"
                onChange={handleChange}
                value="male"
                className="mx-5 "
                checked={RegistrationData.gender ==="male"}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                className="mx-5"
                onChange={handleChange}
                checked={RegistrationData.gender ==="female"}
              />{" "}
              Female
            </div>

            <div className="flex align-middle">
              <label htmlFor="email" className="w-60">
                Email:<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="mx-5 border w-4xl"
                value={RegistrationData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex align-middle">
              <label htmlFor="number" className="w-60">
                Mobile Number:<sup className="text-red-500">*</sup>
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="mx-5 border w-4xl"
                required
                value={RegistrationData.number}
                onChange={handleChange}
              />
            </div>
            <div className="flex align-middle">
              <label htmlFor="dob" className="w-60">
                Date of Birth:<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="dob"
                id="dob"
                className="mx-5 border w-4xl"
                required
                value={RegistrationData.dob}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
          <span className="px-2 text-2xl text-blue-400  bg-white -top-6 absolute">
            Academic Details
          </span>

          <div className="grid gap-3">
            <div className="flex align-middle">
              <label htmlFor="qualification" className="w-60">
                Qualification: <sup className="text-red-500">*</sup>
              </label>
              <select
                name="qualification"
                id="qualification"
                className="mx-5 border w-4xl"
                onChange={handleChange}
              >
                <option value="">--Select Qualification</option>
                <option value="10">Secondary Schooling</option>
                <option value="12">Senior Secondary Schooling</option>
                <option value="UG">Graduation</option>
                <option value="PG">Post Graduation</option>
                <option value="PHD">P.hd</option>
              </select>
            </div>
            <div className="flex align-middle">
              <label htmlFor="score" className="w-60">
                Percentage / Grade : <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="score"
                id="score"
                className="mx-5 border w-4xl"
                required
                value={RegistrationData.score}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
          <span className="px-2 text-2xl text-blue-400  bg-white -top-6 absolute">
            Address
          </span>

          <div className="grid gap-3">
            <div className="flex align-middle">
              <label htmlFor="address" className="w-60">
                Residential Address: <sup className="text-red-500">*</sup>
              </label>
              <textarea
                name="address"
                id="address"
                placeholder="House No,street, Locality"
                className="mx-5 border w-4xl"
                value={RegistrationData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex align-middle">
              <label htmlFor="city" className="w-60">
                City:<sup cclassName="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="mx-5 border w-4xl"
                required
                value={RegistrationData.city}
                onChange={handleChange}
              />
            </div>
            <div className="flex align-middle">
              <label htmlFor="pinCode" className="w-60">
                Mobile Number:<sup className="text-red-500">*</sup>
              </label>
              <input
                type="tel"
                name="pinCode"
                id="pinCode"
                className="mx-5 border w-4xl"
                required
                value={RegistrationData.pinCode}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
          <span className="px-2 text-2xl text-blue-400  bg-white -top-6 absolute">
            Guardian Details
          </span>

          <div className="grid gap-3">
            <div className="flex align-middle">
              <label htmlFor="guardianName" className="w-60">
                Guardian's Full Name: <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="guardianName"
                id="guardianName"
                className="mx-5 border w-4xl"
                required
                value={RegistrationData.guardianName}
                onChange={handleChange}
              />
            </div>
            <div className="flex align-middle">
              <label htmlFor="guardianNumber" className="w-60">
                Guardian's Contact Number:<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="guardianNumber"
                id="guardianNumber"
                className="mx-5 border w-4xl"
                required
                value={RegistrationData.guardianNumber}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
          <span className="px-2 text-2xl text-blue-400  bg-white -top-6 absolute">
            Address
          </span>

          <div className="grid gap-3">
            <div className="flex align-middle">
              <label htmlFor="coachingInfo" className="w-60">
                How did you hear about us?:
                <sup className="text-red-500">*</sup>
              </label>
              <select
                name="coachingInfo"
                id="coachingInfo"
                className="mx-5 border w-4xl"
                required
                onChange={handleChange}
              >
                <option value="">--Select</option>
                <option value="friends">Friends</option>
                <option value="ads">Online Ads</option>
                <option value="newspaper">Newspaper</option>
                <option value="socialMedia">Social Media</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-center text-white mt-10">
          <button className="border bg-blue-950 rounded-2xl py-2 px-5" type="submit">
            Submit
          </button>
        </div>
        </form>
      </main>
    </>
  );
};

export default Registration;
