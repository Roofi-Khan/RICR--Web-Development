import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <div style={{display:"flex", justifyContent:"space-evenly"}}>
     <ul style={{display:"flex",gap:"10px", justifyContent:"space-evenly"}}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>

    </ul>
   </div>
    </>
  )
}

export default Navbar