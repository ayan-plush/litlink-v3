import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { overrideStyle } from '../../utils/utils'
import { PropagateLoader } from 'react-spinners'
import toast from 'react-hot-toast'
import {  useDispatch, useSelector } from 'react-redux'
import { messageClear, seller_login } from '../../store/Reducers/authReducer'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const {loader,successMessage,errorMessage} = useSelector(state=>state.auth)

  const [state, setState] = useState({
      email: "",
      password: ""
    })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }
  
  const submit = (e) => {
    e.preventDefault()
    dispatch(seller_login(state))
  }

  useEffect(()=> {

    if(successMessage){
      toast.success(successMessage)
      dispatch(messageClear())
      navigate('/')
    }
  
    if(errorMessage){
      toast.error(errorMessage)
      dispatch(messageClear())
    }
    
  
  },[successMessage,errorMessage])

  return (
    <div className=' bg-cover bg-center bg-[url("http://localhost:5173/images/paperbg.jpg")]  min-h-screen bg-[#9f9279] font-light  flex-col justify-center items-center'>
      <Header/>
      <div className='w-full flex justify-center text-black p-2'>
        <div className=' p-4 rounded-md'>
          <h1 className='text-xl mb-3 font-light'>Welcome to litlink</h1>
          <p className='text-sm mb-3 font-medium'>Enter your details</p>

          <form onSubmit={submit}>
            <div className='flex flex-col w-full gap-1 mb-3 '>
              <label htmlFor='email'> Email</label>
              <input onChange={inputHandle} value={state.email} className='autofill:shadow-[inset_0_0_0px_1000px_rgb(160,150,130)] px-3 py-2 outline-none border border-[#312C23] bg-transparent placeholder-[#706550] rounded-full ' type ='email' name='email' placeholder='Email' id='email' required></input>
              
            </div>
            <div className='flex flex-col w-full gap-1 mb-3 '>
              <label htmlFor='Password'>  Password</label>
              <input onChange={inputHandle} value={state.password} className='autofill:shadow-[inset_0_0_0px_1000px_rgb(160,150,130)] px-3 py-2 outline-none border border-[#312C23] bg-transparent placeholder-[#706550] rounded-full ' type ='password' name='password' placeholder='Password' id='password' required></input>
              
            </div>

            <div className='flex justify-center items-center'>
            {/* <button className=' w-[70%] bg-[#312C23] border-[2px] border-[#83765e] hover:border-[#312C23] text-[#ffffffc2] rounded-full px-7 py-2 mb-3'>Sign In</button> */}
            <button disabled={loader ? true : false} className=' w-[70%]  bg-[#312C23] border-[2px] border-[#83765e] hover:border-[#312C23] text-[#ffffff] rounded-full px-7 py-2 mb-3'>
              {
                loader ? <PropagateLoader color='#ffffff6c' cssOverride={overrideStyle} /> : 'SIGN IN'
              }
             
            </button>
            </div>

            <div className='flex items-center mb-3 gap-3 justify-center'>
                          <p>Don't have an account ? <Link className='font-bold' to="/Register">Sign Up</Link></p>
                        </div>

            <div className='w-full flex justify-center items-center mb-3'>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
              <div className='w-[10%] flex justify-center items-center pb-1'><span>OR</span></div>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            </div>



            <div className='flex justify-center items-center gap-3 '>
              <div className='w-[135px] h-[35px] border-[2px] border-[#83765e] hover:border-[#312C23]  flex rounded-md bg-[#312C23] text-white  justify-center cursor-pointer items-center overflow-hidden'>
              <span><FaGoogle/></span>
              </div>
              <div className='w-[135px] h-[35px] border-[2px] border-[#83765e] hover:border-[#312C23] flex rounded-md bg-[#312C23] text-white  justify-center cursor-pointer items-center overflow-hidden'>
              <span><FaFacebook/></span>
              </div>
            </div>

          </form>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Login
