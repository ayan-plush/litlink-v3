import React, { useEffect, useState } from 'react'

import { Link , useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { admin_login,messageClear } from '../../store/Reducers/authReducer'
import { PropagateLoader } from 'react-spinners'
import toast from 'react-hot-toast'

const AdminLogin = () => {

  const navigate = useNavigate()

   const dispatch = useDispatch()
   const {loader,errorMessage,successMessage} = useSelector(state=>state.auth)

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
    dispatch(admin_login(state))

  }

  const overrideStyle = {
    display : 'flex',
    margin: '0-auto',
    height: '24px',
    justifyContent : 'center',
    alignItems : 'center'
  }

  useEffect(()=>{
    if(errorMessage){
      toast.error(errorMessage)
      dispatch(messageClear())
    }
    if(successMessage){
      toast.success(successMessage)
      dispatch(messageClear())
      navigate('/')
    }
  },[errorMessage,successMessage])


  return (
    <div className='min-w-screen min-h-screen  bg-cover bg-center bg-[url("http://localhost:5173/images/paperbg.jpg")]  font-[impacted] tracking-wide bg-[#9f9279] font-light  flex justify-center items-center'>
      <div className='w-[350px] text-black p-2'>
        <div className=' p-4 rounded-md'>
          <div className=''>
            <div className=''>
                <img src="/images/theeye1.png" alt="eye" className='w-fit h-fit'/>
            </div>
          </div>

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
            <button disabled={loader ? true : false} className=' w-[70%]  bg-[#312C23] border-[2px] border-[#83765e] hover:border-[#312C23] text-[#ffffffc2] rounded-full px-7 py-2 mb-3'>
              {
                loader ? <PropagateLoader color='white' cssOverride={overrideStyle} /> : 'LOGIN'
              }
             
              </button>
            </div>     

          </form>

        </div>
      </div>
    </div>
  )
}

export default AdminLogin
