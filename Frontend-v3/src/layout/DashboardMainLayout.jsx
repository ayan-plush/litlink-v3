import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardMainLayout = () => {
  return (
    <div className='bg-[#9f9279] bg-cover bg-center bg-[url("https://litlink-frontend.onrender.com/images/paperbg.jpg")]  w-full min-h-screen '>
            <div className='-[95px] transition-all  '><Outlet/></div>

    </div>
  )
}

export default DashboardMainLayout
