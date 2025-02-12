import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css'
import { useSelector } from 'react-redux';
const Categories = () => {
    const {categories} = useSelector(state => state.home)

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
    return (
        <div className='w-[87%] mx-auto pt-[45px] relative'>
             <div className='w-full'>
            <div className='text-center flex justify-center items-center flex-col text-4xl text-[#312C23] font-[impacted] relative pb-[45px]'>
                <h2>GENRES</h2>
                <div className='w-[100px] h-[2px] bg-[#312C23] mt-4'></div>
            </div>
            </div>
                <Carousel
                    autoPlay={true}
                    infinite={true}
                    arrows={true} 
                    responsive={responsive}
                    transitionDuration={500}
                >
                {
                    categories?.map((c, i) => <Link to={`/products?category=${c.name}`} className=' block' key={i} >
                        <div className='w-full h-full p-3 overflow-hidden'>
                        <img className=' h-[200px] relative ' src={c.image} alt="" />
                        <div className='absolute bottom-6 w-full mx-auto font-extralight uppercase flex justify-center items-center'>
                         <span className='py-[2px] px-6 bg-[#312C23] text-[#ffffff89]'>{c.name.slice(0,10)}{c.name.length>10? '...': ''}</span>
                        </div>
                        </div>
                        
                    </Link> )
                }
                </Carousel>        
         </div>
             
    );
};
export default Categories;

