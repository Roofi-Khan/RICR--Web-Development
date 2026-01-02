import React, { useState } from "react";
import CountryData from "../assets/CountyData.json";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt,setFromAmt]=useState("");
  const [toAmt,setToAmt]=useState("");
 
  const Convert=()=>{
    if(!from||!to||!fromAmt){
        toast.error("Some Fields Missing")
    }
  }
  return (
    <>
      <div className="bg-amber-50 h-screen p-5">
        <div className="w-3xl bg-white rounded shadow border p-3 mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex gap-3 border rounded p-3">
              {from && (
                <img
                  src={`https://flagsapi.com/${from.split(" ")[1]}/flat/48.png`}
                />
              )}
              <select
                name="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="p-3 overflow-hidden w-full focus:outline-none"
              >
                <option value="">--Select Country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 border rounded p-3">
              {to && (
                <img
                  src={`https://flagsapi.com/${to.split(" ")[1]}/flat/48.png`}
                />
              )}
              <select
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="p-3 overflow-hidden w-full focus:outline-none"
              >
                <option value="">--Select Country--</option>
                {CountryData.map((country, idx) => (
                  <option
                    value={country.CurrencyCode + " " + country.CountryCode}
                    key={idx}
                  >
                    {country.CountryName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="fromAmt">Amount</label>
            <input
              type="text"
              name="fromAmt"
              placeholder="Enter the Amount to Convert"
              className="border rounded p-3 w-full"
            />
          </div>
          <button
            className="bg-green-500 text-green-900 hover:bg-green-600 hover:text-white px-4 py-2 border rounded hover:shadow-md"
            onClick={Convert}
          >
            Convert
          </button>
          <div className="border"/>

          <div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
