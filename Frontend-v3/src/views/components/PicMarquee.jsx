import React from 'react'
import { motion } from 'framer-motion'
const PicMarquee = () => {
  const upperMarquee =[
    "http://localhost:5173/images/bpic1.jpg",
    "http://localhost:5173/images/bpic2.jpg",
    "http://localhost:5173/images/bpic3.jpg",
    "http://localhost:5173/images/bpic4.jpg",
    "http://localhost:5173/images/bpic5.jpg",
    "http://localhost:5173/images/bpic6.jpg",
    "http://localhost:5173/images/bpic7.jpg",
    "http://localhost:5173/images/bpic8.jpg",
    "http://localhost:5173/images/bpic9.jpg",
    "http://localhost:5173/images/bpic10.jpg",
    "http://localhost:5173/images/bpic1.jpg",
    "http://localhost:5173/images/bpic2.jpg",
    "http://localhost:5173/images/bpic3.jpg",
    "http://localhost:5173/images/bpic4.jpg",
    "http://localhost:5173/images/bpic5.jpg",
    "http://localhost:5173/images/bpic6.jpg",
    "http://localhost:5173/images/bpic7.jpg",
    "http://localhost:5173/images/bpic8.jpg",
    "http://localhost:5173/images/bpic9.jpg",
    "http://localhost:5173/images/bpic10.jpg",  ];
  return (
    <div className=' flex mt-8 items-center h-[36vh] w-full '>
     <div className="flex">
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[33.33vh]  w-[30vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[33.33vh]  w-[30vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[26.66vh]  w-[25vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     </div>
    </div>
  );
};

export default PicMarquee;
