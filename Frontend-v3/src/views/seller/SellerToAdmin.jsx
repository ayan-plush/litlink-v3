import React from 'react'

const SellerToAdmin = () => {
   
    const sellerId = 65
  return (
    <div className='px-2 lg:px-7 py-5  '>
        <div className='w-full bg-[#312C23] px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
            <div className='flex w-full h-full relative justify-center'>

                

                <div className='w-full  md:pl-4 '>
                    <div className='flex justify-between items-center'>
                        {
                            sellerId &&  <div className='flex justify-start items-center gap-3'>
                                
                                <div className='relative'>
                                <img className='w-[45px] h-[45px] rounded-full border-[#ffffff8f] border-2 max-w-[45px] p-[2px]' src="https://litlink-frontend.onrender.com/images/pic10.jpg" alt="" />
                                <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                </div>

                                <div className='flex justify-center items-start pl-3 flex-col w-full'>
                                <div className='flex justify-between items-center  w-full'>
                                    <h2 className=' font-[impacted] text-[#fdebd0] tracking-wide text-lg '>Admin</h2>

                                </div>
                            </div>

                                                                
                            </div>
                        }


                    </div>

                    <div className='py-4 '>
                        <div className='bg-slate-900 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto'>
                            <div className='w-full flex justify-start items-center'>
                                <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                    <div>
                                    <img className='w-[38px] h-[38px] rounded-full border-2 border-[#ffffff6c]  max-w-[38px] p-[3px]' src="https://litlink-frontend.onrender.com/images/pic9.jpg" alt="" />

                                    </div>
                                    <div className='flex justify-center items-start flex-col w-full bg-indigo-500  text-white py-1 px-2 rounded-sm '>
                                    How are you?
                                    </div>

                                </div>

                            </div>

                            <div className='w-full flex justify-end items-center'>
                                <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                    <div>
                                    </div>
                                    <div className='flex justify-center items-start flex-col w-full bg-red-500  text-white py-1 px-2 rounded-sm '>
                                    Awesome sauce wbu?
                                    </div>
                                    <img className='w-[38px] h-[38px] rounded-full border-2 border-[#ffffff6c]  max-w-[38px] p-[3px]' src="https://litlink-frontend.onrender.com/images/pic12.jpg" alt="" />

                                </div>

                            </div>

                        </div>

                    </div>
                    <form className="flex gap-3">
                        <input className='w-full autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] flex justify-between px-2 border border-[#fff2df90] items-centerm py-[5px]  focus:border-[#fff2dfe8] overflow-auto placeholder-[#fff2df23] rounded-md outline-none bg-transparent text-[#fff2df]' type="text" placeholder='Enter Your Message' />
                        <button className='bg-indigo-500 hover:bg-indigo-600 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center'>Send</button>
                    </form>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default SellerToAdmin
