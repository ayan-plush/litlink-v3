import React, { useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';


const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5)
    const [show,setShow] = useState(false)


  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className="w-full bg-[#312C23] text-[#fff2df] p-4 rounded-md ">
            <div className="flex justify-between items-center">
                <select onChange={(e)=> setPerPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-[#fff2df73] outline-none bg-[#312C23] text-[#fff2df]  border border-[#fff2df23] rounded-md'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>

                </select>
                <input className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' type='text' name='search'  placeholder='search'/>

            </div>

            <div className="relative mt-5 overflow-x-auto">
                <div className="w-full text-sm text-left text-[#fff2df]">
                    <div className="text-lg font-[impacted] tracking-wide uppercase border-b-2  border-[#fff2df23]">
                        <div className="flex justify-between items-center">
                            <div className="py-3 w-[25%] font-light">Order Id</div>
                            <div className="py-3 w-[13%] font-light">Price</div>
                            <div className="py-3 w-[18%] font-light">Payment status</div>
                            <div className="py-3 w-[18%] font-light">Order Status</div>
                            <div className="py-3 w-[18%] font-light">Action</div>
                            <div className="py-3 w-[8%] font-light"><MdKeyboardArrowDown /></div>

                        </div>

                    </div>
                    <div className="">
                        <div className="flex justify-between font-[impacted] tracking-wide items-start border-b border-[#fff2df15]">
                            <div className="py-3 w-[25%] font-medium whitespace-nowrap">#1989</div>
                            <div className="py-3 w-[13%] font-medium ">$540</div>
                            <div className="py-3 w-[18%] font-medium ">Pending</div>
                            <div className="py-3 w-[18%] font-medium ">Pending</div>
                            <div className="py-3 w-[18%] font-medium "><Link to='/admin/dashboard/order/details/3'>View</Link></div>
                            <div onClick={(e)=>setShow(!show)} className=" py-3 w-[8%] font-bold "><MdKeyboardArrowDown  className='hover:text-indigo-500' /></div>

                        </div>
                        <div className={show ? 'block border-b border-[#fff2df23] bg-[#443d30]':'hidden'}>
                        <div className="flex justify-start  items-start border-b border-[#fff2df15]">
                                <div className="py-3 w-[25%] font-light whitespace-nowrap pl-3">#1989</div>
                                <div className="py-3 w-[13%] font-light ">$54</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>

                        </div>
                        <div className="flex justify-start  items-start border-b border-[#fff2df15]">
                                <div className="py-3 w-[25%] font-light whitespace-nowrap pl-3">#1989</div>
                                <div className="py-3 w-[13%] font-light ">$54</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>

                        </div>

                    </div>

                    </div>



                    <div className="">
                        <div className="flex justify-between font-[impacted] tracking-wide items-start border-b border-[#fff2df15]">
                            <div className="py-3 w-[25%] font-medium whitespace-nowrap">#1989</div>
                            <div className="py-3 w-[13%] font-medium ">$540</div>
                            <div className="py-3 w-[18%] font-medium ">Pending</div>
                            <div className="py-3 w-[18%] font-medium ">Pending</div>
                            <div className="py-3 w-[18%] font-medium "><Link>View</Link></div>
                            <div onClick={(e)=>setShow(!show)} className=" py-3 w-[8%] font-bold "><MdKeyboardArrowDown  className='hover:text-indigo-500' /></div>

                        </div>
                        <div className={show ? 'block border-b border-[#fff2df23] bg-[#443d30]':'hidden'}>
                        <div className="flex justify-start  items-start border-b border-[#fff2df15]">
                                <div className="py-3 w-[25%] font-light whitespace-nowrap pl-3">#1989</div>
                                <div className="py-3 w-[13%] font-light ">$54</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>

                        </div>
                        <div className="flex justify-start  items-start border-b border-[#fff2df15]">
                                <div className="py-3 w-[25%] font-light whitespace-nowrap pl-3">#1989</div>
                                <div className="py-3 w-[13%] font-light ">$54</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>

                        </div>

                    </div>

                    </div>


                    <div className="">
                        <div className="flex justify-between font-[impacted] tracking-wide items-start border-b border-[#fff2df15]">
                            <div className="py-3 w-[25%] font-medium whitespace-nowrap">#1989</div>
                            <div className="py-3 w-[13%] font-medium ">$540</div>
                            <div className="py-3 w-[18%] font-medium ">Pending</div>
                            <div className="py-3 w-[18%] font-medium ">Pending</div>
                            <div className="py-3 w-[18%] font-medium "><Link>View</Link></div>
                            <div onClick={(e)=>setShow(!show)} className=" py-3 w-[8%] font-bold "><MdKeyboardArrowDown  className='hover:text-indigo-500' /></div>

                        </div>
                        <div className={show ? 'block border-b border-[#fff2df23] bg-[#443d30]':'hidden'}>
                        <div className="flex justify-start  items-start border-b border-[#fff2df15]">
                                <div className="py-3 w-[25%] font-light whitespace-nowrap pl-3">#1989</div>
                                <div className="py-3 w-[13%] font-light ">$54</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>

                        </div>
                        <div className="flex justify-start  items-start border-b border-[#fff2df15]">
                                <div className="py-3 w-[25%] font-light whitespace-nowrap pl-3">#1989</div>
                                <div className="py-3 w-[13%] font-light ">$54</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>

                        </div>

                    </div>

                    </div>



                    <div className="">
                        <div className="flex justify-between font-[impacted] tracking-wide items-start border-b border-[#fff2df15]">
                            <div className="py-3 w-[25%] font-medium whitespace-nowrap">#1989</div>
                            <div className="py-3 w-[13%] font-medium ">$540</div>
                            <div className="py-3 w-[18%] font-medium ">Pending</div>
                            <div className="py-3 w-[18%] font-medium ">Pending</div>
                            <div className="py-3 w-[18%] font-medium "><Link>View</Link></div>
                            <div onClick={(e)=>setShow(!show)} className=" py-3 w-[8%] font-bold "><MdKeyboardArrowDown  className='hover:text-indigo-500' /></div>

                        </div>
                        <div className={show ? 'block border-b border-[#fff2df23] bg-[#443d30]':'hidden'}>
                        <div className="flex justify-start  items-start border-b border-[#fff2df15]">
                                <div className="py-3 w-[25%] font-light whitespace-nowrap pl-3">#1989</div>
                                <div className="py-3 w-[13%] font-light ">$54</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>

                        </div>
                        <div className="flex justify-start  items-start border-b border-[#fff2df15]">
                                <div className="py-3 w-[25%] font-light whitespace-nowrap pl-3">#1989</div>
                                <div className="py-3 w-[13%] font-light ">$54</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>
                                <div className="py-3 w-[18%] font-light ">Pending</div>

                        </div>

                    </div>

                    </div>
                    




                </div>

            </div>


            <div className='w-full flex justify-end mt-4 bottom-4 right-4'>

            <Pagination pageNumber = {currentPage} setPageNumber = {setCurrentPage} totalItem = {50} perPage = {perPage} showItem = {3} />

            </div>




        </div>
      
    </div>
  )
}

export default Orders
