import React, { useEffect } from 'react'
import Header from '../components/Header'
import PicMarquee from '../components/PicMarquee'
import Categories from '../components/Categories'
import FeatureProducts from '../components/products/FeaturedProducts'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { get_products } from '../store/Reducers/homeReducer'
import { messageClear } from '../store/Reducers/wishlistReducer'
import toast from 'react-hot-toast'
import { MdArrowDownward } from 'react-icons/md'
import { IoArrowDownCircleOutline } from 'react-icons/io5'
import Spline from '@splinetool/react-spline';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



const ShopHome = () => {
  const dispatch = useDispatch()
    const {latest_products,products,home_products} = useSelector(state => state.home)
    const {successMessage,errorMessage} = useSelector(state => state.wishlist)

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
    useEffect(() => {
        dispatch(get_products())
    },[])

  return (
    <div className=' bg-[#9f9279] bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")] h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-hidden w-full'>
      {/* bg-[#9f9279] bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")] */}
      
      <div className='relative overflow-hidden max-md:h-[100%] h-[190%]'>
      <video className='absolute h-full w-full object-cover z-1 ' src={`https://res.cloudinary.com/decks92gf/video/upload/v1740898752/5283818-uhd_4096_2160_24fps_xsl1nh.mp4`} type='video/mp4' autoPlay loop muted>
          {/* <source   src={`http://localhost:5173/images/5283818-uhd_4096_2160_24fps.mp4`} type='video/mp4' /> */}
      </video>
      <div  className='absolute text-[#ffffff60]  flex items-center justify-center z-20 max-md:top-[44%] top-[48%] max-md:right-[10px] right-[30px]'>
      <IoArrowDownCircleOutline className='h-[40px] font-extralight w-[40px]'/>
      </div>
      <Header />
      <div className='absolute max-md:pt-20 w-full z-10'>
        {/* a g h 
        hlll
        nnmkk */}
      <div className='md:flex max-md:hidden max-md:pb-10 max-md:pt-10 pt-20 items-center justify-center '>
      <div className='  flex items-center w-[80%] justify-between  '>
        <div className='text-[170px] max-md:pl-5 z-10 max-md:pt-30  max-md:text-[80px]  text-[#FBF1D7]  font-[impact] flex-col '>
        <h1 className='' >READ</h1>
        <h1 className='-mt-20  max-md:-mt-10'>CONNECT</h1>
        <h1 className='-mt-20  max-md:-mt-10'>CONVERSE</h1>
        </div>
        <img className='pt-10 max-md:pt-30 max-md:absolute h-[500px] object-cover' src="http://localhost:5173/images/earthseabook.png" alt="" />
      {/* <div className='h-[800px] w-[380px] '>
      <Spline
        scene="https://prod.spline.design/wEny1-ZVTTEv7-6G/scene.splinecode" 
      />
      </div> */}
      
      
      </div>
      </div>
      
      <div className=' md:h-[900px] md:bg-[#00000042]  border-t-2 border-t-[#0000003b] md:backdrop-blur-md rounded-t-3xl'>
        <div className='md:pt-[15px] '>
        <PicMarquee products={home_products} />

        </div>
      
      </div>
      
      



      </div>


     
      </div>
      

      <div className='relative'>
      <div className=' bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")] absolute w-full z-20 md:-mt-[20px] rounded-t-3xl'>
      {/* bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")] */}
      <Categories />
      <div className='py-[45px]'>
        <FeatureProducts latest_products = {latest_products}/>
      </div>
      <Footer/>
      </div>
      </div>
      
      
      
      
    </div>
  )
}

export default ShopHome
