import React from 'react'
import logoImage from "../assets/logoImage.jpg"
import {Link} from "react-router-dom"

const Header = () => {
  return (
   <>
   <div className='bg-(--primary) px-4 py-2 flex justify-baseline items-center'>
    <Link to={"/"}>
    <img src={logoImage} alt="Logo" className='h-12 w-20 ' />
    </Link>

    <div>
        <Link></Link>
    </div>
   </div>
   </>
  )
}

export default Header