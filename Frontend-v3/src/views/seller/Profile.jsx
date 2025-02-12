import React, { useEffect,useState } from 'react'
import { FaEdit, FaImages } from 'react-icons/fa'
import {FadeLoader, PropagateLoader} from 'react-spinners'
import toast from 'react-hot-toast'
import { FaImage, FaRegWindowClose } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { messageClear, profile_image_upload,add_shopInfo } from '../../store/Reducers/authReducer'
import { overrideStyle } from '../../utils/utils'

const Profile = () => {
    
    const [formShow,setFormShow] =  useState(false)
    const [state,setState] = useState(
        {
            division: '',
            district: '',
            shopName: '',
            sub_district: ''
        }
    )
    const dispatch = useDispatch()
    const {userInfo,loader,successMessage,errorMessage} = useSelector(state=>state.auth)
    
    const status = 'active'
    const add_image = (e) => {
        if(e.target.files.length>0){
            const formData = new FormData()
            formData.append('image',e.target.files[0])
            dispatch(profile_image_upload(formData))
        }
    }

    const inputHandle = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const addShopInfo = (e) => {
        e.preventDefault()
  
        dispatch(add_shopInfo(state))
    }

    useEffect(()=> {
        if(userInfo.shopInfo){
            setState(
                {
                    division: userInfo?.shopInfo?.division,
                    district: userInfo?.shopInfo?.district,
                    shopName: userInfo?.shopInfo?.shopName,
                    sub_district: userInfo?.shopInfo?.sub_district
                }
            )
        }
        if(successMessage){
            setState(
                {
                    division: userInfo?.shopInfo?.division,
                    district: userInfo?.shopInfo?.district,
                    shopName: userInfo?.shopInfo?.shopName,
                    sub_district: userInfo?.shopInfo?.sub_district
                }
            )
            setFormShow(false)
          toast.success(successMessage)
          dispatch(messageClear()) 
                
        }
      
        if(errorMessage){
           
          toast.error(errorMessage)
          dispatch(messageClear())
          
        }
        
      
      },[successMessage,errorMessage])

      const toShowForm = !userInfo.shopInfo||formShow 


  return (
    <div className='px-2 lg:px-7 pt-5' >
        <div className='w-full flex flex-wrap'>
            <div className='w-full md:w-6/12'>
            <div className='w-full p-4 bg-[#312C23] text-[#fdebd0]  rounded-md'>
                <div className='flex justify-center items-center py-3'>
                    {
                        userInfo.image ? 

                        <label htmlFor="img" className=' p-3 cursor-pointer relative overflow-hidden'>
                            <img className='object-cover h-[200px] w-[200px]  ' src={userInfo.image} alt="" />
                            {
                                loader && <div className='bg-[#554c3c] absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20 '>
                                <span className='text-white'><FadeLoader color='#ffe1b5' /></span>
                            </div>
                            }
                        </label>
                        
                        : <label htmlFor='img' className='flex relative justify-center items-center flex-col h-[200px] w-[200px] cursor-pointer border border-dashed border-[#fff2df23] hover:border-[#fff2df58]'>
                        <span><FaImages/></span>
                        <span className={`font-extralight ${loader ? 'hidden': ''} `}>Select Image</span>
                        {
                            loader && <div className='bg-[#554c3c] absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20 '>
                                <span className='text-white'><FadeLoader color='#ffe1b5' /></span>
                            </div>
                        }
                    </label>
                    }
                    <input onChange={add_image} type="file" className='hidden' id='img' />

                </div>

                <div className=' px-0 md:px-5 py-2 '>
                    <div className='flex text-white justify-between text-sm flex-col gap-2 p-4 bg-[#121424] rounded-md relative '>
                        <span className='absolute top-2 right-2 p-[6px] bg-yellow-500 rounded-md cursor-pointer'>
                            <FaEdit/>
                        </span>
                        <div className='flex gap-2'>
                            <span> Name: </span>
                            <span> {userInfo?.name} </span>
                        </div>
                        <div className='flex gap-2'>
                            <span> Email: </span>
                            <span>  {userInfo?.email}  </span>
                        </div>
                        <div className='flex gap-2'>
                            <span> Role : </span>
                            <span>  {userInfo?.role}  </span>
                        </div>
                        <div className='flex gap-2'>
                            <span> Status: </span>
                            <span>  {userInfo?.status}  </span>
                        </div>
                        <div className='flex gap-2'>
                            <span> Payment Account: </span>
                            <p> {status === 'active' ?

                            <span className='bg-red-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>{userInfo.payment}</span> : <span className='bg-indigo-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded'>Click Active</span>
                            
                            } </p>
                        </div>

                    </div>

                </div>

                {/* <div className='px-0 md:px-5 py-2'>
                    {
                        toShowForm?
                        <form onSubmit={addShopInfo} className=''>
                            <div className='flex flex-col w-full gap-1 mb-2'>
                            <label htmlFor='shopName'>Shop Name</label>
                            <input type="text" value={state.shopName} onChange={inputHandle} name='shopName' id='shopName' placeholder='Shop Name' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            </div>

                            <div className='flex flex-col w-full gap-1 mb-2'>
                            <label htmlFor='division'>Division Name</label>
                            <input type="text" value={state.division} onChange={inputHandle} name='division' id='division' placeholder='Division Name' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            </div>

                            <div className='flex flex-col w-full gap-1 mb-2'>
                            <label htmlFor='district'>District Name</label>
                            <input type="text" value={state.district} onChange={inputHandle} name='district' id='district' placeholder='District Name' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            </div>
                            <div className='flex flex-col w-full gap-1 mb-2'>
                            <label htmlFor='sub_district'> Sub District Name</label>
                            <input type="text" value={state.sub_district} onChange={inputHandle} name='sub_district' id='sub_district' placeholder='Sub District Name' className=' autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-3xl text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            </div>
                            <button disabled={loader ? true : false} className=' bg-indigo-500 hover:border-indigo-500 border border-[#312C23] text-white px-7 py-2 rounded-md'>
                        {
                            loader ? <PropagateLoader color='white' cssOverride={overrideStyle} /> : 'SAVE CHANGES'
                        }
                        
                        </button>
                        </form>
                        :
                        <div className='flex text-white justify-between text-sm flex-col gap-2 p-4 bg-[#121424] rounded-md relative '>
                        <span onClick={()=>setFormShow(true)} className='absolute top-2 right-2 p-[6px] bg-yellow-500 rounded-md cursor-pointer'>
                            <FaEdit />
                        </span>
                        <div className='flex gap-2'>
                            <span> Shop Name: </span>
                            <span> {userInfo?.shopInfo?.shopName} </span>
                        </div>
                        <div className='flex gap-2'>
                            <span> Division: </span>
                            <span> {userInfo?.shopInfo?.division} </span>
                        </div>
                        <div className='flex gap-2'>
                            <span> District: </span>
                            <span> {userInfo?.shopInfo?.district} </span>
                        </div>
                        <div className='flex gap-2'>
                            <span> Sub District: </span>
                            <span> {userInfo?.shopInfo?.sub_district} </span>
                        </div>

                    </div>
                    }
                </div> */}

            </div>

            </div>

            <div className='w-full md:w-6/12 pl-0 md:pl-7 mt-6 md:mt-0'>

            <div className='p-4  bg-[#312C23] text-[#fdebd0] rounded-md'>
            <h1 className='text-xl font-[impacted]'>Change Password</h1>
            <form>
                            <div className='flex flex-col w-full gap-1 mb-2'>
                            <label htmlFor='email'>email</label>
                            <input type="email" name='email' id='email' placeholder='email' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-md text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            </div>

                            <div className='flex flex-col w-full gap-1 mb-2'>
                            <label htmlFor='o_password'>Old Password</label>
                            <input type="password" name='o_password' id='o_password' placeholder='Old Password' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-md text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            </div>

                            <div className='flex flex-col w-full gap-1 mb-2'>
                            <label htmlFor='n_password'>New Password</label>
                            <input type="password" name='n_password' id='n_password' placeholder='New Password' className='  autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] px-4 py-2 outline-none border bg-transparent border-[#fff2df23] rounded-md text-[#fff2df] focus:border-[#fff2df73] overflow-auto placeholder-[#fff2df23]' />
                            </div>
                            <button  className='bg-indigo-500 hover:border-indigo-500 border border-[#312C23] text-white px-7 py-2 rounded-md'>Save Changes</button>

            </form>

            </div>

            

            </div>

        </div>
      
    </div>
  )
}

export default Profile
