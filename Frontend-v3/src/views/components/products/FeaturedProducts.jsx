import React from 'react';
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from '../Rating';
import { Link } from 'react-router-dom';
const FeatureProducts = () => {
    return (
        <div className='w-[85%] justify-center flex flex-wrap mx-auto'>
            <div className='w-full'>
            <div className='text-center flex justify-center items-center flex-col text-4xl text-[#312C23] font-bold relative pb-[45px]'>
                <h2>Featured Books </h2>
                <div className='w-[100px] h-[2px] bg-[#312C23] mt-4'></div>
            </div>
            </div>
        <div className=' grid grid-cols-6 max-md-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6'>
    {
        [1,2,3,4,5,6].map((p,i) => <div key={i} className=' group transition-all duration-500 hover:shadow-md hover:-mt-3'>
            <div className='relative overflow-hidden'>
            
        <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-indigo-500 font-semibold text-xs left-2 top-2'>5 ★</div> 
        <img className='w-[200px] h-[240px] object-cover' src={`https://litlink-frontend.onrender.com/images/category/${i+1}.jpg`} alt="" />   
        <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
            <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
            <FaRegHeart />
            </li>
            <Link to='/product/details/3' className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
            <FaEye />
            </Link>
            <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
            <RiShoppingCartLine />
            </li>
        </ul>        
            </div>
            <div className='py-3 text-[#312C23] px-2'>
            <h2 className='font-bold'>Product Name </h2>
            <div className='flex justify-start items-center gap-3'>
                <span className='text-md font-semibold'>By: Diya Singh</span>

            </div>
            <div className='flex'>
                    <Rating ratings={4.5} />
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