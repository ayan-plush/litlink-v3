import React, { useEffect, useState } from 'react'
import { lazy } from "react";
const Header = lazy(()=> import('../components/Header'));

const PicMarquee = lazy(()=> import('../components/PicMarquee'));

const Categories = lazy(()=> import('../components/Categories'));

const FeatureProducts = lazy(()=> import('../components/products/FeaturedProducts'));

const Footer = lazy(()=> import('../components/Footer'));

import { useDispatch, useSelector } from 'react-redux';
import { get_products } from '../store/Reducers/homeReducer'
import { messageClear } from '../store/Reducers/wishlistReducer'
import toast from 'react-hot-toast'
import { MdArrowDownward } from 'react-icons/md'
import { IoArrowDownCircleOutline } from 'react-icons/io5'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
const Videobanner = lazy(()=> import('../components/Videobanner'));




const ShopHome = () => {
  const dispatch = useDispatch()
    const {latest_products,products,home_products} = useSelector(state => state.home)
    const {successMessage,errorMessage} = useSelector(state => state.wishlist)
    const circle = () => {
      return <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
      <circle r="45" cx="50" cy="50" fill="red" />
    </svg>
    
    }

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // define if mouse is hovered on element
    const [isHovered, setIsHovered] = useState(false);

    // define location of mouse
    useEffect(() => {
        const setFromEvent = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    const size = isHovered ? "650" : "50";
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
      
      

      <div className=' landing-banner relative overflow-hidden max-md:h-[100%] h-[190%]'>
          
          <Videobanner/>
        {/* <video className='absolute h-full w-full object-cover z-1 ' src={`https://res.cloudinary.com/decks92gf/video/upload/v1740898752/5283818-uhd_4096_2160_24fps_xsl1nh.mp4`} type='video/mp4' autoPlay loop muted>
        </video> */}


        <div  className='absolute text-[#ffffff60]  flex items-center justify-center z-20 max-md:top-[44%] top-[48%] max-md:right-[10px] right-[30px]'>
          <IoArrowDownCircleOutline className='h-[40px] font-extralight w-[40px]'/>
        </div>

        <Header />

        <div className='text-and-image-and-marquee'>

          <div className=' cursor-none absolute max-md:pt-20 w-full z-10'>

            <div className='md:flex max-md:hidden max-md:pb-10 max-md:pt-10 pt-20 items-center justify-center '>

              <div className='  flex items-center w-[80%] justify-between  '>

                <div className='text-[170px] max-md:pl-5 z-10 max-md:pt-30  max-md:text-[80px]  text-[#FBF1D7]  font-[impact] flex-col '>

                  <h1 className='' >READ</h1>
                  <h1 className='-mt-20  max-md:-mt-10'>CONNECT</h1>
                  <h1 className='-mt-20  max-md:-mt-10'>CONVERSE</h1>

                </div>

                <img className='pt-10 max-md:pt-30 max-md:absolute h-[500px] object-cover' src="https://res.cloudinary.com/decks92gf/image/upload/v1740911456/2-removebg-preview_wabm9b.png" alt="" />
                {/* <div className='h-[800px] w-[380px] '>
                <Spline
                  scene="https://prod.spline.design/wEny1-ZVTTEv7-6G/scene.splinecode" 
                />
                </div> */}

              </div>

            </div>
            
            <div className=' md:h-[900px] md:bg-[#00000042]  md:border-t-2 md:border-t-[#0000003b] md:backdrop-blur-md rounded-t-3xl'>

              <div className='md:pt-[15px] '>

                <PicMarquee products={home_products} />

              </div>
            
            </div>

          </div>

          <motion.div animate={{
                        WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
                            mousePosition.y - size / 2
                        }px`,
                        WebkitMaskSize: `${size}px`,
                    }}
                    transition={{ ease: "backOut", duration: 0.4 }} className='absolute max-md:hidden [mask-size:100px] [mask-repeat:no-repeat]  [mask-image:url("https://res.cloudinary.com/decks92gf/image/upload/v1741013665/Circle-PNG-Clip-Art-HD-Quality_dqps3w.png")] z-20 bg-[#FBF1D7] max-md:pt-20 w-full '>

            <div className='md:flex max-md:hidden max-md:pb-10 max-md:pt-10 pt-20 items-center justify-center '>

              <div className='  flex items-center w-[80%] justify-between  '>

                <div className='text-[170px] max-md:pl-5  max-md:pt-30  max-md:text-[80px]  text-[#322116]  font-[impacted] flex-col '>

                  <h1 onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)} className='max-w-[300px]' >READ</h1>

                  <h1 onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)} className='-mt-20  max-md:-mt-10'>CONNECT</h1>

                  <h1 onMouseEnter={() => setIsHovered(true)}
                              onMouseLeave={() => setIsHovered(false)} className='-mt-20  max-md:-mt-10'>CONVERSE</h1>

                </div>

                <img className='pt-10 max-md:pt-30 max-md:absolute invisible h-[500px] object-cover' src="https://res.cloudinary.com/decks92gf/image/upload/v1740911456/2-removebg-preview_wabm9b.png" alt="" />
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

          </motion.div>

        </div>

      </div>
      

      <div className='relative products-page '>

        <div className=' bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")] absolute w-full z-20 md:-mt-[20px] rounded-t-3xl'>
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
