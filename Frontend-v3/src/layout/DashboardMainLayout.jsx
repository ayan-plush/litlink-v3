import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardMainLayout = () => {
  return (
    <div className='bg-[#9f9279] bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")]  w-full min-h-screen '>
            <div className='-[95px] transition-all  '><Outlet/></div>

    </div>
  )
}

export default DashboardMainLayout
