import React, { useEffect,useState } from 'react'
import { FaEdit, FaEye, FaImages, FaRegHeart } from 'react-icons/fa'
import {FadeLoader, PropagateLoader} from 'react-spinners'
import toast from 'react-hot-toast'
import { FaImage, FaRegWindowClose } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { messageClear, profile_image_upload,add_shopInfo, get_user_info } from '../../store/Reducers/authReducer'
import { overrideStyle } from '../../utils/utils'
import { get_friend_info } from '../../store/Reducers/homeReducer'
import Rating from '../../components/Rating'
import { IoChatbubbleOutline } from 'react-icons/io5'
import { add_to_wishlist } from '../../store/Reducers/wishlistReducer'

const FriendDetails = () => {
    const {sellerId} = useParams()
    const dispatch = useDispatch()
    const {friend} = useSelector(state=>state.home)
    const {errorMessage,successMessage} = useSelector(state=>state.wishlist)
    useEffect(()=> {
        dispatch(get_friend_info(sellerId))
              
      },[])
    const navigate = useNavigate()
    const status = 'active'
    const add_image = (e) => {
        if(e.target.files.length>0){
            const formData = new FormData()
            formData.append('image',e.target.files[0])
            dispatch(profile_image_upload(formData))
        }
    }

    useEffect(()=> {
    
        if(successMessage){
          toast.success(successMessage)
          dispatch(messageClear())
        }
      
        if(errorMessage){
          toast.error(errorMessage)
          dispatch(messageClear())
        }
        
      
      },[successMessage,errorMessage])

      const add_wishlist = (productId) => {
                  if(userInfo){
                      dispatch(add_to_wishlist({
                          userId: userInfo._id,
                          productId: productId,
                      }))
                  }
                  else{
                      navigate('/login')
                  }
              }

   
    // useEffect(()=> {
    //     if(userInfo.shopInfo){
    //     }
    //     if(successMessage){
    //       toast.success(successMessage)
    //       dispatch(messageClear()) 
                
    //     }
      
    //     if(errorMessage){
           
    //       toast.error(errorMessage)
    //       dispatch(messageClear())
          
    //     }
        
      
    //   },[successMessage,errorMessage])
    const styles = 'grid'


  return (
    <div className='px-2 lg:px-7 pt-5' >
        <div className=' flex flex-wrap'>
            <div className='w-full '>
            <div className='md:w-1/3 p-4 bg-[#312C23] text-[#fdebd0]  rounded-md'>
                <div className='flex justify-center items-center py-3'>
                    {
                        friend?.image ? 

                        <div className=' p-3 relative overflow-hidden'>
                            <img className='object-cover h-[200px] w-[200px]  ' src={friend?.image} alt="" />
                            
                        </div>
                        
                        : <label htmlFor='img' className='flex relative justify-center items-center flex-col h-[200px] w-[200px] cursor-pointer border border-dashed border-[#fff2df23] hover:border-[#fff2df58]'>
                        <span><FaImages/></span>
                        <span className={`font-extralight`}>No Image</span>
                    </label>
                    }
                    <input onChange={add_image} type="file" className='hidden' id='img' />

                </div>

                <div className=' px-0 md:px-5 py-2 '>
                    <div className='flex text-[#312C23] justify-between text-sm flex-col gap-2 p-4 bg-[#857A65] rounded-md relative '>
                        <div className='flex justify-between gap-2'>
                            <div className='h-[30px] flex gap-1 justify-center items-center'>
                            <span> Name: </span>
                            <span> {friend?.name} </span>
                            </div>
                            
                            <Link to={friend?`/seller/dashboard/chat-customer/${friend?.books[0]?.sellerId}`:''} className='h-[30px] w-[30px] flex justify-center items-center rounded-full bg-[#ffffff50]'>
                            <IoChatbubbleOutline/>
                            </Link> 
                        </div> 
                                             

                    </div>

                </div>

            </div>

            </div>

            <div className='w-full  pl-0  mt-6 '>

            <div className='p-4  bg-[#312C23] text-[#fdebd0] rounded-md'>
            <div className={`w-full grid ${styles === 'grid' ? 'grid-cols-3 max-md-lg:grid-cols-2 max-md:grid-cols-2' : 'grid-cols-1 max-md-lg:grid-cols-2 max-md:grid-cols-2'} gap-3 `}>

            {
              friend.books?  friend.books?.map((p, i)=> <div key={i} className={`flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${styles === 'grid' ? 'flex-col justify-start items-start' : 'justify-start items-center max-md-lg:flex-col max-md-lg:justify-start max-md-lg:items-start'} w-full gap-4 p-1 rounded-md`}>
                    <div className={styles === 'grid' ? 'w-full relative group h-[210px] max-md:h-[270px] max-xs:h-[170px] overflow-hidden' : 'max-md-lg:w-full relative group h-[210px] max-md:h-[270px] overflow-hidden'}>
                        <img onClick={()=>navigate(`/product/details/${p?._id}`)} className=' h-full w-full object-scale-down' src={p?.images[0]} alt="" />
                        <ul className='flex text-[#0000002c] transition-all max-md:bottom-1 duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                            <li onClick={()=>add_wishlist(p._id)} className='w-[38px] h-[38px] cursor-pointer  max-md:text-[#ffffff] max-md:bg-[#ffffff8b] bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <FaRegHeart />
                            </li>
                            <Link to={`/product/details/${p?._id}`} className='w-[38px] h-[38px] cursor-pointer  max-md:text-[#ffffff] max-md:bg-[#ffffff8b] bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <FaEye />
                            </Link>
                            <li className='w-[38px] h-[38px] cursor-pointer bg-white  max-md:text-[#ffffff] max-md:bg-[#ffffff8b] flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <IoChatbubbleOutline className='cursor-pointer' onClick={()=> navigate(`/seller/dashboard/chat-customer/${p.sellerId}`)} />
                            </li>
                        </ul>
                    </div>
                    <div onClick={()=>navigate(`/product/details/${p?._id}`)} className='flex justify-center items-start flex-col gap-1'>
                        <h2 className='font-bold h-[40px]'>{p?.name.slice(0,30).trimEnd()}{p?.name.length>30?'...':''}</h2>
                        <div className='flex flex-wrap justify-start items-center gap-3'>
                            <span className='text-md font-semibold'>By: {p?.author}</span>
                        </div>
                    </div>
                    
                </div>
                
                ) : ''
            }
        </div>

            </div>

            

            </div>

        </div>
      
    </div>
  )
}

export default FriendDetails
