
import React, { useState } from 'react'
import Search from '../components/Search'
import Pagination from '../Pagination'
import { Link } from 'react-router-dom'
import {FaEdit, FaEye, FaImage, FaRegWindowClose, FaTrash } from 'react-icons/fa'

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5)
    const[show,setShow] = useState(false)
    
  return (
    <div>
      <div className='px-2 lg:px-7 pt-5'>
        <div>
              <h1 className='text-[#312C23] text-xl uppercase font-[impacted] mb-3'>Orders</h1>
        </div>
        <div className="w-full bg-[#312C23] text-[#fff2df] p-4 rounded-md ">
          <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue}/>


          <div className="relative overflow-x-auto mt-5 ">
          <table className='w-full text-sm  text-left'>
            <thead className='uppercase border-b border-slate-700'>
            <tr>
              <th scope='col' className='py-3 px-4'>Order Id.</th>
              <th scope='col' className='py-3 px-4'>Price</th>
              <th scope='col' className='py-3 px-4'>Payment status</th>
              <th scope='col' className='py-3 px-4'>Order Status</th>
              <th scope='col' className='py-3 px-4'>Action</th>
            </tr>
            </thead>
            <tbody>
              {
                [1,2,3,4,5,6].map((d,i)=><tr key={i}>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>#344{d}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>655</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                
                <td scope='row' className='py-3 px-4  font-medium whitespace-nowrap'>
                    <div className='flex justify-start items-center gap-4'> 
                        
                        <Link to='/seller/dashboard/order/details/3' className='p-[6px] bg-[#ffffff19] rounded hover:shadow-lg hover:bg-green-500'> <FaEye/> </Link>

                    </div>
                    
                </td>
              </tr>)
              }
            </tbody>

          </table>

        </div>




 {/* footer stuff */}

                <div className='w-full flex justify-end mt-4 bottom-4 right-4'>

                <Pagination pageNumber = {currentPage} setPageNumber = {setCurrentPage} totalItem = {50} perPage = {perPage} showItem = {3} />

                </div>


        </div>
      </div>
    </div>
  )
}

export default Orders
