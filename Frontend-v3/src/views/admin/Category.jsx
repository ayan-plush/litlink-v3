import React, { use, useEffect, useState } from 'react'
import Pagination from '../Pagination'
import { Link,  useNavigate } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import toast from 'react-hot-toast'
import {FaEdit, FaImage, FaRegWindowClose, FaTrash } from 'react-icons/fa'
import { overrideStyle } from '../../utils/utils'
import { useSelector, useDispatch } from 'react-redux'
import { categoryAdd } from './../../store/Reducers/categoryReducer';
import { messageClear,get_category } from '../../store/Reducers/categoryReducer'
import Search from '../components/Search'

const Category = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const {loader,successMessage,errorMessage,categories,totalCategory} = useSelector(state=>state.category)

    const add_category = (e) => {
        e.preventDefault()
        dispatch(categoryAdd(state))
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    const [perPage, setPerPage] = useState(5)
    const[show,setShow] = useState(false)
    const[state,setState] = useState({
        name: '',
        image: ''
    })
    const [imageShow,setImageShow] = useState('')
    const imageHandle=(e)=>{
        let files = e.target.files
        if(files.length>0){
            setImageShow(URL.createObjectURL(files[0]))
            setState({
                ...state,
                image: files[0]
            })
        }
    }

    useEffect(()=> {

        if(successMessage){
            
          toast.success(successMessage)
          dispatch(messageClear())
          setState({
            name: '',
            image: ''
          })
          setImageShow('')
          
        }
      
        if(errorMessage){
           
          toast.error(errorMessage)
          dispatch(messageClear())
          
        }
        
      
      },[successMessage,errorMessage])

      useEffect(()=>{
        const obj = {
            perPage: parseInt(perPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_category(obj))
      },[searchValue,currentPage,perPage])

      

  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='flex lg:hidden justify-between items-center mb-5 p-4 bg-[#312C23] rounded-md'>
            <h1 className='text-[#fdebd0] text-xl uppercase font-[impacted]'>Category</h1>
            <button onClick={()=>setShow(true)} className='  bg-[#83765e] border-[2px] border-[#312C23] hover:border-[#83765e] text-[#312C23] rounded-full px-4 cursor-pointer text-sm py-2 mb-3'>Add</button>
        </div>




        <div className="flex flex-wrap w-full">


{/* 7/12 area */}
        <div className="w-full lg:w-7/12 lg:pr-3">
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
              <th scope='col' className='py-3 px-4'>Action</th>
            </tr>
            </thead>
            <tbody>
              {
                categories.map((d,i)=><tr key={i}>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{((currentPage-1)*perPage)+i+1}</td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'><img className='w-[90px] h-[130px] object-cover' src={d.image} alt="" /></td>
                <td scope='row' className='py-3 px-4 font-medium whitespace-nowrap'>{d.name}</td>
                
                <td scope='row' className='py-3 px-4  font-medium whitespace-nowrap'>
                    <div className='flex justify-start items-center gap-4'> 
                        <Link className='p-[6px] bg-[#ffffff19] rounded hover:shadow-lg hover:bg-[#ffffff57]'> <FaEdit/> </Link>
                        <Link className='p-[6px] bg-[#ffffff19] rounded hover:shadow-lg hover:bg-[#ffffff57]'> <FaTrash/> </Link>

                    </div>
                    
                </td>
              </tr>)
              }
            </tbody>

          </table>

        </div>




 {/* footer stuff */}

                <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                <Pagination  pageNumber = {currentPage} setPageNumber = {setCurrentPage} totalItem = {totalCategory} perPage = {perPage} showItem = {totalCategory>perPage? 3:2} />

                </div>




        </div>        
        </div>

{/* 5/12 area */}
        <div className={`w-[320px]  lg:w-5/12  lg:relative lg:right-0 fixed ${show ? 'right-0 z-[9999] ' : '-right-[340px]'} top-0 transition-all duration-500 `}>
        <div className="w-full pl-5 rounded-md">
            <div className='  bg-[#312C23] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#fdebd0]'>

                <div className='flex justify-between items-center mb-4'> 
                <h1 className='text-[#fdebd0] font-[impacted] text-xl w-full text-center'>Add Category</h1>

                <div onClick={()=>setShow(false)} className='block lg:hidden hover:text-[#fc5b5b] '>
                    <FaRegWindowClose/>
                </div>
                </div>

                <form onSubmit={add_category}>
                    <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor='name'>Category Name</label>
                        <input value={state.name} onChange={(e)=>setState({...state,name: e.target.value})} type='text' id='name' name='category_name' placeholder='category name' className='autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-md text-[#fff2df] focus:border-[#fff2df58] hover:border-[#fff2df58] overflow-auto placeholder-[#fff2df23]'></input>
                    </div>

                    <div>
                    <label htmlFor='image' className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed border-[#fff2df23] hover:border-[#fff2df58]'>
                        {
                            imageShow ? <img className='h-[238px] w-full object-scale-down' src={imageShow} alt="" /> : <> <span><FaImage/></span>
                        <span className='font-extralight'>Select Image</span> </>
                        }
                    </label>
                    <input onChange={imageHandle} className='hidden' type='file' name='image' id='image'></input>

                    <div className='pt-3'>
                        {/* <button className=' w-full bg-[#83765e] border-[2px] text-xl border-[#312C23] hover:border-[#83765e] text-[#312C23] rounded-full px-7 py-2 mb-3'>
                            Add Category
                        </button> */}
                        <button disabled={loader ? true : false} className=' w-full font-[impacted] tracking-wide text-lg  bg-indigo-500 border-[2px] border-[#312C23] hover:border-indigo-500 text-[#ffffff] rounded-full px-7 py-2 mb-3'>
                        {
                            loader ? <PropagateLoader color='white' cssOverride={overrideStyle} /> : 'ADD CATEGORY'
                        }
                        
                        </button>
                    </div>

                    </div>

                    

                </form>

            </div>




        </div>        
        </div>

        


        </div>
      
    </div>
  )
}

export default Category
