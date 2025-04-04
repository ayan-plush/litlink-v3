import React, { useState } from 'react'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Pending = () => {
    const [showSidebar,setShowSidebar] = useState(false)
    const navigate = useNavigate()
  
  return (
    <div className='px-2 lg:px-7 pt-5'>
      <div className='bg-[#312C23] flex justify-center items-center h-[300px] md:h-[500px] rounded-md p-4'>
        <div className='flex flex-col  justify-center items-center'>
          <MdOutlineSupportAgent className='text-[#fff2dfe2] h-[100px] w-[100px]' />
          <span onClick={()=>navigate('/seller/dashboard/chat-support/6783289d783b7c77461edb7e')}  className='text-[#fff2df] hover:cursor-pointer font-extralight text-md md:text-3xl pt-5'>Contact Support to get Approved!!</span>
        </div>
      
      </div>
    </div>
  )
}

export default Pending
