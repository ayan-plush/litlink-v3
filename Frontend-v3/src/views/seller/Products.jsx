import React, { useState,useEffect } from 'react'
import Search from '../components/Search'
import Pagination from '../Pagination'
import {FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link,  useNavigate } from 'react-router-dom'
import {get_products } from '../../store/Reducers/productReducer'
import { useSelector, useDispatch } from 'react-redux'

const Products = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {products,totalProduct} = useSelector(state=>state.product)
  const {userInfo} = useSelector(state=>state.auth)


    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5)
    const[show,setShow] = useState(false)


    useEffect(()=>{
      const obj = {
          perPage: parseInt(perPage),
          page: parseInt(currentPage),
          searchValue,
          id: userInfo?._id
      }
      dispatch(get_products(obj))
    },[searchValue,currentPage,perPage])

    
  return (
    <div>
      <div className='px-2 lg:px-7 pt-5'>
        <div>
              <h1 className='text-[#312C23] text-xl uppercase font-[impacted] mb-3'>All Books</h1>
        </div>
        <div className="w-full bg-[#312C23] text-[#fff2df] p-4 rounded-md ">
          <Search setPerPage={setPerPage} setSearchValue={setSearchValue} searchValue={searchValue}/>


          <div className="relative overflow-x-auto mt-5 ">
          <table className='w-full text-md  text-left'>
            <thead className='uppercase border-b border-slate-700'>
            <tr>
              <th scope='col' className='py-3 px-4'>No.</th>
              <th scope='col' className='py-3 px-4'>Image</th>
              <th scope='col' className='py-3 px-4'>Name</th>
              <th scope='col' className='py-3 px-4'>Genre</th>
              <th scope='col' className='py-3 px-4'>Author</th>
              <th scope='col' className='py-3 px-4'>Pages</th>
              {/* <th scope='col' className='py-3 px-4'>Discount</th> */}
              <th scope='col' className='py-3 px-4'>Stock</th>
              <th scope='col' className='py-3 px-4'>Action</th>
            </tr>
            </thead>
            <tbody>
              {
                products?.map((d,i)=><tr key={i}>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{((currentPage-1)*perPage)+i+1}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><img className='w-[90px] h-[130px] object-scale-down' src={d?.images[0]} alt="" /></td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.name.slice(0,25)}{d.name.length>25? '...': ''}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.category}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.author}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.price}</td>
                {/* <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d.discount===0 ? <span className='font-extralight'>No Discount</span>: <span>{d?.discount}%</span>}</td> */}
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d?.stock}</td>

                
                <td scope='row' className='py-3 px-4  font-medium whitespace-nowrap'>
                    <div className='flex justify-start items-center gap-4'> 
                        <Link to={`/seller/dashboard/edit-product/${d._id}`} className='p-[6px] bg-[#ffffff19] rounded hover:shadow-lg hover:bg-indigo-500'> <FaEdit/> </Link>
                        <Link className='p-[6px] bg-[#ffffff19] rounded hover:shadow-lg hover:bg-red-500'> <FaTrash/> </Link>
                        <Link className='p-[6px] bg-[#ffffff19] rounded hover:shadow-lg hover:bg-green-500'> <FaEye/> </Link>

                    </div>
                    
                </td>
              </tr>)
              }
            </tbody>

          </table>

        </div>




 {/* footer stuff */}

        {
          totalProduct <= perPage ? "" : <div className='w-full flex justify-end mt-4 bottom-4 right-4'>

          <Pagination pageNumber = {currentPage} setPageNumber = {setCurrentPage} totalItem = {totalProduct} perPage = {perPage} showItem = {totalProduct>perPage? 3:2}  />

          </div>

        }

        </div>
      </div>
    </div>
  )
}

export default Products
