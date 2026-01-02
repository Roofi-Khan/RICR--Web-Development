import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaEuroSign } from "react-icons/fa";
import { MdCurrencyPound } from "react-icons/md";
const Header = () => {
  return (
    <>
    <div className='bg-blue-500 px-4 text-white flex text-center py-2 justify-center items-center gap-2'>
        <FaRupeeSign className='animate-bounce'/>
        <AiFillDollarCircle className='animate-spin'/>
    <span className='text-3xl '>Currency Converter</span>
    <FaEuroSign className='animate-pulse'/>
    <MdCurrencyPound className='animate-ping'/>
    </div>
    </>
    
  )
}

export default Header