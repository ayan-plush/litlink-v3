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
    <div className='bg-[#9f9279] bg-cover bg-center bg-[url("./public/images/paperbg.jpg")] h-screen overflow-x-hidden w-full'>
      <Header />
      <PicMarquee products={home_products} />
      <Categories />
      <div className='py-[45px]'>
        <FeatureProducts latest_products = {latest_products}/>
      </div>
      <Footer/>
    </div>
  )
}

export default ShopHome
