import React from 'react';
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from '../Rating';


const ShopProducts = ({styles}) => {
    return (
        <div className={`w-full grid ${styles === 'grid' ? 'grid-cols-3 max-md-lg:grid-cols-2 max-md:grid-cols-2' : 'grid-cols-1 max-md-lg:grid-cols-2 max-md:grid-cols-2'} gap-3 `}>
            {
                [1,2,3,4,5,6].map((p, i)=> <div key={i} className={`flex transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${styles === 'grid' ? 'flex-col justify-start items-start' : 'justify-start items-center max-md-lg:flex-col max-md-lg:justify-start max-md-lg:items-start'} w-full gap-4 p-1 rounded-md`}>
                    <div className={styles === 'grid' ? 'w-full relative group h-[210px] max-md:h-[270px] max-xs:h-[170px] overflow-hidden' : 'max-md-lg:w-full relative group h-[210px] max-md:h-[270px] overflow-hidden'}>
                        <img className=' h-full w-full object-scale-down' src={`https://litlink-frontend.onrender.com/images/category/${i+1}.jpg`} alt="" />
                        <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                            <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <FaRegHeart />
                            </li>
                            <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <FaEye />
                            </li>
                            <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                            <RiShoppingCartLine />
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-start flex-col gap-1'>
                        <h2 className='font-bold'>Product Name </h2>
                        <div className='flex flex-wrap justify-start items-center gap-3'>
                            <span className='text-md font-semibold'>By: Diya Singh</span>
                            <div className='flex'>
                                <Rating ratings={4.5} />
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                )
            }
             
        </div>
    );
};
export default ShopProducts;
