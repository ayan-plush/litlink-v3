import React from 'react'

const OrderDetails = () => {
  return (
    <div className='px-2 lg:px-7 pt-5  '>
        <div>
            <h1 className='text-[#312C23] text-xl uppercase font-[impacted] mb-3'>Seller Details</h1>
        </div>
        <div className='w-full rounded-md p-4 bg-[#312C23]'>
            <div className='flex items-center justify-end'>
                <select className='px-4 py-2 focus:border-[#fff2df73] outline-none bg-[#312C23] text-[#fff2df]  border border-[#fff2df23] rounded-md'>
                    <option value="">Pending</option>
                    <option value="">Warehouse</option>
                    <option value="">Placed</option>
                    <option value="">Cancelled</option>
                </select>
            </div>
                
            <div className='w-full lg:flex lg:flex-nowrap text-[#fdebd0]'>
                <div className='lg:w-3/12 w-full pt-4'>
                <h1 className='font-[impacted] tracking-wide uppercase text-lg'>Invoice</h1>
                <div className='flex justify-start pt-2 items-center'>
                    <h2>#344444 </h2> <span>3 jan 2025</span>
                </div>

                <div className='flex flex-wrap '>
                    <div className='w-full'>
                        <div className='pr-3 text-[] '>
                            <div className='flex flex-col gap-1'>
                                <h2 className='pb-1 font-semibold'> Delivered to: Raju Khan</h2>
                                <p>
                                    <span className='text-sm'>Address: New Delhi bawana st. 111345 </span>
                                </p>
                            </div>
                            <div className='flex justify-start items-center gap-3 '>
                                <h2>Payemnt Status: </h2>
                                <span className='text-base'>Paid</span>                              

                            </div>
                            <span className='text-base'>Price: $456</span>

                        </div>

                    </div>

                </div>

                
                </div>

                <div className='lg:w-4/12 w-full'>
                <div className='px-0 md:px-5 py-2'>
                    <div className='py-2 text-lg'>
                        <h2 className='font-[impacted] tracking-wide uppercase'>Items</h2>
                    </div>

                    <div className='flex justify-between text-[#fdebd0] text-sm flex-col gap-2 p-4 bg-[#564d3d] rounded-md '>
                        {/* <div className='flex gap-2 '>
                            <span className='font-semibold'>Name :</span>
                            <span className='font-light'>kachina</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Email :</span>
                            <span className='font-light'>kachina@gmail.com</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Role :</span>
                            <span className='font-light'>Seller</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'>Status :</span>
                            <span className='font-light'>Active</span>
                        </div>

                        <div className='flex gap-2 '>
                            <span className='font-semibold'> Payment Status :</span>
                            <span className='font-light'>Active</span>
                        </div> */}
                        <div className='flex gap-3 text-md p-2 border-[#312C23] border-2 rounded-md '>
                            <img className='w-[45px] h-[70px]' src="http://localhost:5173/images/category/6.jpg" alt="" />
                            <div className='' >
                                <div>
                                    <h2>God of small things</h2>
                                </div>
                                
                                <div>
                                    <span >Brand: </span>
                                    {/* brand=author */}
                                    <span className='px-2'>
                                        Arundhati roy
                                    </span>
                                </div>

                                <div>
                                    <span >Quantity: </span>
                                    <span className='px-2'>3</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-3 text-md p-2 border-[#312C23] border-2 rounded-md '>
                            <img className='w-[45px] h-[70px]' src="http://localhost:5173/images/category/5.jpg" alt="" />
                            <div className='' >
                                <div>
                                    <h2>God of small things</h2>
                                </div>
                                
                                <div>
                                    <span >Brand: </span>
                                    {/* brand=author */}
                                    <span className='px-2'>
                                        Arundhati roy
                                    </span>
                                </div>

                                <div>
                                    <span >Quantity: </span>
                                    <span className='px-2'>3</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-3 text-md p-2 border-[#312C23] border-2 rounded-md '>
                            <img className='w-[45px] h-[70px]' src="http://localhost:5173/images/category/4.jpg" alt="" />
                            <div className='' >
                                <div>
                                    <h2>God of small things</h2>
                                </div>
                                
                                <div>
                                    <span >Brand: </span>
                                    {/* brand=author */}
                                    <span className='px-2'>
                                        Arundhati roy
                                    </span>
                                </div>

                                <div>
                                    <span >Quantity: </span>
                                    <span className='px-2'>3</span>
                                </div>
                            </div>
                        </div>


                    </div>
                    
                </div>

                </div>





                <div className='lg:w-4/12 w-full'>
                <div className='px-0 md:px-5 py-2'>
                    <div className='py-2 text-lg'>
                        <h2 className='font-[impacted] tracking-wide uppercase'>Sellers</h2>
                    </div>

                    <div className='flex justify-between text-[#fdebd0] text-sm flex-col gap-2 p-4 bg-[#564d3d] rounded-md '>

                        <div className='justify-start border-[#312C23] py-1 border-2 rounded-md '>
                            <div className='flex justify-start items-center mb-2 px-2 gap-3'>
                            <h2 className='font-semibold'> Seller 1:</h2>
                            <span>Order Pending</span>
                            </div>
                            
                            <div className='flex gap-3 text-md px-2 '>
                            <img className='w-[55px] h-[55px] object-cover ' src="http://localhost:5173/images/category/4.jpg" alt="" />
                            <div className='-mt-1' >
                                <div>
                                    <h2>God of small things</h2>
                                </div>
                                
                                <div>
                                    <span >Brand: </span>
                                    {/* brand=author */}
                                    <span className='px-2'>
                                        Arundhati roy
                                    </span>
                                </div>
                                <div>   
                                    <span >Quantity: </span>
                                    <span className='px-2'>3</span>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className='justify-start border-[#312C23] py-1 border-2 rounded-md '>
                            <div className='flex justify-start items-center mb-2 px-2 gap-3'>
                            <h2 className='font-semibold'> Seller 1:</h2>
                            <span>Order Pending</span>
                            </div>
                            
                            <div className='flex gap-3 text-md px-2 '>
                            <img className='w-[55px] h-[55px] object-cover ' src="http://localhost:5173/images/category/4.jpg" alt="" />
                            <div className='-mt-1' >
                                <div>
                                    <h2>God of small things</h2>
                                </div>
                                
                                <div>
                                    <span >Brand: </span>
                                    {/* brand=author */}
                                    <span className='px-2'>
                                        Arundhati roy
                                    </span>
                                </div>
                                <div>   
                                    <span >Quantity: </span>
                                    <span className='px-2'>3</span>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className='justify-start border-[#312C23] py-1 border-2 rounded-md '>
                            <div className='flex justify-start items-center mb-2 px-2 gap-3'>
                            <h2 className='font-semibold'> Seller 1:</h2>
                            <span>Order Pending</span>
                            </div>
                            
                            <div className='flex gap-3 text-md px-2 '>
                            <img className='w-[55px] h-[55px] object-cover ' src="http://localhost:5173/images/category/4.jpg" alt="" />
                            <div className='-mt-1' >
                                <div>
                                    <h2>God of small things</h2>
                                </div>
                                
                                <div>
                                    <span >Brand: </span>
                                    {/* brand=author */}
                                    <span className='px-2'>
                                        Arundhati roy
                                    </span>
                                </div>
                                <div>   
                                    <span >Quantity: </span>
                                    <span className='px-2'>3</span>
                                </div>
                            </div>
                            </div>
                        </div>

                    </div>


                    
                    
                </div>

                </div>






            </div>

            

        </div>


      
    </div>
  )
}

export default OrderDetails

