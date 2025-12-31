import React from "react";

const Registration = () => {
  return (
    <>
      <header className="bg-blue-950 text-white text-4xl text-center py-3">
        <h1>Registration Form</h1>
      </header>
      <main className="mx-100 border ">
        <div className="border rounded-2xl shadow p-3 mt-10 mx-10 relative">
          <span className="px-2 text-2xl text-blue-400  bg-white -top-6 absolute">
            Personal Information
          </span>
          <div className="grid gap-3">
            <div className="flex align-middle">
              <label htmlFor="fullName" className="">
                Full Name: <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="mx-5 border"
                required
              />
            </div>

            <div className="flex align-middle">
              <label htmlFor="gender">
                Gender: <sup className="text-red-500">*</sup>
              </label>
              <input
                type="radio"
                name="gender"
                id="genderMale"
                value="Male"
                className="mx-5"
              />
              <span>Male</span>
              <input
                type="radio"
                name="gender"
                id="genderFemale"
                value="Female"
                className="mx-5"
              />
              <span>Female</span>
            </div>

            <div className="flex align-middle">
              <label htmlFor="email">
                Email:<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="mx-5 border"
              />
            </div>
            <div className="flex align-middle">
              <label htmlFor="number">
                Mobile Number:<sup className="text-red-500">*</sup>
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="mx-5 border"
                required
              />
            </div>
            <div className="flex align-middle">
              <label htmlFor="dob" >
                Date of Birth:<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="dob"
                id="dob"
                className="mx-5 border"
                required
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
              <label htmlFor="qualification" 
                >Qualification: <sup className="text-red-500">*</sup></label
              >
              <select
                name="qualification"
                id="qualification"
                className="mx-5 border"
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
              <label htmlFor="score" class="form-label w-25"
                >Percentage / Grade : <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="score"
                id="score"
                className="mx-5 border"
                required
              />
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Registration;
