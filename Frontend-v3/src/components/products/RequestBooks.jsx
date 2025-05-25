import React from 'react'
import { useState } from 'react';
import { PiBooksFill } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { send_message_book } from '../../store/Reducers/chatReducer';


// eslint-disable-next-line react/prop-types
function RequestBooks({current_seller_books, sellerId }) {
    const dispatch = useDispatch()
    const [vis,setVis] = useState(false)
    const {userInfo} = useSelector(state=>state.auth)
    

    const sendBook = (books) => {
        setVis(false)
        dispatch(send_message_book(
            {
                userId: userInfo._id,
                name: userInfo.name,
                sellerId,
                book: books
            }
        ))
    }


  return (
    <div>

        <button onClick={()=>setVis(!vis)} className='bg-[#C1F6A7] relative hover:bg-[#b0f98c] cursor-pointer text-semibold w-[75px] h-[35px] rounded-md text-[#1B1B1B] uppercase flex justify-center items-center'>{vis?<RxCross2/>:<PiBooksFill />}</button>
        
        <div className={` ${vis?'':'hidden'} absolute w-[300px] md:w-[400px] overflow-x-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-[400px] backdrop-blur-3xl bottom-0 mb-15 ml-3 border-1 border-[#ffdbb144] rounded-3xl `}>
            <h1 className='px-5 pt-2 text-xl text-[#fdebd0] font-[impacted] ' >Request a Book</h1>
            <div className=' grid grid-cols-3 max-md-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 p-5  gap-6'>
                {
                    // eslint-disable-next-line react/prop-types
                    current_seller_books?.map((books,i)=>
                        <div onClick={()=>sendBook(books)} key={i}><img className='w-full h-[150px] object-cover cursor-pointer rounded-md hover:scale-102 ' src={books.images[0]}/></div>
                    )
                }
            </div>
        </div>   
    </div>
  )
}



export default RequestBooks
