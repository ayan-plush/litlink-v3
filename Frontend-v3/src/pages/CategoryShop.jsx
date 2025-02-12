import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { Range } from 'react-range';
import {AiFillStar} from 'react-icons/ai'
import {CiStar} from 'react-icons/ci'
import Categories from '../components/Categories';
import FeatureProducts from '../components/products/FeaturedProducts';
import {BsFillGridFill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'
import ShopProducts from '../components/products/ShopProducts';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { get_products,price_range_product,query_products } from '../store/Reducers/homeReducer';
import SearchHeader from '../components/SearchHeader';



const CategoryShop = () => {
    const [filter,setFilter] = useState(true)
    const {categories,totalProducts,display_products,priceRange} = useSelector(state => state.home)
    let [searchParamas, setSearchParams] = useSearchParams()
    const category = searchParamas.get('category')
    const [state, setState] = useState({values: [priceRange.low, priceRange.high]})
    const [rating, setRating] = useState('')
    const [sortPrice, setSortPrice] = useState('')

    const [styles, setStyles] = useState('grid')
    const [perPage, setPerPage] = useState(9)
    const [pageNumber, setPageNumber] = useState(1)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(price_range_product())
    },[])
    useEffect(() => {
        setState({
            values: [priceRange.low, priceRange.high]
        })
    },[priceRange])
    useEffect(() => {
        dispatch(query_products({
            lowPrice: state.values[0] || '' ,
            highPrice: state.values[1] || '' ,
            category,
            rating,
            sortPrice,
            perPage,
            pageNumber,

        }))
    },[state.values[0],state.values[1],category,rating,sortPrice,pageNumber,perPage])



    return (
        <div className='bg-[#9f9279] bg-cover bg-center bg-[url("http://localhost:5173/images/paperbg.jpg")] h-screen overflow-x-hidden w-full'>
           <Header/>
           <SearchHeader/>

           <section className='py-16'>
            <div className='w-[85%] max-md:w-[80%] max-sm:w-[90%] max-lg:w-[90%] h-full mx-5'>
                <div className={`max-md:block hidden ${!filter?'mb-6':'mb-0'}`}>
                    <button onClick={()=>setFilter(!filter)} className='text-center w-full py-2 px-3 bg-indigo-500 rounded-md text-white'>
                        Filter Books
                    </button>
                </div>

        <div className='w-full flex max-sm:flex-wrap '>
                <div className={`w-3/12 max-md-lg:w-4/12 md:pl-15 max-md:w-full pr-8 ${filter ? 'max-md:h-0 max-md:overflow-hidden max-md:mb-6' : 'max-md:h-auto max-md:overflow-auto max-md:mb-0' } `}>
    
                    <div className='py-2 px-2 flex flex-col gap-5'>
            <h2 className='text-3xl font-[impacted] mb-3 text-[#312C23]'> Page Count</h2>
             
             <Range
                step={5}
                min={priceRange.low}
                max={priceRange.high}
                values={(state.values)}
                onChange={(values) => setState({values})}
                renderTrack={({props,children}) =>   (
                    
                    <div {...props} className='w-full h-[6px] bg-[#b7a37e] rounded-full cursor-pointer'>
                        {children}
                    </div>
                )}               
                
                renderThumb={({ props }) => (
                    <div className='w-[15px] h-[15px] bg-[#312C23] border-[#312C23] rounded-full' {...props} />
    
                )} 
             />  
         <div>
         <span className='text-[#312C23] font-bold text-lg'>{Math.floor(state.values[0])} - {Math.floor(state.values[1])}</span>
                </div>
            </div>

            <div className='py-3 flex flex-col gap-4'>
            <h2 className='text-3xl font-[impacted] mb-3 text-[#312C23]'>Minimum Rating </h2>
            <div className='flex flex-col gap-3'>
                 <div onClick={() => setRating(5)} className=  {` ${rating===5?'text-[#312C23]':'text-[#312c237e]'}  flex justify-start items-start gap-2 text-xl cursor-pointer`}>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                  </div>
                  <div onClick={() => setRating(4)} className=  {` ${rating===4?'text-[#312C23]':'text-[#312c237e]'}  flex justify-start items-start gap-2 text-xl cursor-pointer`}>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><CiStar/> </span>
                  </div>
                  <div onClick={() => setRating(3)} className=  {` ${rating===3?'text-[#312C23]':'text-[#312c237e]'}  flex justify-start items-start gap-2 text-xl cursor-pointer`}>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                  </div>
                  <div onClick={() => setRating(2)} className=  {` ${rating===2?'text-[#312C23]':'text-[#312c237e]'}  flex justify-start items-start gap-2 text-xl cursor-pointer`}>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                  </div>
                  <div onClick={() => setRating(1)} className=  {` ${rating===1?'text-[#312C23]':'text-[#312c237e]'}  flex justify-start items-start gap-2 text-xl cursor-pointer`}>
                    <span><AiFillStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                  </div>
                  <div onClick={() => setRating(0)} className=  {` ${rating===0?'text-[#312C23]':'text-[#312c237e]'}  flex justify-start items-start gap-2 text-xl cursor-pointer`}>
                  <span><CiStar/> </span>
                  <span><CiStar/> </span>
                  <span><CiStar/> </span>
                  <span><CiStar/> </span>
                  <span><CiStar/> </span>
                  </div>
            </div> 
         </div>
                </div>


                <div className='w-9/12  max-md-lg:w-8/12 max-md:w-full'>
                    <div className='pl-8 max-md:pl-0'>
                        <div className='py-4 mb-10 px-3 rounded-md flex justify-between items-start border border-[#312c235e]'>
                        <h2 className=' font-[impacted] uppercase text-2xl max-md-lg:text-[20px] text-[#312C23]'>{totalProducts===1 ? `${totalProducts} Book`:`${totalProducts} Books`} </h2>

                <div className='flex justify-center items-center gap-3'>
                    
                    <select onChange={(e)=>setSortPrice(e.target.value)} className='p-1 bg-[#baab8d] border border-[#312c235e] outline-0 text-[#312C23] font-semibold' name="" id="">
                        <option value="">Sort By Pages</option>
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High to Low </option>
                    </select>
                <div className='flex justify-center items-start gap-4 max-md-lg:hidden'>
                    <div onClick={()=> setStyles('grid')} className={`p-2 ${styles === 'grid' && ''} text-[#312C23] hover:bg-slate-300 cursor-pointer rounded-sm `} >
                        <BsFillGridFill/>  
                    </div>
                    <div onClick={()=> setStyles('list')} className={`p-2 ${styles === 'list' && ''} text-[#312C23] hover:bg-slate-300 cursor-pointer rounded-sm `} >
                        <FaThList/>  
                    </div>
                </div>


                </div>
                        </div>
                        <div className='pb-8'>
                        <h2 className='text-3xl font-[impacted] uppercase pb-10 text-[#312C23]'>{category? `GENRE : ${category}`:''}</h2>

                        <ShopProducts styles={styles} />  
                        </div>
                        {totalProducts>perPage?<div className='flex justify-end'>
                            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalItem={totalProducts} perPage={perPage} showItem={Math.floor(totalProducts / perPage )} />
                        </div>: ''}
 
                    </div> 
                </div>
                 
                
         </div>

            </div>
            
            
            
           </section>


           <Footer/>
        </div>
    );
};
export default CategoryShop;