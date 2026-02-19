import React from 'react'
import jobportal from "../assets/jobportal.webp"

const Home = () => {
   return (
    <div className="relative h-screen">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${jobportal})` }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* text */}
      <div className="relative  items-center h-full">
        <h1 className="text-white text-5xl font-bold">
          Job Portal
        </h1>
        
        <p className="text-white text-3xl font-bold">First step toward success in your career</p>
      </div>

    </div>
  );
}

export default Home