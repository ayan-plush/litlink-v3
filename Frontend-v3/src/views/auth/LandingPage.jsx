import React from 'react'
import LandingNavbar from '../LandingNavbar'
import Landing from '../Landing'
import Marquee from '../Marquee'
import End from '../End'

const LandingPage = () => {
  return (
    <div className='bg-[#9f9279] bg-cover bg-center bg-[url("http://localhost:5173/images/paperbg.jpg")] overflow-hidden w-full min-h-screen '>
      <LandingNavbar/>
      <Landing/>
      <Marquee/>
      <End/>
    </div>
  )
}

export default LandingPage
