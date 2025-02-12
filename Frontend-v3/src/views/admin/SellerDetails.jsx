import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { sellerReducer,get_seller,update_seller_status, messageClear } from '../../store/Reducers/sellerReducer'
import { overrideStyle } from '../../utils/utils'
import { PropagateLoader } from 'react-spinners'
import toast from 'react-hot-toast'

const SellerDetails = () => {

    const {sellerId} = useParams()
    const {loader,seller,successMessage,errorMessage} = useSelector(state=>state.seller)
    const [status,setStatus] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(get_seller(sellerId))        
        },[sellerId])

    const statusHandler = (e) => {
        e.preventDefault()
        const obj = {
            sellerId,
            status
        }
        dispatch(update_seller_status(obj))

    }

    useEffect(()=> {

        if(successMessage){
            
          toast.success(successMessage)
          dispatch(get_seller(sellerId))
          dispatch(messageClear()) 
                   
        }
      
        if(errorMessage){
           
          toast.error(errorMessage)
          dispatch(messageClear())
          
        }
        
      
      },[successMessage,errorMessage])





  return (
    <div className='px-2 lg:px-7 pt-5  '>
        <div>
            <h1 className='text-[#312C23] text-xl uppercase font-[impacted] mb-3'>Seller Details</h1>
        </div>
        <div className='w-full rounded-md p-4 bg-[#312C23]'>
            <div className='w-full lg:flex lg:flex-nowrap text-[#fdebd0]'>
                <div className='lg:w-3/12 w-full flex justify-center items-center pt-3'>
                <div >
                    <img className='w-[230px] h-[230px] object-cover' src={seller?.image} alt="" />
                </div>
                
                </div>

                <div className='lg:w-4/12 w-full'>
                <div className='px-0 md:px-5 py-2'>
                    <div className='py-2 text-lg'>
                        <h2 className='font-[impacted] tracking-wide uppercase'>Basic Info</h2>
                    </div>

                    <div className='flex justify-between text-[#fdebd0] text-sm flex-col gap-2 p-4 bg-[#564d3d] rounded-md '>
                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Name :</span>
                            <span className='font-light'>{seller?.name}</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Email :</span>
                            <span className='font-light'>{seller?.email}</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Role :</span>
                            <span className='font-light'>{seller?.role}</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Status :</span>
                            <span className='font-light'>{seller?.status}</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'> Payment Status :</span>
                            <span className='font-light'>{seller?.payment}</span>
                        </div>


                    </div>
                    
                </div>

                </div>





                <div className='lg:w-4/12 w-full'>
                <div className='px-0 md:px-5 py-2'>
                    <div className='py-2 text-lg'>
                        <h2 className='font-[impacted] tracking-wide uppercase'>Address</h2>
                    </div>

                    <div className='flex justify-between text-[#fdebd0] text-sm flex-col gap-2 p-4 bg-[#564d3d] rounded-md '>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Shop Name :</span>
                            <span className='font-light'>{seller?.shopInfo?.name}</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Division :</span>
                            <span className='font-light'>{seller?.shopInfo?.division}</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>District :</span>
                            <span className='font-light'>{seller?.shopInfo?.district}</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'> Sub District :</span>
                            <span className='font-light'>{seller?.shopInfo?.sub_district}</span>
                        </div>


                    </div>
                    
                </div>

                </div>






            </div>

            <div className=''>
                <form onSubmit={statusHandler}>
                    <div className='flex pl-7 mt-2 gap-4 pt-3'>
                    <select value={status} onChange={(e)=>setStatus(e.target.value)} className='px-4  focus:border-[#fff2df73] h-[30px] outline-none bg-[#312C23] text-[#fff2dfaf] text-sm font-extralight lowercase  border border-[#fff2df23] rounded-full'>
                    <option value="">-- Select Status --</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>

                    </select>
                    <button className=' w-[170px] bg-[#83765e] h-[30px] border-[2px] border-[#312C23] hover:border-[#83765e] text-[#312C23] rounded-full px-7 '>
                    {
                            loader ? <PropagateLoader color='white' cssOverride={overrideStyle} /> : 'SUBMIT'
                        }    
                    </button>



                    </div>
                </form>
            </div>

        </div>


      
    </div>
  )
}

export default SellerDetails
