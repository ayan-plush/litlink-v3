import React, { useEffect, useRef } from 'react';
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from '../Rating';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { add_to_wishlist, messageClear } from '../../store/Reducers/wishlistReducer';
import toast from 'react-hot-toast';
import { IoChatbubbleOutline } from 'react-icons/io5';


const ShopProducts = ({styles}) => {
    const {product,latest_products} = useSelector(state => state.home)
    const {errorMessage,successMessage} = useSelector(state=>state.wishlist)
    const {userInfo} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
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



    const {display_products} = useSelector(state => state.home)
    // useEffect(() => {
    //         window.scrollTo(0,0)
    //       }, [display_products])
    
    return (
        <div className={`w-full  grid ${styles === 'grid' ? 'grid-cols-4 max-md-lg:grid-cols-2 max-md:grid-cols-2' : 'grid-cols-1 max-md-lg:grid-cols-2 max-md:grid-cols-2'} gap-3 `}>

            {
              display_products?  display_products?.map((p, i)=> <div key={i} className={` bg-[#2b1d0e56] md:px-[15%] md:py-8 flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${styles === 'grid' ? 'flex-col justify-start items-start' : 'justify-start items-center max-md-lg:flex-col max-md-lg:justify-start max-md-lg:items-start'} w-full gap-4 p-1 rounded-md`}>
                    <div className={styles === 'grid' ? 'w-full  relative group h-[210px] max-md:h-[280px]  overflow-hidden' : 'max-md-lg:w-full relative group h-[210px] max-md:h-[270px] overflow-hidden'}>
                        <img onClick={()=>navigate(`/product/details/${p?._id}`)} className=' h-full rounded-md w-full object-cover' src={p?.images[0]} alt="" />
                        <ul className='flex z-20 transition-all max-md:bottom-1 duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                            <li onClick={()=>add_wishlist(p._id)} className='w-[38px] h-[38px] cursor-pointer max-md:border-[#ffffff8b] max-md:border-1 max-md:text-[#ffffff]  max-md:backdrop-blur-md md:bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <FaRegHeart  />
                            </li>
                            <Link to={`/product/details/${p?._id}`} className='w-[38px] h-[38px] cursor-pointer max-md:border-[#ffffff8b] max-md:border-1  max-md:text-[#ffffff] max-md:backdrop-blur-md md:bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <FaEye />
                            </Link>
                            <li className='w-[38px] h-[38px] cursor-pointer md:bg-white  max-md:text-[#ffffff] max-md:border-[#ffffff8b] max-md:border-1 max-md:backdrop-blur-md flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <IoChatbubbleOutline className='cursor-pointer' onClick={()=> {userInfo?navigate(`/seller/dashboard/chat-customer/${p.sellerId}`):navigate('/login')}} />
                            </li>
                        </ul>
                    </div>
                    <div onClick={()=>navigate(`/product/details/${p?._id}`)} className='flex overflow-hidden  items-start flex-col gap-1'>
                        <h2 className='font-bold mb-2 md:h-[70px] lg:h-[60px]'>{p?.name.slice(0,30).trimEnd()}{p?.name.length>30?'...':''}</h2>
                        <div className='flex flex-col'>
                            {/* <span className='text-md font-semibold'>By: {p?.author.slice(0,10).trimEnd()}{p?.author.length>10?'...':''}</span>
                            <span className='text-md font-semibold'>Owner: {p?.shopName.slice(0,10).trimEnd()}{p?.shopName.length>10?'...':''}</span> */}
                            <span className='flex'><Rating ratings={p?.rating} /></span>                            
                        </div>
                    </div>
                    
                </div>
                
                ) : ''
            }
        </div>
    );
};
export default ShopProducts;
