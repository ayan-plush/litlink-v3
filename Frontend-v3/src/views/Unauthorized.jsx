import React, { useState } from 'react'

const Unauthorized = () => {
    const [showSidebar,setShowSidebar] = useState(false)
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src="http://localhost:5173/images/unauthorized.png" alt="" />
    </div>
  )
}

export default Unauthorized
