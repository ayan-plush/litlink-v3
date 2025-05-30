import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdEmail, MdPhone } from "react-icons/md";
import { FaHeart, FaInstagram, FaList, FaLock, FaShoppingCart, FaTwitter, FaUser, FaWordpress } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PropagateLoader } from 'react-spinners'


const Header = () => {
    const {pathname} = useLocation()
    const user = true
    const [showSidebar,setShowSidebar] = useState(false)
    const [categoryShow,setCategoryShow] = useState(false)
    const [searchValue,setSearchValue] = useState('')
    const [category,setCategory] = useState('')
    const loader = false
    const wishlist_count = 4
    const categories = [
        'fantasy',
        'fiction',
        'horror',
        'hindi-lit',
        'classics',
        'poetry',
        'theory'
    ]
  return (
    <div className=" ">
      <div className="header-top bg-[#312C23] max-md-lg:hidden  text-[#fff2df] ">  
        <div className='w-[85%] max-lg:w-[90%] mx-auto'>
            <div className='flex w-full justify-between items-center h-[50px]'>
                <ul className='flex justify-start items-center font-medium gap-8 '>
                    <li className='flex relative justify-center items-center gap-3 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#9f92798d] after:-right-[16px]'>
                        <span><MdEmail /></span>
                        <span>supportmail@gmail.com</span>
                    </li>
                    <li className='flex relative justify-center items-center gap-3 text-sm '>
                        <span><MdPhone /></span>
                        <span>+9196xxxxxxxx</span>
                    </li>

                </ul>
                <div className='flex justify-start items-centerfont-medium gap-10 '>
                    <div className='flex  justify-center relative  items-center gap-4 text-md after:absolute after:h-[18px] after:w-[1px] after:bg-[#9f92798d] after:-right-[16px]'>
                        <a href='#'><FaInstagram /></a>
                        <a href='#'><FaTwitter /></a>
                        <a href='#'><FaWordpress /></a>
                    </div>
                    <div className='flex group cursor-pointer justify-center items-center gap-3 text-sm '>
                        {
                            user ? <Link to='/dashboard' className='flex justify-center items-center gap-2 text-sm'><span><FaUser/></span><span>Ayan</span></Link> 
                            : <Link to='/login' className='flex justify-center items-center gap-2 text-sm'>
                            <span>Sign In</span></Link>
                        }
                    </div>

                </div>

            </div>
        
        </div> 
      </div>
      {/* div part 1 */}
      <div className="header-top z-30 ">
        <div className='px-5'>
            <div className='h-[80px] max-md-lg:h-[100px] overflow-hidden flex justify-between items-center flex-wrap'>
                <div className='max-md-lg:w-full w-3/12  '>
                    <div className='flex justify-between items-center'>
                        <Link className='flex items-center ' to='/'> <img className='h-[40px]' src="https://litlink-frontend.onrender.com/images/LitLinkLogo.png" alt="" /> </Link>
            
                        <div onClick={() => setShowSidebar(true)} className=' justify-center items-center h-[30px] w-[30px] border border-[#312C23] rounded-sm cursor-pointer lg:hidden md-lg:hidden max-md-lg:flex xl:hidden'>
                            <span><FaList/></span>
                        </div>
                    </div>               
                </div>

                <div className=' max-md-lg:hidden max-md:lg:w-full w-9/12'>
                    <div className=' text-[#47382B] max-md-lg:justify-center font-medium flex pl-8 justify-between items-center'>
                        <ul className='flex justify-start items-start gap-8 font-medium uppercase text-md max-md-lg:hidden' >
                            <li><Link to="/" className={`${pathname === '/' ? 'text-[#ffe5be]': ''} text-[2vh]`} >HOME</Link></li>
                            <li><Link to="/library" className={`${pathname === '/library' ? 'text-[#ffe5be]': ''} text-[2vh]`}>LIBRARY</Link></li>
                            <li><Link to="/aboutus" className={`${pathname === '/aboutus' ? 'text-[#ffe5be]': ''} text-[2vh]`}>OUR PURPOSE</Link></li>
                            <li><Link to="/fordev" className={`${pathname === '/fordev' ? 'text-[#ffe5be]': ''} text-[2vh]`}>FOR DEVS</Link></li>
                            <li><Link to="/contactus" className={`${pathname === '/contactus' ? 'text-[#ffe5be]': ''} text-[2vh]`}>CONTACT US</Link></li>
                        </ul>
                        <div className='flex max-md-lg:hidden justify-center items-center gap-5'>
                            <div className='flex justify-center w-[50px] gap-5'>
                                <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#312C23]'>
                                    <span className='text-[#ffe5be]'><FaHeart/></span>
                                    <div className='bg-indigo-500 w-[20px] h-[20px] absolute rounded-full text-xs font-extralight text-white flex justify-center items-center -top-[3px] -right-[5px]'>{wishlist_count}</div>
                                </div>                                
                            </div>
                            <div className='flex justify-center w-[50px] gap-5'>
                                <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#312C23]'>
                                    <span className='text-[#ffe5be]'><FaShoppingCart/></span>
                                    <div className='bg-indigo-500 w-[20px] h-[20px] absolute rounded-full text-xs font-extralight text-white flex justify-center items-center -top-[3px] -right-[5px]'>{wishlist_count}</div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        {/* <Link to="/" className="text-[2vh] ">HOME</Link>
        <Link to="/aboutus" className="text-[2vh] ">OUR PURPOSE</Link>
        <Link to="/register" className="text-[2vh] ">SIGN UP</Link>
        <Link to="/login" className="text-[2vh] ">lOG IN</Link> */}
        </div>
      </div>
      {/* div part 2 */}
      <div className=' relative md-lg:block'>
        <div onClick={()=> setShowSidebar(false)} className={`fixed duration-200 transition-all ${showSidebar? 'visible':'invisible'} md-lg:hidden max-md-lg:block w-screen h-screen top-0 z-20 left-0 bg-[#312c2398]`}>
        </div>
        <div className={`w-[300px] z-[9999] transition-all duration-200 fixed ${!showSidebar?'-left-[300px]':'left-0 top-0 overflow-auto h-screen py-6 px-8 bg-[#312C23] md-lg:hidden '}`}>
                <div className='flex justify-start text-[#fff3e276] flex-col gap-6 '>
                <Link className='flex items-center ' to='/'> <img className='h-[40px]' src="https://litlink-frontend.onrender.com/images/LitLinkLogoLight.png" alt="" /> </Link>  
                <div className='flex group cursor-pointer justify-start items-center gap-3 font-extralight tracking-tighter text-[2vh] uppercase '>
                        {
                            user ? <Link to='/dashboard' className='flex justify-center items-center gap-2 '><span className='text-[9px]'><FaUser/></span><span>Ayan</span></Link> 
                            : <Link to='/login' className='flex justify-center items-center gap-2 '>
                            <span>Sign In</span></Link>
                        }
                </div>
                <div className='flex  justify-start items-center gap-4 text-md '>
                        <a href='#'><FaInstagram /></a>
                        <a href='#'><FaTwitter /></a>
                        <a href='#'><FaWordpress /></a>
                </div>              
                </div>

                        <ul className='flex-col mt-5 flex text-[white] justify-start items-start gap-8 font-light uppercase text-xl' >
                            <li><Link to="/" className={`${pathname === '/' ? 'text-[#ffe5be]': ''} text-[2vh] py-2`} >HOME</Link></li>
                            <li><Link to="/library" className={`${pathname === '/library' ? 'text-[#ffe5be]': ''} text-[2vh] py-2`}>LIBRARY</Link></li>
                            <li><Link to="/aboutus" className={`${pathname === '/aboutus' ? 'text-[#ffe5be]': ''} text-[2vh] py-2`}>OUR PURPOSE</Link></li>
                            <li><Link to="/fordev" className={`${pathname === '/fordev' ? 'text-[#ffe5be]': ''} text-[2vh] py-2`}>FOR DEVS</Link></li>
                            <li><Link to="/contactus" className={`${pathname === '/contactus' ? 'text-[#ffe5be]': ''} text-[2vh] py-2`}>CONTACT US</Link></li>
                        </ul>

                        <div className='flex justify-start pt-8 items-center'>
                            <div className='flex justify-start w-[40px] gap-5'>
                                <div className='relative flex justify-center items-center cursor-pointer w-[25px] h-[25px] rounded-full bg-[#ffe5be] '>
                                    <span className='text-[#312C23]'><FaHeart/></span>
                                    <div className='bg-indigo-500 w-[15px] h-[15px] absolute rounded-full text-xs font-extralight text-white flex justify-center items-center -top-[3px] -right-[5px]'>{wishlist_count}</div>
                                </div>                                
                            </div>
                            <div className='flex justify-start w-[40px] gap-5'>
                                <div className='relative flex justify-center items-center cursor-pointer w-[25px] h-[25px] rounded-full bg-[#ffe5be] '>
                                    <span className='text-[#312C23]]'><FaShoppingCart/></span>
                                    <div className='bg-indigo-500 w-[15px] h-[15px] absolute rounded-full text-xs font-extralight text-white flex justify-center items-center -top-[3px] -right-[5px]'>{wishlist_count}</div>
                                </div>                                
                            </div>
                        </div>
                        <div className='flex justify-end w-full'>
                        <li className='flex text-[#fff3e276] absolute bottom-10 justify-end items-center gap-2 text-sm '>
                        <span><MdEmail /></span>
                        <span>support@gmail.com</span>
                        </li>
                        </div>
                    


                    
                
            </div>

      </div>
      {/* div part 3 */}
      <div className='w-[85%] max-lg:w-[90%] mx-auto'>
        <div className='flex max-md-lg:flex-wrap w-full justify-center '>
            <div className='w-2/12  max-md-lg:w-full'>
            <div className='relative'>
                <div onClick={()=> setCategoryShow(!categoryShow)} className={`h-[50px] ${categoryShow?'':'rounded-b-md'} rounded-t-md bg-[#312C23] px-3 text-[#fff2df] flex justify-center max-md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer`}>
                    <div className='flex justify-center items-center gap-3 '>
                        <span><FaList/></span>
                        <span>Genres</span>
                    </div>
                    <span className='pt-1'><IoIosArrowDown/></span>
                </div>

                <div className={`${categoryShow? 'h-[200px]':'h-0'} rounded-b-md overflow-hidden transition-all overflow-y-scroll  duration-500 absolute z-[99999] bg-slate-900 w-full border-x`}>
                    <ul className='py-2 text-white uppercase font-extralight '>
                        {
                            categories.map((c,i)=> {
                                return (
                                    <li key={i} className='flex  justify-start items-center gap-2 px-[24px] py-[6px]'>
                                        <Link>{c}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

            </div>

            <div className='w-10/12 md-lg:pl-8 max-md-lg:pl-0 max-md-lg:w-full'>
                <div className='flex flex-wrap w-full justify-between items-center md-lg:gap-6'>
                    <div className='w-8/12  max-md-lg:w-full'>
                        <div className='flex h-[50px] items-center relative gap-6'>
                                <select onChange={(e)=> setCategory(e.target.value)} className='md:px-4 max-md-lg:w-[30%]  py-2 focus:border-[#312c2360] overflow-y-scroll outline-none bg-transparent text-[#312C23]  border border-[#312c2360] rounded-md' name="" id="">
                                    <option className='bg-[#312C23] text-[#fff2df]' value="">Genre</option>
                                    {
                                        categories.map((c,i)=> <option className='bg-[#312C23] text-[#fff2df]' value={c}>{c}</option>)
                                    }
                                </select>
                          
                            <input onChange={(e)=> setSearchValue(e.target.value)} value={searchValue} className=' w-full  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#312c2360] rounded-md text-[#312C23] focus:border-[#312c239a] overflow-auto placeholder-[#312c2360]' type='text' name='search'  placeholder='search'/>
                            <button disabled={loader ? true : false} className=' max-md-lg:w-[30%] px-3 bg-[#312C23] hover:border-[#312C23] border border-[#9f9279] text-[#fff2df] md:px-7 py-2 rounded-md'>
                        {
                            loader ? <PropagateLoader color='white'  /> : 'search'
                        }
                        
                        </button>

                        </div>
                    </div>
                </div>

            </div>

        </div>

      </div>

    </div>
  )
}

export default Header
