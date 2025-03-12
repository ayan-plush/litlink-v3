import React from 'react'
import { FaList } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({showSidebar, setShowSidebar}) => {
  const { role, userInfo } = useSelector(state=>state.auth)
  const img = userInfo.image
  const name = userInfo.name
  return (
    <div className='fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40'>
      <div className='ml-0  rounded-lg h-[65px] flex justify-between items-center text-[#dfcfb0] bg-[#312C23] px-5 transition-all'>
        <div onClick={()=> setShowSidebar(!showSidebar)} className='w-[35px] flex lg:hidden bg-[#4a4335] h-[35px] rounded-sm shadow-sm hover:shadow-[#312c23a5] justify-center items-center cursor-pointer  '>
          <span><FaList/></span>

        </div>
        <div className='hidden md:flex justify-between '>
        <Link className='flex items-center' to='/'> <img className='h-[30px]' src="https://litlink-frontend.onrender.com/images/LitLinkLogoLight.png" alt="" /> </Link>

        </div>
        <div className='hidden md:flex  '>
        
        <ul className='flex justify-start  items-start gap-8 font-light uppercase text-md max-md-lg:hidden' >
                            <li><Link to="/" className={` text-[2vh]`} >HOME</Link></li>
                            <li><Link to="/library" className={` text-[2vh]`}>LIBRARY</Link></li>
                            <li><Link to="/aboutus" className={` text-[2vh]`}>OUR PURPOSE</Link></li>
                            <li><Link to="/fordev" className={` text-[2vh]`}>FOR DEVS</Link></li>
                            {/* <li><Link to="/contactus" className={` text-[2vh]`}>CONTACT US</Link></li> */}
                        </ul>
          {/* <input className=' autofill:shadow-[inset_0_0_0px_1000px_rgb(160,150,130)] px-3 py-2 outline-none border bg-transparent border-[#00000094] rounded-3xl text-black focus:border-[#000000b5] overflow-auto placeholder-[#00000094]' type='text' name='search'  placeholder='search'/> */}
        </div>

        <div className='flex justify-end items-center gap-8 relative'>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className='flex justify-center items-center flex-col text-end '>
                <h2 className='text-md font-medium'>{name}</h2>
                <span className='text-[14px] w-full font-normal uppercase'>{role}</span>
              </div>
              <img className='w-[45px] h-[45px] rounded-full object-cover overflow-hidden' src={userInfo.image} alt="" />
            </div>

          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Header
