import React, { useState } from 'react'

const Search = ({setPerPage,setSearchValue,searchValue}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
                <select onChange={(e)=> setPerPage(parseInt(e.target.value))} className='px-4 py-2 focus:border-[#fff2df73] outline-none bg-[#312C23] text-[#fff2df]  border border-[#fff2df23] rounded-md'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>

                </select>
                <input onChange={(e)=> setSearchValue(e.target.value)} value={searchValue} className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' type='text' name='search'  placeholder='search'/>

            </div>
    </div>
  )
}

export default Search
