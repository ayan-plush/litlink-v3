import React from 'react'
import { Link } from 'react-router-dom'

const End = () => {
  return (
    <div className=" bg-[#47382B] bg-opacity-75 w-full h-[20vh]">
      <div className='flex items-center w-full h-[10vh]'><Link to='https://www.instagram.com/sahitya_dtu/?hl=en' className="w-full text-[#9d896c]  text-[2vh] text-right	font-light underline tracking-widest px-[3vh]   "> INSTAGRAM </Link></div>
      <div className='border border-opacity-20 border-[#C8B591]'></div>
      <div className='text-[#9d896c]  text-[2vh] text-right	font-light tracking-widest px-[3vh] pt-[2vh]'>@Sahitya Book Club 2024<br></br> Website by <a href='https://www.linkedin.com/in/ayan-khajuria-46904b275/' className='underline'>Ayan</a></div>
      
    </div>
  )
}

export default End
