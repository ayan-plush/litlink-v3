import React, { useState } from 'react'

const Unauthorized = () => {
    const [showSidebar,setShowSidebar] = useState(false)
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src="https://litlink-frontend.onrender.com/images/unauthorized.png" alt="" />
    </div>
  )
}

export default Unauthorized
