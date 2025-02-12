import React, { forwardRef } from 'react'
import { FixedSizeList as List } from 'react-window'
import { MdCurrencyExchange } from "react-icons/md";
import { FaBookOpen,FaBookReader,FaCreativeCommonsShare } from "react-icons/fa";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

function handleOnWheel({deltaY}) {
    console.log('handonwheel',deltaY)
}

const outerElementType = forwardRef((props,ref)=>(
    <div ref={ref} onWheel={handleOnWheel} {...props}></div>
))

const Payments = () => {





    const Row = ({index,style}) => {
        return(
            <div style={style} className='flex text-sm text-[#fff2df] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  '>

                <div className='w-[25%] p-2 whitespace-nowrap'>
                    {index+1}
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap'>
                    $3444
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap'>
                    <span className='py-[1px] px-[5px] rounded-md bg-indigo-300 text-indigo-700'>Pending</span>
                </div>
                <div className='w-[25%] p-2 whitespace-nowrap'>
                    25 DEC 2024
                </div>
                

            </div>
        )
    }


  return (
    
        <div className='px-2 md:px-7 py-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  '>
          <div className="w-full mb-5 grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-4 gap-7 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  ">
            <div className='flex justify-between items-center p-5 bg-[#857A65] rounded-md gap-3'>
              <div className='flex flex-col justify-start items-start'>
                <h2 className='text-3xl font-semibold'>$2000</h2>
                <span className='text-md font-[impacted]'>Total Sales</span>
    
              </div>
              <div className='w-[40px] h-[40px] rounded-full bg-[#312C23] text-[#fff2df] flex justify-center items-center text-xl'>
              <MdCurrencyExchange />
    
    
              </div>
            </div>
            {/* 2nd */}
            <div className='flex justify-between items-center p-5 bg-[#857A65] rounded-md gap-3'>
              <div className='flex flex-col justify-start items-start'>
                <h2 className='text-3xl font-semibold'>100</h2>
                <span className='text-md font-[impacted]'>Books</span>
    
              </div>
              <div className='w-[40px] h-[40px] rounded-full bg-[#312C23] text-[#fff2df] flex justify-center items-center text-xl'>
              <FaBookOpen />
    
    
              </div>
            </div>
            {/* 3rd */}
            <div className='flex justify-between items-center p-5 bg-[#857A65] rounded-md gap-3'>
              <div className='flex flex-col justify-start items-start'>
                <h2 className='text-3xl font-semibold'>$100</h2>
                <span className='text-md font-[impacted]'>Withdrawl Amount</span>
    
              </div>
              <div className='w-[40px] h-[40px] rounded-full bg-[#312C23] text-[#fff2df] flex justify-center items-center text-xl'>
              <FaBookReader />
    
    
              </div>
            </div>
            {/*4th*/}
            <div className='flex justify-between items-center p-5 bg-[#857A65] rounded-md gap-3'>
              <div className='flex flex-col justify-start items-start'>
                <h2 className='text-3xl font-semibold'>$0</h2>
                <span className='text-md font-[impacted]'>Pending Amount</span>
    
              </div>
              <div className='w-[40px] h-[40px] rounded-full bg-[#312C23] text-[#fff2df] flex justify-center items-center text-xl'>
              <FaCartShopping />
    
    
              </div>
            </div>
          </div>

          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]   pb-4 '>
            
            <div className="w-full bg-[#312C23] p-5 rounded-md">

            <div>
              <h1 className='text-[#fff2df] text-xl uppercase font-[impacted]'>Send Request</h1>
            </div>

            <div className='pt-5'>
                <form >
                    <div className='flex gap-3 justify-between flex-wrap'>
                        <input type="number" name='amount'min='0' className=' md:w-[78%]  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-md text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                        <button  className='bg-indigo-500 hover:border-indigo-500 border border-[#312C23] text-white px-7 py-2 rounded-md'>Submit</button>

                    </div>
                </form>

            </div>

            <div className='pt-5'>
                <h2 className='text-[#fff2df] text-xl uppercase font-[impacted] pb-4'>Pending Request</h2>
            </div> 
            <div className='w-full overflow-x-auto '>
                                <div className='flex bg-[#605644] text-[#fff2df] font-[impacted]  rounded-md uppercase text-md min-w-[340px]'>
                                    <div className='w-[25%] p-2'> NO. </div>
                                    <div className='w-[25%] p-2'> AMOUNT </div>
                                    <div className='w-[25%] p-2'> STATUS </div>
                                    <div className='w-[25%] p-2'> DATE </div>
                                </div>
                                {
                                    <List style={{minWidth: '340px'}} className='List  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  ' height={350} itemCount={10} itemSize={35} outerElementType={outerElementType}>
                                        {Row}
                                    </List>
                                }
            </div>               
            </div>
            
            <div className="w-full bg-[#312C23] p-5 rounded-md">

            <div className='pt-5'>
                <h2 className='text-[#fff2df] text-xl uppercase font-[impacted] pb-4'>Success Withdraw</h2>
            </div> 
            <div className='w-full overflow-x-auto '>
                                <div className='flex bg-[#605644] text-[#fff2df] font-[impacted]  rounded-md uppercase text-md min-w-[340px]'>
                                    <div className='w-[25%] p-2'> NO. </div>
                                    <div className='w-[25%] p-2'> AMOUNT </div>
                                    <div className='w-[25%] p-2'> STATUS </div>
                                    <div className='w-[25%] p-2'> DATE </div>
                                </div>
                                {
                                    <List style={{minWidth: '340px'}} className='List  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  ' height={350} itemCount={10} itemSize={35} outerElementType={outerElementType}>
                                        {Row}
                                    </List>
                                }
            </div>               
            </div>


            
        </div>



        </div>
      
    
  )
}

export default Payments
