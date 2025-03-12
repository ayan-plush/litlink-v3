import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from 'react-multi-carousel'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {CiStar} from 'react-icons/ci'
import 'react-multi-carousel/lib/styles.css'
import Rating from '../components/Rating'
import 'swiper/css'; 
import 'swiper/css/pagination';
import {Swiper, SwiperSlide } from 'swiper/react';
import Pagination from './../components/Pagination';
import Reviews from '../components/Reviews'
import { useDispatch, useSelector } from 'react-redux'
import { get_category, get_product_details, get_products } from '../store/Reducers/homeReducer'
import SearchHeader from '../components/SearchHeader'
import { FaEye, FaRegHeart } from 'react-icons/fa'
import { RiShoppingCartLine } from 'react-icons/ri'
import { IoChatbubbleOutline } from "react-icons/io5";
import toast from 'react-hot-toast'
import { add_to_wishlist, messageClear } from '../store/Reducers/wishlistReducer'
import { PropagateLoader, RingLoader } from 'react-spinners'



const ProductDetails = () => {
    
    const {productId} = useParams()
    const {product,latest_products,loader} = useSelector(state => state.home)
    const {errorMessage,successMessage} = useSelector(state=>state.wishlist)
    const {userInfo} = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(()=> {
    
        if(successMessage){
          toast.success(successMessage)
          dispatch(messageClear())
        }
      
        if(errorMessage){
          toast.error(errorMessage)
          dispatch(messageClear())
        }
        
      
      },[successMessage,errorMessage])

      const messagesEndRef = useRef(null)
          
              useEffect(() => {
              if (messagesEndRef.current) {
                  messagesEndRef.current.scrollIntoView()
              }
            }, [productId])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_product_details(productId))
        dispatch(get_products())
        setLoading(true)
    },[productId])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdtablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 2
        },
    }
        const add_wishlist = (productId) => {
            if(userInfo){
                dispatch(add_to_wishlist({
                    userId: userInfo._id,
                    productId: productId,
                }))
            }
            else{
                navigate('/login')
            }
        }
    

    const banner = {
       
        desktop: {
            breakpoint: { max: 9000, min: 0 },
            items: 1
        },
       
    }

    const [state, setState] = useState(true)

    const [loading, setLoading] = useState(true);
    
        setTimeout(()=>{
          setLoading(false)
        },2000)




  return (
    <div  className='bg-[#9f9279] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")] overflow-y-scroll h-screen overflow-x-hidden w-full'>
        <div className={`${loader||loading?'':'hidden'} w-screen flex items-center justify-center z-[1999] h-screen fixed bg-[#352217] `}>
        <RingLoader className='w-[100px] h-[100px]' color='#FBF1D7' />
        </div>
      <Header/>
      <div ref={messagesEndRef} className='max-md:pt-26 pt-35'>
           <SearchHeader/>
        </div>
      <section className='mx-10  pt-10 flex max-md:flex-col gap-2'>
        <div className='w-3/12 pt-5 max-md:w-full'>


        {/* <img className=' h-[400px] w-[250px] object-scale-down' src="https://litlink-frontend.onrender.com/images/bpic10.jpg" alt="" /> */}

        {
            product?        
        <Carousel
                    autoPlay={false}
                    infinite={false}
                    arrows={true} 
                    responsive={banner}
                >
                {
                    product?.images?.map((c, i) => <Link className='' key={i} to='#'>
                        <div className='w-full h-full flex justify-center '>
                        <img className='h-[400px] object-scale-down ' src={c} alt="" />
        
                        </div>
                        
                    </Link> )
                }
                
        </Carousel>
        : ''
        }




        </div>
        <div className='w-8/12 text-[#312C23] flex flex-col justify-start items-start max-md:w-full'>
        <h1 className=' pt-4 font-[impacted] text-6xl'>{product?.name}</h1>
        <h6 className='font-serif text-xl pl-3'>{product?.author}</h6>
        <div className='w-full pl-3 pt-4 font-extralight gap-2 uppercase flex items-center'>
                        <Rating ratings={product?.rating} /> <h1 className='text-xl pb-1 font-serif'>{product?.rating}</h1>
                </div>
        <span className='mt-5 font-serif text-md tracking-tight font-extralight pl-3'>DESCRIPTION:</span>
        <p className='text-md tracking-tight font-extralight pl-3'>{product?.description}
        </p>
        <div className='flex mt-5'><span className=' font-extralight pl-3 pr-2 '>Genres:</span> {product?.category}</div>
        <div className='flex'><span className=' font-extralight pl-3 pr-2 '>Tags:</span> <div className='flex gap-2'>{product?.tag?.map((t,i)=> <div key={i} className='underline'>{t}</div>)}</div></div>

        <div className='flex mt-2 text-md font-extralight pl-3'><span>Owner:</span><Link to={`/seller/about-customer/${product.sellerId}`} className='px-2'>{product?.shopName}</Link><button className='bg-[#312c2362] text-[#f7e1b9] px-2 rounded-md underline border border-transparent hover:border-[#312c2362]'><IoChatbubbleOutline className='cursor-pointer'
         onClick={()=> {userInfo?navigate(`/seller/dashboard/chat-customer/${product.sellerId}`):navigate('/login')}} /></button></div>
        <div className='flex mt-2 text-sm font-extralight pl-3'><span>Status:</span><span className='px-2'>{product?.status?.name==='Available'?'Available':'Unavailable'}</span></div>
        {/* <div className='mt-2 text-md font-light uppercase pl-3'> <button onClick={() => setState(!state)} className={`py-1 hover:text-white rounded-xl cursor-pointer px-5 hover:bg-[#059473] ${state === 'reviews' ? 'bg-[#312c23] text-white' : 'bg-[#059473] text-white'} rounded-sm`}>Reviews </button> */}
        {/* </div> */}
        {/* <div className='pl-5'>
            {
                !state? <Reviews/>: <></>
            }
        </div> */}
        </div>
        
      </section>
      



    <section>
    <div className='w-[85%] max-md:w-[80%] max-sm:w-[90%] max-lg:w-[90%] h-full mx-auto'>
    <div className='flex pl-3  justify-start text-[#312C23] items-center'><h1 className=' pt-10 font-[impacted] text-4xl'>OTHER RECOMENDATIONS:</h1></div>
    <div className='max-md-lg:hidden'>
        <Carousel className='pl-3  pt-5'
                        autoPlay={false}
                        infinite={true}
                        arrows={true} 
                        responsive={responsive}
                        transitionDuration={500}
                    >
                    {
                        latest_products?.map((p,i) => <div key={i} className=' group transition-all duration-500 hover:shadow-md hover:-mt-3'>
                        <div className='relative overflow-hidden'>
                        
            {    p.rating===5?    <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-indigo-500 font-semibold text-xs left-2 top-2'>{p.rating} ★</div> : ''
            }        <img className='w-[200px] h-[240px] object-scale-down' src={p.images[0]} alt="" />   
                    <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                        <li onClick={()=>add_wishlist(p._id)} className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                        <FaRegHeart />
                        </li>
                        <Link to={`/product/details/${p?._id}`}  className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                        <FaEye />
                        </Link>
                        <li className='w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:text-white hover:rotate-[720deg] transition-all'>
                        <RiShoppingCartLine />
                        </li>
                    </ul>        
                        </div>
                        <div className='py-3 text-[#312C23] px-2'>
                        <h2 className='font-bold'>{p.name}</h2>
                        <div className='flex justify-start items-center gap-3'>
                            <span className='text-md font-semibold'>By: {p.author}</span>
            
                        </div>
                        <div className='flex'>
                                <Rating ratings={p.rating} />
                            </div>
                    </div>
                    </div>
                    )
                    }
        </Carousel>
    </div>
    
    <div className='mt-5 md-lg:hidden'>
    <Swiper
    slidesPerView='auto'
    breakpoints={{
        1280 : {
            slidesPerView: 3
        },
        565 : {
            slidesPerView: 2
        }
    }}
    spaceBetween={25}
    loop={true}
    pagination={{
        clickable: true,
        el: '.custom_bullet'
    }}
    modules={[Pagination]}
    className='mySwiper' 
    > 

    {
        latest_products?.map((p, i) => {
            return (

                <SwiperSlide key={i}>
                    <div onClick={()=>navigate(`/product/details/${p?._id}`)} className='block'>
                        <div className='relative h-[270px]'>
                            <div className='w-full h-full'>
                    <img  className='w-full object-scale-down h-full' src={p.images[0]} alt="" />
                    
                        </div>
            
                </div>

            <div className='p-4 flex flex-col gap-1'>
            <h2 className='font-bold mb-2 md:h-[70px] lg:h-[60px]'>{p?.name.slice(0,30).trimEnd()}{p?.name.length>30?'...':''}</h2>
                        <div className='flex flex-col'>
                            {/* <span className='text-md font-semibold'>By: {p?.author.slice(0,10).trimEnd()}{p?.author.length>10?'...':''}</span>
                            <span className='text-md font-semibold'>Owner: {p?.shopName.slice(0,10).trimEnd()}{p?.shopName.length>10?'...':''}</span> */}
                            <span className='flex'><Rating ratings={p?.rating} /></span>                            
            </div>
            {/* <div className='flex justify-start items-center gap-3'>
                <h2 className='text-lg font-bold text-slate-600'>$434</h2>
                <div className='flex'>
                    <Rating ratings={4.5}  />
                </div>
            </div> */}
            </div>

                    </div>

                </SwiperSlide>

            )
        })
    }
    
    </Swiper>
    </div>

        <div className='w-full flex justify-center items-center py-8'>
            <div className='custom_bullet justify-center gap-3 !w-auto'> 
            </div>

        </div>

    </div>
    </section>







      <Footer/>
    </div>
  )
}

export default ProductDetails
