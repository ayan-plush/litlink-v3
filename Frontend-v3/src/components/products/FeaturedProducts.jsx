import React, { useEffect } from 'react';
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from '../Rating';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_wishlist, messageClear } from './../../store/Reducers/wishlistReducer';
import toast from 'react-hot-toast';
import { IoChatbubbleOutline } from 'react-icons/io5';
const FeatureProducts = ({latest_products}) => {

    const {errorMessage,successMessage} = useSelector(state=>state.wishlist)
    const {userInfo} = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    
    const add_wishlist = (productId) => {
        const accessToken = localStorage.getItem('accessToken')
        if(userInfo){
            dispatch(add_to_wishlist({
                accessToken,
                userId: userInfo._id,
                productId: productId,
            }))
        }
        else{
            navigate('/login')
        }
    }
    return (
        <div className='w-[85%] justify-center flex flex-wrap mx-auto'>
            <div className='w-full'>
            <div className='text-center font-[impacted] flex justify-center items-center flex-col text-5xl text-[#312C23] relative pb-[45px]'>
                <h2> RECENT ADDITIONS </h2>
                <div className='w-[100px] h-[2px] bg-[#312C23] mt-4'></div>
            </div>
            </div>
        <div className=' grid grid-cols-6 max-md-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6'>
    {
        latest_products?.map((p,i) => <div  key={i} className=' group transition-all duration-500 hover:shadow-md hover:-mt-3'>
            <div className='relative overflow-hidden'>
            
{    p.rating===5?    <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-indigo-500 font-semibold text-xs left-2 top-2'>{p.rating} ★</div> : ''
}        <img onClick={()=>navigate(`/product/details/${p?._id}`)} className='w-[200px] h-[240px] object-scale-down' src={p.images[0]} alt="" />   
        <ul className='flex max-md:bottom-3 transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
            <li onClick={()=>add_wishlist(p._id)} className='w-[38px] h-[38px] cursor-pointer max-md:text-[#ffffff] max-md:bg-[#ffffff8b] bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
            <FaRegHeart />
            </li>
            <Link to={`/product/details/${p?._id}`}  className='w-[38px] h-[38px] cursor-pointer max-md:text-[#ffffff] max-md:bg-[#ffffff8b] bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
            <FaEye />
            </Link>
            <li className='w-[38px] h-[38px] cursor-pointer bg-white max-md:text-[#ffffff] max-md:bg-[#ffffff8b] flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
            <IoChatbubbleOutline className='cursor-pointer' onClick={()=> {userInfo?navigate(`/seller/dashboard/chat-customer/${p.sellerId}`):navigate('/login')}} />
            </li>
        </ul>        
            </div>
            <div onClick={()=>navigate(`/product/details/${p?._id}`)} className='py-3 text-[#312C23] px-2'>
            <h2 className='font-bold'>{p.name.slice(0,31)}{p.name.length>30?'...':''}</h2>
            <div className='flex justify-start items-center gap-3'>
                <span className='text-md font-semibold'>By: {p.author}</span>

            </div>
            <div className='flex justify-start pb-2 items-center gap-3'>
                <span className='text-md font-semibold'>Owner: {p.shopName}</span>

            </div>
            <div className='flex'>
                    <Rating ratings={p.rating} />
                </div>
        </div>
        </div>
        )
    }
        </div>
            
        </div>
    );
};
export default FeatureProducts;