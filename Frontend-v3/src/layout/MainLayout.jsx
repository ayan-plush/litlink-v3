import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import SideBar from './SideBar';
import { RingLoader } from 'react-spinners';

function MainLayout() {

  const [showSidebar,setShowSidebar] = useState(false)
  
  const [loading, setLoading] = useState(true);
  
      setTimeout(()=>{
        setLoading(false)
      },3000)

  
  return (
    <div className='bg-[#9f9279] bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")]  w-full min-h-screen '>
      <div className={`${loading?'':'hidden'} w-screen h-screen flex items-center justify-center z-[999]  fixed bg-[#352217] `}>
                      <RingLoader className='' color='#FBF1D7' />
      </div>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all  '><Outlet/></div>
      
    </div>
  )
}

export default MainLayout
