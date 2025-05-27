import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {PropagateLoader} from 'react-spinners'
import { overrideStyle } from '../../utils/utils'
import { messageClear, seller_register } from '../../store/Reducers/authReducer'
import toast from 'react-hot-toast'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [state, setState] = useState({
    name: "",
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
  dispatch(seller_register(state))
}

const {loader,successMessage,errorMessage} = useSelector(state=>state.auth)

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
    <div className='  bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")]  min-h-screen bg-[#9f9279] font-light  flex-col justify-center items-center'>
      <Header/>
      <div className='w-full md:pt-35 pt-25 flex justify-center text-black p-2'>
        <div className=' p-4 w-[350px] rounded-md'>
          <h1 className='text-xl mb-3 font-light'>Welcome to litlink</h1>
          <p className='text-sm mb-3 font-medium'>Please register your account</p>

          <form onSubmit={submit}>
            <div className='flex flex-col w-full gap-1 mb-3 '>
              <label htmlFor='name'>Name</label>
              <input onChange={inputHandle} value={state.name} className='autofill:shadow-[inset_0_0_0px_1000px_rgb(160,150,130)] px-3 py-2 outline-none border  border-[#312C23]  bg-transparent placeholder-[#706550] rounded-full ' type ='text' name='name' placeholder='Name' id='name' required></input>
              
            </div>
            <div className='flex flex-col w-full gap-1 mb-3 '>
              <label htmlFor='email'> Email</label>
              <input onChange={inputHandle} value={state.email} className='autofill:shadow-[inset_0_0_0px_1000px_rgb(160,150,130)] px-3 py-2 outline-none border border-[#312C23] bg-transparent placeholder-[#706550] rounded-full ' type ='email' name='email' placeholder='Email' id='email' required></input>
              
            </div>
            <div className='flex flex-col w-full gap-1 mb-3 '>
              <label htmlFor='password'>  Password</label>
              <input onChange={inputHandle} value={state.password} className='autofill:shadow-[inset_0_0_0px_1000px_rgb(160,150,130)] px-3 py-2 outline-none border border-[#312C23] bg-transparent placeholder-[#706550] rounded-full ' type ='password' name='password' placeholder='Password' id='password' required></input>
              
            </div>

            <div className='flex items-center w-full gap-3 mb-3'>
              <input className='w-4 h-4 text-[#312C23] accent-[#312C23] overflow-hidden bg-[#312C23] rounded border-[#312C23] focus:ring-[#312C23] mt-1 ' type='checkbox' name='checkbox' id='checkbox'/>
              <label htmlFor='checkbox'>I agree to the terms</label>
            </div>
            <div className='flex justify-center items-center'>
            {/* <button className=' w-[70%] bg-[#312C23] border-[2px] border-[#83765e] hover:border-[#312C23] text-[#ffffffc2] rounded-full px-7 py-2 mb-3'>Sign Up</button> */}
            <button disabled={loader ? true : false} className=' w-[70%]  bg-[#312C23] border-[2px] border-[#83765e] hover:border-[#312C23] text-[#ffffff] rounded-full px-7 py-2 mb-3'>
              {
                loader ? <PropagateLoader color='#ffffff6c' cssOverride={overrideStyle} /> : 'SIGN UP'
              }
             
              </button>
            </div>
            
            <div className='flex items-center mb-3 gap-3 justify-center'>
              <p>Already have an account ? <Link className='font-bold' to="/login">Sign In</Link></p>
            </div>

            <div className='w-full flex justify-center items-center mb-3'>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
              <div className='w-[10%] flex justify-center items-center pb-1'><span>OR</span></div>
              <div className='w-[45%] bg-slate-700 h-[1px]'></div>
            </div>

            <div className='flex justify-center items-center gap-3 '>
              <a href='http://localhost:5000/api/seller/google' className='w-[135px] h-[35px] border-[2px] border-[#83765e] hover:border-[#312C23]  flex rounded-md bg-[#312C23] text-white  justify-center cursor-pointer items-center overflow-hidden'>
              <span><FaGoogle/></span>
              </a>
              {/* <div className='w-[135px] h-[35px] border-[2px] border-[#83765e] hover:border-[#312C23] flex rounded-md bg-[#312C23] text-white  justify-center cursor-pointer items-center overflow-hidden'>
              <span><FaFacebook/></span>
              </div> */}
            </div>

          </form>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Register
