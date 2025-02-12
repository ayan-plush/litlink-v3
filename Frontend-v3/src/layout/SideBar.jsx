import React, { useEffect, useState } from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { getNav } from '../navigation'
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/Reducers/authReducer';


const SideBar =({showSidebar, setShowSidebar})=> {

  const dispatch = useDispatch()
  const {role} = useSelector(state=>state.auth)
  const {pathname} = useLocation()
  const navigate = useNavigate()

   const [allNav,setAllNav] = useState([])
   useEffect(()=>{
    const navs = getNav(role)
    setAllNav(navs)

   },[role])
  




  return (
    <div>
      <div onClick={()=> setShowSidebar(false)} className={` fixed flex duration-200 ${!showSidebar ? 'invisible':'visible'} w-screen h-screen top-0 left-0 z-10`}>
        
      </div>

      <div>
        <div className={`w-[260px] border-[#857A65] border-2 fixed bg-[#312C23] rounded-tr-2xl z-50 top-25 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar?'left-0':'-left-[260px] lg:left-0'}`}>
        <div className='h-[50px]'></div>
        {/* <div className='h-[200px] flex justify-center items-center'>
          <Link to='/' className='w-[180px] h-[180px] overflow-hidden'>
          <img className='w-full h-full 'src="http://localhost:5173/images/theeye1.png" alt=""/>          
          </Link>

        </div> */}

        <div className='px-[16px]'>
          <ul>
            {
              allNav.map((n,i)=>
              <li key={i} >
                <Link to={n.path} className={`${pathname === n.path ? ' font-light bg-[#857A65] text-[#312C23] duration-500' : 'font-light duration-200 text-[#dfcfb0]' } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}>
                <span>{n.icon}</span>
                <span>{n.title}</span>
                </Link>
              </li>)
            }

            <li>
              <button onClick={()=>dispatch(logout({navigate,role}))} className='font-light cursor-pointer duration-200 text-[#dfcfb0] px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1'>
                <span><BiLogOutCircle /></span>
                <span>Log Out</span>
              </button>
            </li>
          </ul>

        </div>

        </div>
      </div>
    </div>
  )
}

export default SideBar
