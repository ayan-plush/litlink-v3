import React from 'react'
import { Link } from 'react-router-dom'

const LandingNavbar=()=> {
  return (
    <div>
      <div className="  h-[7vh] w-full px-[5vw] py-[3vh]  text-[#47382B] font-medium flex justify-between items-center">
      
    <Link to="/" className="text-[2vh] ">HOME</Link>
    <Link to="/aboutus" className="text-[2vh] ">OUR PURPOSE</Link>
    <Link to="/register" className="text-[2vh] ">SIGN UP</Link>
    <Link to="/login" className="text-[2vh] ">lOG IN</Link>

      
    </div>
    </div>
  )
}

export default LandingNavbar
