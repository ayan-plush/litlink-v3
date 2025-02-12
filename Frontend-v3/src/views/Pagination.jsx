import React from 'react'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";


const Pagination = ({pageNumber, setPageNumber, totalItem, perPage, showItem}) => {

    let totalPage = Math.ceil(totalItem/perPage)
    let startPage = pageNumber

    let diff = totalPage - pageNumber
    if(diff<=showItem){
        startPage = totalPage - showItem

    }
    let endPage =  startPage < 0 ? showItem : showItem + startPage
    if(startPage<=0){
        startPage = 1
    }
    const createButton = () => {

        const btns = [] 
        for (let i = startPage; i < endPage; i++) {
            btns.push(
                <li onClick={()=> setPageNumber(i)} className={` ${pageNumber===i ? 'bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white ':'bg-[#857a6526] hover:bg-[#857a655c] text-[#fff2df] hover:text-white'} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer `}>
                    {i}
                </li>
            )
            
        }

        return btns

    }
    return (
        <ul className='flex gap-3 '>

            {
              pageNumber > 1 && <li  onClick={()=>  setPageNumber(pageNumber-1) } className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-[#857a6526]  hover:bg-[#857a655c] text-[#fff2df] cursor-pointer'> <MdKeyboardDoubleArrowLeft /> </li>
            }{
                createButton()
            }
            {
                <li onClick={()=>   pageNumber < totalPage ? setPageNumber(pageNumber+1) : ''} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-[#857a6526]  hover:bg-[#857a655c] text-[#fff2df] cursor-pointer'> <MdKeyboardDoubleArrowRight /> </li>
            }

        </ul>
    )
}

export default Pagination
