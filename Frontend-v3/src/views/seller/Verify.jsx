import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import { mail_verification } from '../../store/Reducers/authReducer'
import toast from 'react-hot-toast'

function Verify() {
    const {token} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userInfo,mail} = useSelector(state=>state.auth)

    useEffect(()=>{
        console.log(userInfo)
        dispatch(mail_verification({
            userId: userInfo._id,
            token
        }))
    },[userInfo])
    useEffect(()=>{
        if(mail){
            toast.success("Email Verified!")
            navigate('/')
        }
        
    },[mail])
  return (
    <div className='bg-[#9f9279] flex justify-center items-center  bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")] h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-hidden w-full'>
      <PropagateLoader />
    </div>
  )
}

export default Verify
