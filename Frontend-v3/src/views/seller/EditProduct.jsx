import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaImage, FaRegWindowClose } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { get_category } from '../../store/Reducers/categoryReducer'
import { update_product, messageClear,get_product,update_product_image } from '../../store/Reducers/productReducer'
import { PropagateLoader,ClipLoader } from 'react-spinners'
import { overrideStyle } from '../../utils/utils'

const EditProduct = () => {
    const {productId} = useParams()
    const { categories } = useSelector(state=>state.category)
    const { userInfo } = useSelector(state=>state.auth)
    const {loader,product,imageLoader,successMessage,errorMessage} = useSelector(state=>state.product)
    const [tagShow,setTagShow] = useState(false)
    const [tags,setTags] = useState([])
    const tagHandle = (c) => {
            if(tags.length>0){
            if(!tags.includes(c)){
                const temp = tags
                temp.push(c)
                setTags(temp)}
            }
            else {
                setTags([c])

            } 
            
        }
        const removeTag = (i) => {
            const filterTag = tags.filter((tags,index)=> index !== i)
            const length = tags.length
            if(length>0){
            setTags(filterTag)
            }
            else{
                toast.error("Add another tag before removing")
            }
            
    
    }
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_product(productId))        
    },[productId]) 

    const [state,setState] = useState({
        name: "",
        description:  "",
        discount:  "",
        price:  "",
        author:  "",
        stock:  ""
    })

    const inputHandle = (e)=> {

        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }

    const [cateShow,setCateShow] = useState(false)
    const [category,setCategory] = useState([])
    const [searchValue,setSearchValue] = useState('')
    const [allCategory,setAllCategory] = useState([])
    
    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)        
        setAllCategory(categories)
        if(value){
            let srcValue = categories.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        }

    }

    const [images,setImages] = useState([])
    const [imageShow,setImageShow] = useState([])

    const changeImage = (img,files) => {
        if(files.length>0){
            dispatch(update_product_image({
                oldImage: img,
                newImage: files[0],
                productId: productId
            }))
        }
        

    }

    useEffect(()=>{

        setState({
            name: product?.name,
            description: product?.description,
            discount: product?.discount,
            price: product?.price,
            author: product?.author,
            stock: product?.stock,
        })
        setCategory(product?.category)
        {product.tag?setTags(product?.tag):setTags([])}
        setImageShow(product?.images)
    
    
    },[product])




    useEffect(()=>{
        dispatch(get_category({
            page: "",
            searchValue: '',
            perPage: ""
        }))
        
    },[])  

    // const imageHandle = (e)=> {
    //     const files = e.target.files
    //     const length = files.length
    //     if(length > 0){
    //         setImages([...images, ...files])
    //         let imageUrl = []
    //         for (let i = 0; i < length; i++) {
    //             imageUrl.push({url: URL.createObjectURL(files[i])})                
    //         }
    //         setImageShow([...imageShow, ...imageUrl])
    //     }
        

    // }

    // const removeImage = (i) => {

    //         const filterImage = images.filter((img,index)=> index !== i)
    //         const filterImageUrl = imageShow.filter((img,index) => index!== i )
    //         const length = images.length
    //         if(length>1){
    //         setImages(filterImage)            
    //         setImageShow(filterImageUrl)
    //         }
    //         else{
    //             toast.error("Add another picture before removing")
    //         }
            

    // }

    useEffect(()=> {

        if(successMessage){
            
          toast.success(successMessage)
          dispatch(messageClear()) 
          setState({
            name: product?.name,
            description: product?.description,
            discount: product?.discount,
            price: product?.price,
            author: product?.author,
            stock: product?.stock
          })
          setCategory(category) 
          setTags(product.tag)        
        }
      
        if(errorMessage){
           
          toast.error(errorMessage)
          dispatch(messageClear())
          
        }
        
      
      },[successMessage,errorMessage])

      const update = (e) => {
        e.preventDefault()
        const obj = {
            name: state.name,
            description: state.description,
            discount: state.discount,
            price: state.price,
            author: state.author,
            stock: state.stock,
            productId: productId,
            category,
            shopName: userInfo.name,
            tags: tags
        }
        dispatch(update_product(obj))
      }

    useEffect(()=>{
        setAllCategory(categories)
        
    },[categories]) 


    
    

  return (
    <div className='px-2 lg:px-7 pt-5  '>
        <div className=' w-full p-4 bg-[#312C23] rounded-md'>
            <div className='flex justify-between items-center pb-4 text-[#fff2df]'>
                <h1 className='text-xl font-[impacted]'>Edit Book</h1>
                <Link to='/seller/dashboard/products' className='bg-indigo-500 hover:border-indigo-500 border border-[#312C23] text-white px-7 py-2 rounded-md'>All Books</Link>

            </div>
            <div>
                <form onSubmit={update}>
                    <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#fff2df]'>
                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='name'>Book Name</label>
                            <input onChange={inputHandle} value={state.name} type="text" name='name' id='name' placeholder='Book Name' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='author'>Book Author</label>
                            <input onChange={inputHandle} value={state.author} type="text" name='author' id='author' placeholder='Book Author' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='stock'>Stock</label>
                            <input onChange={inputHandle} value={state.stock} type="text"  name='stock' id='stock' placeholder='Stock' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            
                        </div>

                        <div className='flex flex-col w-full gap-1 relative'>
                            <label htmlFor='category'>Book Genre</label>
                            <input readOnly onClick={()=> setCateShow(!cateShow)} onChange={inputHandle} value={category} type="text" id='category' placeholder='Genre' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />

                            <div className={`absolute top-[101%] bg-slate-900 w-full rounded-md mt-2 text-white transition-all ${cateShow ? 'scale-100' :'scale-0'}`}>
                                <div className='w-full px-4 py-2 fixed'>
                                    <div className='flex justify-between items-center'>
                                    <input value={searchValue} onChange={categorySearch}  type="text" placeholder='Search' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]'  />
                                    <div onClick={()=>setCateShow(!cateShow)}><FaRegWindowClose/></div>
                                    
                                    </div>

                                </div>
                                <div className='pt-14'>
                                    <div className='flex justify-start items-start flex-col h-[200px] overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] '>
                                        {
                                            
                                            allCategory.map((c,i)=><span key={i} className={`px-4 py-2 w-full hover:bg-indigo-500 text-white w-ful cursor-pointer ${category === c.name && 'bg-indigo-500'}`} onClick={
                                                ()=>{
                                                setCateShow(false)
                                                setCategory(c.name)
                                                setSearchValue('')
                                                setAllCategory(categories)

                                            }}> {c.name}</span>)
                                        }

                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>


                    <div className='flex flex-col border-b-2 border-[#fff2df23] py-2 mb-3 md:flex-row gap-4 w-full text-[#fff2df]'>
                        <div className='lg:flex w-full md:w-1/2 gap-1'>
                            <div className='flex-col md:w-1/2 flex mb-3 px-1 w-full gap-1'>
                            <label htmlFor='price'>Price</label>
                            <input onChange={inputHandle} value={state.price} type="text" name='price' id='price' placeholder='Price' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            </div>

                            <div className='flex flex-col md:w-1/2 relative w-full gap-1 '>
                                <label htmlFor='tags'>Book Tags</label>
                                <input readOnly onClick={()=> setTagShow(!tagShow)} onChange={tagHandle} value={tags} type="tags" id='tags' placeholder='Tags' className=' hidden autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                                <div onClick={()=> setTagShow(!tagShow)} className=' overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  flex md:w-full gap-1 autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' >
                                    {
                                        tags?.length>0? tags.map((t,i)=><div className='bg-[#ffffff24] rounded-md flex items-center w-[100px] relative justify-between px-1' key={i}><span className='w-[90px] relative flex overflow-clip'>{t.slice(0,10)}</span><FaRegWindowClose onClick={()=>removeTag(i)}/></div>) : <h1 className='text-[#fff2df23]'>Add Tags</h1>
                                    }
                                </div>
    
                                <div className={`absolute top-[70px] bg-slate-900 w-full rounded-md mt-2 text-white transition-all ${tagShow ? 'scale-100' :'scale-0'}`}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <div className='flex justify-between items-center'>
                                        <input value={searchValue} onChange={categorySearch}  type="text" placeholder='Search' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]'  />
                                        <div onClick={()=>setTagShow(!tagShow)}><FaRegWindowClose/></div>
                                        
                                        </div>
    
                                    </div>
                                    <div className='pt-14'>
                                        <div className='flex justify-start items-start flex-col h-[200px] overflow-x-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] '>
                                            {
                                                
                                                allCategory.map((c,i)=><span key={i} className={`px-4 py-2 w-full hover:bg-indigo-500 text-white w-ful cursor-pointer ${tags.includes(c.name) && 'bg-indigo-500'}`} onClick={
                                                    (e)=>{
                                                    setTagShow(false)
                                                    tagHandle(c.name)
                                                    setSearchValue('')
                                                    setAllCategory(categories)}
                                                }>{c.name}</span>)
                                            }
    
                                        </div>
    
                                    </div>
    
                                </div>
                            </div>
                            
                            {/* <div className='flex-col flex px-1 w-full gap-1'>
                            <label htmlFor='discount'>Discount</label>
                            <input onChange={inputHandle} value={state.discount} type="text" name='discount' id='discount' placeholder='Discount' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />

                            </div> */}

                       
                            
                        </div>

                        {/* <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='brand'>Book Author</label>
                            <input onChange={inputHandle} value={state.brand} type="text" name='brand' id='brand' placeholder='Book Author' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                        </div> */}

                        <div className='flex flex-col md:w-1/2 w-full gap-1'>
                            <label htmlFor='description'>Description</label>
                            <textarea cols="30" rows="10" onChange={inputHandle} value={state.description} type="text" name='description' id='description' placeholder='Description' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            
                        </div>

                        

                    </div>

                    <div className=' grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#fff2df] mb-4'>
                       
                            {
                             imageShow?.map((img,i) =>
                             <div key={i} className=' bg-[#443d30] h-[240px] relative '>
                                {
                                        imageLoader ? <span className='flex h-full justify-center items-center'><ClipLoader color='white' /></span>  : <><label  htmlFor={i}>
                                        <img className='w-full h-full object-scale-down cursor-pointer  rounded-sm' src={img} alt="" />
                                        <FaImage className='absolute cursor-pointer right-5 bottom-5'/>
                                    </label>
                                   
                                    <input onChange={(e)=> changeImage(img,e.target.files)} type="file" className='hidden' id={i}  ></input></>
                                }
                                {/* <span ><FaRegWindowClose  className='absolute right-5 top-5 hover:text-red-400 cursor-pointer' /></span> */}
                             </div>
                            )
                            }
                        
                        {/* <label htmlFor='image' className='flex rounded-md text-[#fff2df] justify-center items-center flex-col h-[240px] w-full cursor-pointer border border-dashed border-[#fff2df23] hover:border-[#fff2df58]'>
                                                <span><FaImage/></span>
                                                <span className='font-extralight '>Select Image</span>
                        </label>
                        <input className='hidden'  multiple type='file' name='image' id='image'></input> */}

                    </div>


                    <div className='flex'>
                    {/* <button  className='bg-indigo-500 hover:border-indigo-500 border border-[#312C23] text-white px-7 py-2 rounded-md'>Add Book</button> */}
                    <button disabled={loader ? true : false} className=' w-[250px] bg-indigo-500 hover:border-indigo-500 border border-[#312C23] text-white px-7 py-2 rounded-md'>
                        {
                            loader ? <PropagateLoader color='white' cssOverride={overrideStyle} /> : 'SAVE CHANGES'
                        }
                        
                        </button>
                    </div>


                </form>
            </div>
        </div>
      
    </div>
  )
}

export default EditProduct




