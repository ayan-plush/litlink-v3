import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
import SideBar from './SideBar';
import { RingLoader } from 'react-spinners';
import Footer from '../components/Footer';

function MainLayout() {

  const [showSidebar,setShowSidebar] = useState(false)
  
  const [loading, setLoading] = useState(true);
  
      setTimeout(()=>{
        setLoading(false)
      },3000)

  
  return (
    <div className='bg-[#C3B18D]   w-full  min-h-screen '>
      <div className={`${loading?'':'hidden'} w-screen h-screen flex items-center justify-center z-[999]  fixed bg-[#352217] `}>
                      <RingLoader className='' color='#FBF1D7' />
      </div>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all pb-[30px] '><Outlet/> </div>
      
    </div>
  )
}

export default MainLayout
