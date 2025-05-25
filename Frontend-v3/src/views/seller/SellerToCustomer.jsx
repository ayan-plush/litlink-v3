import React, { useEffect, useRef, useState } from 'react'
import { FaCross, FaEdit, FaImage, FaList, FaRegWindowClose, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import io from 'socket.io-client'
import { add_friend, get_user_messages, messageClear, send_message, get_recipient_books } from '../../store/Reducers/chatReducer'
import toast from 'react-hot-toast'
import { RingLoader } from 'react-spinners'
import { BsChatHeart } from 'react-icons/bs'
import { PiBooksFill } from "react-icons/pi";
import RequestBooks from '../../components/products/RequestBooks'


// socket io has to be the last import
const socket = io('https://litlink-backend.onrender.com')

const SellerToCustomer = () => {
    const messagesEndRef = useRef(null)
    const[show,setShow] = useState(false)
    const {sellerId} =  useParams()
    const navigate = useNavigate()
    const {userInfo} = useSelector(state=>state.auth)
    const {my_friends,current_friend,fb_messages,successMessage,current_seller_books} = useSelector(state=>state.chat)
    const [text,setText] = useState('')
    const [recieverMessage,setRecieverMessage]= useState('')
    const [activeUser,setActiveUser]= useState([])
    const dispatch = useDispatch()
    // scrolling to the bottom 1
    useEffect(() => {
        if (messagesEndRef.current) {
          messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
      }, [fb_messages])
    // online users
    useEffect(()=>{
        socket.emit('add_user',userInfo._id,userInfo)
    },[]) 
    // if sellerId changes the user is added to friend list if they arent in it 2
    useEffect(()=>{
        dispatch(add_friend({
            userId:userInfo._id,
            sellerId: sellerId || ""
         }))
         if(sellerId){
            dispatch(get_recipient_books({
                recipientId: sellerId || ""
            }))
         }
         
    },[sellerId]) 
    //if successmessage emit the message 3
    useEffect(()=>{
        if(successMessage){
            socket.emit('send_user_message',fb_messages[fb_messages.length-1])
            dispatch(messageClear())
        }
    },[successMessage])
    // receiving user messages and setting active user 4
    useEffect(()=>{
        socket.on('user_message',(msg)=>{
            setRecieverMessage(msg)
            dispatch(messageClear())
        })
        socket.on('activeUser',(users)=>{
            setActiveUser(users)
        })
        dispatch(get_user_messages({
            userId:userInfo?._id,
            sellerId
        }))
        if(recieverMessage.senderId!==current_friend?.friendId&&recieverMessage.senderName!==undefined){
            toast(<div className=''>{`💌 new message by ${recieverMessage.senderName}`}</div>)
        }
    },[recieverMessage]) 
    const send =()=>{
        if(text){
            dispatch(send_message({
                userId:userInfo?._id,
                text,
                sellerId,
                name:userInfo?.name
            }))
            setText('')
        }
    }
    const handleKeyPress = (e) => {
        if(e.key==='Enter'){
            send()
        }
      }
    const sidebarClick = (x) => {
        setShow(false)
        navigate(`/seller/dashboard/chat-customer/${x}`)

    }


  return (
    <div className='px-2 lg:px-7 py-5  '>
        <div className='w-full bg-[#312C23] px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
            <div className='flex w-full h-full relative'>

                <div className={`w-[280px] h-full absolute z-10 ${!show ? '-left-[336px]':''} md:left-0 md:relative md:transition-all`}>
                    <div className='w-full h-[calc(100vh-177px)] bg-[#605848] md:bg-transparent overflow-y-auto'>
                        <div className='flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-[#fdebd0]'>
                            <h2 className=''>Customers</h2>
                            <span onClick={()=> setShow(false)} className='block cursor-pointer md:hidden '><FaRegWindowClose/></span>

                        </div>
                        {
                            my_friends?.map((f,i)=><div onClick={()=>sidebarClick(f?.friendId)} key={i} className={`h-[60px] my-2 bg-[#887c6664] flex justify-start gap-2 items-center text-[#fdebd0] px-2 py-2 rounded-md cursor-pointer`}>
                            <div className='relative'>
                                {/* navigate(`/seller/dashboard/chat-customer/${}`) */}
                                <img className='w-[38px] h-[38px] rounded-full border-[#ffffff8f] object-cover border-2 max-w-[38px] p-[2px]' src={f.image} alt="" />
                                {
                                    activeUser.some(c=>c.userId===f.friendId) && <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>

                                }

                            </div>

                            <div className='flex justify-center items-start flex-col w-full'>
                                <div className='flex justify-between items-center  w-full'>
                                    <h2 className='text-base font-semibold'>{f.friendId===userInfo._id? 'You':`${f.name}`}</h2>
                                </div>
                            </div>


                        </div>)
                        }

                        {/* <div className={`h-[60px] bg-[#887c6664] flex justify-start gap-2 items-center text-[#fdebd0] px-2 py-2 rounded-md cursor-pointer`}>
                            <div className='relative'>
                                <img className='w-[38px] h-[38px] rounded-full border-[#ffffff8f] border-2 max-w-[38px] p-[2px]' src="https://litlink-frontend.onrender.com/images/pic9.jpg" alt="" />
                                <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>

                            </div>

                            <div className='flex justify-center items-start flex-col w-full'>
                                <div className='flex justify-between items-center  w-full'>
                                    <h2 className='text-base font-semibold'>Ayan</h2>

                                </div>
                            </div>


                        </div> */}

                        {/* <div className={`h-[60px] flex justify-start gap-2 items-center text-[#fdebd0] px-2 py-2 rounded-sm cursor-pointer`}>
                            <div className='relative'>
                                <img className='w-[38px] h-[38px] rounded-full border-[#ffffff8f] border-2 max-w-[38px] p-[2px]' src="https://litlink-frontend.onrender.com/images/pic9.jpg" alt="" />
                                <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>

                            </div>

                            <div className='flex justify-center items-start flex-col w-full'>
                                <div className='flex justify-between items-center  w-full'>
                                    <h2 className='text-base font-semibold'>sergei</h2>

                                </div>
                            </div>


                        </div>

                        <div className={`h-[60px] flex justify-start gap-2 items-center text-[#fdebd0] px-2 py-2 rounded-sm cursor-pointer`}>
                            <div className='relative'>
                                <img className='w-[38px] h-[38px] rounded-full border-[#ffffff8f] border-2 max-w-[38px] p-[2px]' src="https://litlink-frontend.onrender.com/images/pic9.jpg" alt="" />
                                <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>

                            </div>

                            <div className='flex justify-center items-start flex-col w-full'>
                                <div className='flex justify-between items-center  w-full'>
                                    <h2 className='text-base font-semibold'>jane</h2>

                                </div>
                            </div>


                        </div>

                        <div className={`h-[60px] flex justify-start gap-2 items-center text-[#fdebd0] px-2 py-2 rounded-sm cursor-pointer`}>
                            <div className='relative'>
                                <img className='w-[38px] h-[38px] rounded-full border-[#ffffff8f] border-2 max-w-[38px] p-[2px]' src="https://litlink-frontend.onrender.com/images/pic9.jpg" alt="" />
                                <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>

                            </div>

                            <div className='flex justify-center items-start flex-col w-full'>
                                <div className='flex justify-between items-center  w-full'>
                                    <h2 className='text-base font-semibold'>john</h2>

                                </div>
                            </div>


                        </div> */}

                    </div>

                </div>

                {current_friend?<div className='w-full md:w-[calc(100%-200px)] md:pl-4 '>
                    
                    <div className='flex justify-between items-center'>
                        
                             <div className='flex justify-start items-center gap-3'>
                                
                                <div className='relative'>
                                <img className='w-[45px] h-[45px] rounded-full border-[#ffffff8f] border-2 object-cover max-w-[45px] p-[2px]' src={current_friend?.image} alt="" />
                                {
                                    activeUser.some(c=>c.userId===current_friend?.friendId) && <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>

                                }                                </div>

                                <div className='flex justify-center items-start pl-3 flex-col w-full'>
                                <div className='flex justify-between items-center  w-full'>
                                    <h2 className=' font-[impacted] text-[#fdebd0] tracking-wide text-lg '>{current_friend?.friendId===userInfo._id? 'YOU':`${current_friend?.name}`}</h2>

                                </div>
                            </div>

                                                                
                            </div>
                        

                        <div className='w-[35px] flex md:hidden h-[35px] rounded-sm bg-[#605848] border-2 border-[#312C23] hover:border-[#605848] justify-center items-center cursor-pointer '>
                           <span onClick={()=> setShow(!show)} ><FaList/></span> 

                        </div>


                    </div>

                    <div className='py-4 '>
                        <div ref={messagesEndRef} className='bg-[#1B1B1B] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-scroll overflow-x-clip [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                        

                            {
                                fb_messages?.map((m,i)=> 
                                    {
                                    if(current_friend?.friendId!==m.recieverId){
                                    return (<div key={i} className={`${fb_messages[i-1]?.senderId===fb_messages[i]?.senderId?'':'mt-5'} w-full flex justify-start items-center`}>
                                        <div className='flex font-light justify-start items-start gap-2 md:px-3  max-w-full lg:max-w-[85%]'>
                                            <div>
                                            <img className={`${fb_messages[i-1]?.senderId===fb_messages[i]?.senderId?'invisible':''} w-[38px] h-[38px] rounded-full border-2 border-[#ffffff6c] object-cover max-w-[38px] p-[3px]`} src={current_friend?.image} alt="" />

                                            </div>
                                            <div className='flex flex-col gap-1 items-start'>
                                                <div>
                                                {m.book?<img onClick={()=>navigate(`/product/details/${m.book._id}`)} className=' cursor-pointer mt-1 h-[150px] object-scale-down rounded-md ' src={m.book.images[0]} />:''}
                                                </div>

                                                <div className={`${fb_messages[i-1]?.senderId===fb_messages[i]?.senderId?'rounded-bl-lg ':' '} flex flex-wrap justify-center items-start flex-col w-full pr-3 bg-[#C1F6A7] text-black py-1 px-2 rounded-t-lg rounded-br-lg`}>
                                                {m.message}
                                                </div>
                                            </div>
                                            

                                        </div>

                                    </div>)
                                    }
                                    else{
                                        return (<div key={i} className={`${fb_messages[i-1]?.senderId===fb_messages[i]?.senderId?'':'mt-5'} w-full flex justify-end items-center`}>
                                        <div className='flex font-light justify-end w-1/2 items-start gap-2 md:px-3 max-w-full lg:max-w-[85%]'>
                                            <div>
                                            </div>
                                            <div className='flex flex-col items-end gap-1'>
                                                <div>
                                                {m.book?<img onClick={()=>navigate(`/product/details/${m.book._id}`)} className=' mt-1 cursor-pointer h-[150px] object-scale-down rounded-md ' src={m.book.images[0]} />:''}
                                                </div>
                                                <div className= {` ${fb_messages[i-1]?.senderId===fb_messages[i]?.senderId?'rounded-br-lg ':' '} bg-[#363636] break-all text-white py-1 px-2 pl-3 rounded-t-lg rounded-bl-lg`} >
                                                {m.message}
                                                </div>
                                            </div>
                                            <img className={` ${fb_messages[i-1]?.senderId===fb_messages[i]?.senderId?'invisible':''} w-[38px] h-[38px] rounded-full border-2 border-[#ffffff6c] object-cover  max-w-[38px] p-[3px]`} src={userInfo.image} alt="" />
        
                                        </div>
        
                                    </div>)
                                    }
                                }
                                
                            )
                            
                            }
                            <div ref={messagesEndRef}></div>

                           
                            
                        </div>
                        <div className="flex gap-3 py-2">
                        {/* <button className='bg-[#C1F6A7] relative hover:bg-[#b0f98c] cursor-pointer text-semibold w-[75px] h-[35px] rounded-md text-[#1B1B1B] uppercase flex justify-center items-center'><PiBooksFill /></button> */}
                        <RequestBooks sellerId={sellerId} current_seller_books={current_seller_books} />
                        <input onKeyDown={handleKeyPress} value={text} onChange={(e)=> setText(e.target.value)} className='w-full autofill:shadow-[inset_0_0_0px_1000px_rgb(159,146,121)] flex justify-between px-2 border border-[#fff2df90] items-centerm py-[5px]  focus:border-[#fff2dfe8] overflow-auto placeholder-[#fff2df23] rounded-md outline-none bg-transparent text-[#fff2df]' type="text" placeholder='Enter Your Message' />
                        <button onClick={send} className='bg-[#C1F6A7] hover:bg-[#b0f98c] text-semibold w-[75px] h-[35px] rounded-md text-[#1B1B1B] uppercase flex justify-center items-center'>Send</button>
                        </div>
                    </div>
                    

                </div>:
                <div className='justify-center relative w-full md:w-[calc(100%-200px)] md:pl-4 m-3 rounded-md bg-[#27211d] items-center  flex text-white'>
                    <div className='w-[35px] flex md:hidden h-[35px] rounded-sm absolute -top-2 -right-3 text-black bg-[#605848] border-2 border-[#312C23] hover:border-[#605848] justify-center items-center cursor-pointer '>
                    <span onClick={()=> setShow(!show)} ><FaList/></span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                                            <BsChatHeart className='h-[200px] w-[200px] text-[#ffe5be7a]' /> <span className='text-3xl text-[#ffe5be7a] pt-3 font-[impacted]'>START A CHAT</span> 
                    </div>
                    </div>
                
                }

            </div>

        </div>
      
    </div>
  )
}

export default SellerToCustomer
