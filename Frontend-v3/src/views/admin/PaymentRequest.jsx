import React, { forwardRef } from 'react'
import { FixedSizeList as List } from 'react-window'


function handleOnWheel({deltaY}) {
    console.log('handonwheel',deltaY)
}

const outerElementType = forwardRef((props,ref)=>(
    <div ref={ref} onWheel={handleOnWheel} {...props}></div>
))

const PaymentRequest = () => {


    const array = [1,2,3,4,5,6,7,8,9]


    const Row = ({index,style}) => {
        return(
            <div style={style} className='flex text-sm text-[#fff2df] '>

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
                <div className='w-[25%] p-2 whitespace-nowrap'>
                    <button className=' bg-[#83765e] border-[2px]  border-[#312C23] text-sm hover:border-[#83765e] text-[#312C23] rounded-md px-3 py-[2px] cursor-pointer'>Confirm</button>
                </div>


            </div>
        )
    }




  return (
    <div className='px-2 lg:px-7 pt-5'>
        <div className='w-full p-4 bg-[#312C23] rounded-md'>

            <h2 className='text-xl font-[impacted] pb-5 text-[#fff2df]'>Withdrawal Request</h2>
            <div className='w-full'>
                <div className='w-full overflow-x-auto '>
                    <div className='flex bg-[#605644] text-[#fff2df] font-[impacted]  rounded-md uppercase text-md min-w-[340px]'>
                        <div className='w-[25%] p-2'> NO. </div>
                        <div className='w-[25%] p-2'> AMOUNT </div>
                        <div className='w-[25%] p-2'> STATUS </div>
                        <div className='w-[25%] p-2'> DATE </div>
                        <div className='w-[25%] p-2'> ACTION </div>
                    </div>
                    {
                        <List style={{minWidth: '340px'}} className='List' height={350} itemCount={100} itemSize={35} outerElementType={outerElementType}>
                            {Row}
                        </List>
                    }
                </div>
            </div>

        </div>
              
    </div>
  )
}

export default PaymentRequest
