
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination'
import { Link } from 'react-router-dom'
import { FaCross, FaEdit, FaEye, FaImage, FaRegWindowClose, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { get_seller_request, get_sellers } from '../../store/Reducers/sellerReducer'
import Search from '../components/Search'

const Sellers = () => {
  const dispatch = useDispatch()
  const{loader,successmessage,errormessage,sellers,totalSeller} = useSelector(state=>state.seller)

  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [perPage, setPerPage] = useState(5)
  const[show,setShow] = useState(false)

  useEffect(()=>{
    const obj = {
        perPage: parseInt(perPage),
        page: parseInt(currentPage),
        searchValue
    }
    dispatch(get_sellers(obj))
  },[searchValue,currentPage,perPage])
    

  return (
    <div>
      <div className='px-2 lg:px-7 pt-5'>
        <div className='flex lg:hidden justify-between items-center mb-5 p-4 bg-[#312C23] rounded-md'>
            <h1 className='text-[#fdebd0] text-xl uppercase font-[impacted]'>Category</h1>
            <button onClick={()=>setShow(true)} className='  bg-[#83765e] border-[2px] border-[#312C23] hover:border-[#83765e] text-[#312C23] rounded-full px-4 cursor-pointer text-sm py-2 mb-3'>Add</button>
        </div>




        <div className="flex flex-wrap w-full">


{/* 7/12 area */}
        <div className="w-full  lg:pr-3">
        < div className="w-full bg-[#312C23] p-4 rounded-md text-[#fdebd0]">

 {/* header stuff */}
            {/* <div className="flex justify-between items-center">
                <select onChange={(e)=> setPerPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-[#fff2df73] outline-none bg-[#312C23] text-[#fff2df]  border border-[#fff2df23] rounded-md'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>

                </select>
                <input className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' type='text' name='search'  placeholder='search'/>

            </div> */}
            <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue} />




 {/*body area*/}
        <div className="relative overflow-x-auto mt-3 ">
          <table className='w-full text-sm  text-left'>
            <thead className='uppercase border-b border-slate-700'>
            <tr>
              <th scope='col' className='py-3 px-4'>No.</th>
              <th scope='col' className='py-3 px-4'>Image</th>
              <th scope='col' className='py-3 px-4'>Name</th>
              <th scope='col' className='py-3 px-4'>Shop Name</th>
              <th scope='col' className='py-3 px-4'>Payment Status</th>
              <th scope='col' className='py-3 px-4'>Email</th>
              <th scope='col' className='py-3 px-4'>Division</th>
              <th scope='col' className='py-3 px-4'>District</th>
              <th scope='col' className='py-3 px-4'>Action</th>
            </tr>
            </thead>
            <tbody>
              {
                sellers?.map((d,i)=><tr key={i}>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{((currentPage-1)*perPage)+i+1}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><img className='w-[90px] h-[90px] object-cover ' src={d?.image} alt="" /></td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.name}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.shopInfo?.shopName}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.payment}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.email}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.shopInfo?.division}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.shopInfo?.district}</td>
                
                <td scope='row' className='py-3 px-4  font-medium whitespace-nowrap'>
                    <div className='flex justify-start items-center gap-4'> 
                        <Link className='p-[6px] bg-[#ffffff19] rounded hover:shadow-lg hover:bg-[#ffffff57]'> <FaEye/> </Link>                        

                    </div>
                    
                </td>
              </tr>)
              }
            </tbody>

          </table>

        </div>




 {/* footer stuff */}

                {/* <div className='w-full flex justify-end mt-4 bottom-4 right-4'>

                <Pagination pageNumber = {currentPage} setPageNumber = {setCurrentPage} totalItem = {50} perPage = {perPage} showItem = {3} />

                </div> */}
                {
                  totalSeller <= perPage ? "" : <div className='w-full flex justify-end mt-4 bottom-4 right-4'>

                  <Pagination pageNumber = {currentPage} setPageNumber = {setCurrentPage} totalItem = {totalSeller} perPage = {perPage} showItem = {totalSeller>perPage? 3:2}  />

                  </div>

                }




        </div>        
        </div>

        


        </div>
      
    </div>
    </div>
  )
}

export default Sellers
