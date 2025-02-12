import React from 'react'
import { Link } from 'react-router-dom';

const Landing=()=> {
  return (
    <div className='pt-[5vh] '>
      <Link to="/register" className="text-[10vh] text-[#47382B] flex justify-center tracking-tight font-[impacted] font-bold ">
      <img src='http://localhost:5173/images/JOINUS.png' className='h-[9.75vh] border-b-[0.1vh] border-b-[#47362D] w-[28.5vh]'/>
      </Link>
      <div className="flex justify-center font-bold text-[#907e5a] text-[1.5vh] uppercase tracking-tighter ">connect. read. converse.</div>
      <div className=' flex justify-center'>
        <img src='http://localhost:5173/images/theeye1.png' className='h-[40vh] w-[40vh]'/>
      </div> 
    </div>
  )
}

export default Landing
