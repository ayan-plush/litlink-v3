import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaRegWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { get_from_wishlist, remove_from_wishlist } from '../store/Reducers/wishlistReducer';
import Rating from '../components/Rating';

const Wishlist = () => {

    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.auth)
    const {wishlist_products,wishlist_product_count} = useSelector(state => state.wishlist)

     useEffect(() => {
            dispatch(get_from_wishlist(userInfo?._id))
        },[userInfo,wishlist_product_count])
    
    const delete_wishlist_product = (productId) => {
        dispatch(remove_from_wishlist({
            userId: userInfo._id,
            productId: productId
        }))

    }



    const styles = 'grid'
    const card_products = [1,2,3]
    const outOfStockProduct = [1,2]

    return (
        <div className='bg-[#9f9279] bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")] h-screen overflow-x-hidden w-full'>
           <Header/>
           <section className='bg-[url("https://litlink-frontend.onrender.com/images/banner/library.jpg")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
            <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                <div className='w-[85%] max-md:w-[80%] max-sm:w-[90%] max-lg:w-[90%] h-full mx-auto'>
                    <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                <h2 className='text-3xl font-bold'>Wishlist </h2>
                <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                        <Link to='/'>Home</Link>
                        <span className='pt-1'>
                        <IoIosArrowForward />
                        </span>
                        <span>Wishlist </span>
                      </div>
                    </div> 
                </div> 
            </div> 
           </section>

    <section className=''>
    <div className='w-[85%] max-lg:w-[90%] max-md:w-[90%] max-sm:w-[90%] mx-auto py-16'>

        {
            card_products.length > 0 || outOfStockProduct > 0 ? <div className='flex flex-wrap'>
                <div className='w-full max-md-lg:w-full'>
                    <div className='pr-3 max-md-lg:pr-0'>
                        <div className='flex flex-col gap-3'>
                            <div className='p-4'>
                    <h2 className='text-[#312C23] font-[impacted] text-2xl'>Available Books {card_products.length}</h2>
                            </div>

                {/* {
                   card_products.map((p,i) => <div key={i} className='flex max-md:flex-col gap-2'>
                   

                   {
                       wishlist_products.map((p,i) => <div key={i} className='w-full mb-5 flex max-md:flex-col gap-2'>
                       <div className='flex relative w-full gap-2'>
                           <div className='flex gap-2 justify-start items-start'>
                       <img className='w-[90px] h-[150px] object-cover' src={`https://litlink-frontend.onrender.com/images/bpic${i+1}.jpg`} alt="" />
                       <button className='w-[20px] h-[20px] absolute hover:text-red-400 text-white top-1 left-1'><FaRegWindowClose/></button>

                       <div className='pr-4 flex py-2 flex-col text-[#312C23]'>
                       <h2 className='text-xl font-bold '>A wizard of earthsea </h2>
                       <span className='text-sm'>Author: Jara</span>
                       <span className='text-sm'>By: Jara</span>
                       </div>
                           </div>
                       </div>


                   </div>)
                   }

               </div>) 
                }  */}

                {
                    <div className={`w-full grid ${styles === 'grid' ? 'grid-cols-3 max-md-lg:grid-cols-2 max-md:grid-cols-2' : 'grid-cols-1 max-md-lg:grid-cols-2 max-md:grid-cols-2'} gap-3 `}>
                    {
                      wishlist_products?  wishlist_products?.map((p, i)=> <div key={i} className={`flex relative transition-all duration-1000 hover:shadow-md hover:-translate-y-3 ${styles === 'grid' ? 'flex-col justify-start items-start' : 'justify-start items-center max-md-lg:flex-col max-md-lg:justify-start max-md-lg:items-start'} w-full gap-4 p-1 rounded-md`}>
                            <div className={styles === 'grid' ? 'w-full  group h-[210px] max-md:h-[270px] max-xs:h-[170px] overflow-hidden' : 'max-md-lg:w-full  group h-[210px] max-md:h-[270px] overflow-hidden'}>
                                <img className=' relative h-full w-full object-scale-down' src={p?.images[0]} alt="" />
                            </div>
                            <div className='flex justify-center items-start flex-col gap-1'>
                                <h2 className='font-bold'>{p?.name}</h2>
                                <div className='flex flex-wrap justify-start items-center gap-3'>
                                    <span className='text-md font-semibold'>By: {p?.author}</span>
                                    <div className='flex'>
                                        <Rating ratings={p?.rating} />
                                    </div>
                                </div>
                            </div>
                            <FaRegWindowClose onClick={()=> delete_wishlist_product(p._id)} className='absolute hover:text-red-400 w-[20px] h-[20px] top-0 max-md:right-0 right-20'/>
                            
                        </div>
                        
                        ) : ''
                    }
                     
                </div>
                }

                {
                    outOfStockProduct.length > 0 && <div className='flex flex-col gap-3'>
                         <div className='p-4'>
                    <h2 className='text-[#312C23] font-[impacted] text-2xl'>Unavailable {outOfStockProduct.length}</h2>
                            </div>

                  <div className=' '>
                  {
                       [1].map((p,i) => <div key={i} className='w-full relative flex flex-wrap'>
                       <div className='flex  max-sm:w-full gap-2 w-7/12'>
                           <div className='flex gap-2 justify-start items-start'>
                       <img className='w-[90px] h-[150px]' src={`https://litlink-frontend.onrender.com/images/bpic${i+1}.jpg`} alt="" />
                       <button className='w-[20px] h-[20px] absolute hover:text-red-400 text-white top-1 left-1'><FaRegWindowClose/></button>

                       <div className='pr-4 py-2 flex flex-col text-[#312C23]'>
                       <h2 className='text-xl font-bold '>Product Name </h2>
                       <span className='text-sm'>Author: Jara</span>
                       <span className='text-sm'>By: Jara</span>

                       </div>
                           </div>
                       </div>


                   </div>)
                   }
                  </div>           

                    </div>
                }            



                        </div>

                    </div>
                </div>
            </div> 
            
            : <div>
                <Link className='px-4 py-1 bg-indigo-500 text-white' to='/shops' > Shop Now</Link>
            </div>
        }

    </div>

    </section>

           <Footer/>
        </div>
    );
};

export default Wishlist;
