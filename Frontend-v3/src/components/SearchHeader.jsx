import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MdEmail, MdPhone } from "react-icons/md";
import { FaHeart, FaInstagram, FaList, FaLock, FaSearch, FaShoppingCart, FaTwitter, FaUser, FaWordpress } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PropagateLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux';


const SearchHeader = () => {
    
    const navigate = useNavigate()
    const {categories} = useSelector(state => state.home)
    const {pathname} = useLocation()
    const user = true
    const [showSidebar,setShowSidebar] = useState(false)
    const [categoryShow,setCategoryShow] = useState(false)
    const [searchValue,setSearchValue] = useState('')
    const [category,setCategory] = useState('')
    const loader = false
    const wishlist_count = 4
    
    const handleKeyPress = (e) => {
        if(e.key==='Enter'){
            navigate(`/products/search?category=${category}&&searchValue=${searchValue}`)
        }
      }

    const search = () => {
        
     navigate(`/products/search?category=${category}&&searchValue=${searchValue}`)
    }

  return (
    <div className=" flex justify-center ">

      <div className='w-[85%] max-lg:w-[90%] '>
        <div className='flex  max-md-lg:flex-wrap w-full justify-center '>
            <div className='w-2/12  max-md-lg:w-full'>
            <div className='relative py-1'>
                <div onClick={()=> setCategoryShow(!categoryShow)} className={`h-[44px] ${categoryShow?'':'rounded-b-md'} rounded-t-md bg-[#312C23] px-3 text-[#fff2df] flex justify-center max-md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer`}>
                    <div className='flex justify-center items-center gap-3 '>
                        <span><FaList/></span>
                        <span>Genres</span>
                    </div>
                    <span className='pt-1'><IoIosArrowDown/></span>
                </div>

                <div className={`${categoryShow? 'h-[200px]':'h-0'} rounded-b-md overflow-hidden transition-all overflow-y-scroll  duration-500 absolute z-[99999] bg-slate-900 w-full border-x`}>
                    <ul className='py-2 text-white uppercase font-extralight '>
                        {
                            categories?.map((c,i)=> {
                                return (
                                    <li key={i} className='flex  justify-start items-center gap-2 px-[24px] py-[6px]'>
                                        <img className='w-[30px] h-[30px] object-cover rounded-full' src={c.image} alt="" />
                                        <Link to={`/products?category=${c.name}`}>{c.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

            </div>

            <div className='w-10/12 md-lg:pl-8 max-md-lg:pl-0 max-md-lg:w-full'>
                <div className='flex flex-wrap w-full justify-between items-center  md-lg:gap-6'>
                    <div className=' w-10/12 max-md-lg:w-full'>
                        <div className='flex h-[50px] border rounded-md px-2 border-[#312c2360] items-center relative max-md-lg:gap-2 md-lg:gap-6'>
                                <select onChange={(e)=> setCategory(e.target.value)} className='md:px-4 max-md-lg:w-[30%]  py-2 focus:border-[#312c2360] overflow-y-scroll outline-none bg-transparent text-[#312C23] ' name="" id="">
                                    <option className='bg-[#312C23] text-[#fff2df]' value="">Genre</option>
                                    {
                                        categories?.map((c,i)=> <option  key={i} className='bg-[#312C23] text-[#fff2df]' value={c.name}>{c.name}</option>)
                                    }
                                </select>
                          
                            <input onKeyDown={handleKeyPress} onChange={(e)=> setSearchValue(e.target.value)} value={searchValue} className=' w-full  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border-x bg-transparent border-x-[#312c2360] text-[#312C23] focus:border-x-[#312c239a] overflow-auto placeholder-[#312c2360]' type='text' name='search'  placeholder='search'/>
                            <button  onClick={search} disabled={loader ? true : false} className=' max-md-lg:w-[10%] flex justify-center items-center bg-[#312C23] p-2 hover:border-[#312C23] border border-[#9f9279] text-[#fff2df] rounded-md'>
                        {
                            loader ? <PropagateLoader color='white'  /> : <FaSearch/>
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

export default SearchHeader
