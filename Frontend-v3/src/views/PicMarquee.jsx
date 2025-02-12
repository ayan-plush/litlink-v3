import React from 'react'
import { motion } from 'framer-motion'
const PicMarquee = () => {
  const upperMarquee =[
    "http://localhost:5173/images/pic1.jpg",
    "http://localhost:5173/images/pic2.jpg",
    "http://localhost:5173/images/pic3.jpg",
    "http://localhost:5173/images/pic4.jpg",
    "http://localhost:5173/images/pic5.jpg",
    "http://localhost:5173/images/pic6.jpg",
    "http://localhost:5173/images/pic7.jpg",
    "http://localhost:5173/images/pic8.jpg",
    "http://localhost:5173/images/pic9.jpg",
    "http://localhost:5173/images/pic10.jpg",
    "http://localhost:5173/images/pic1.jpg",
    "http://localhost:5173/images/pic2.jpg",
    "http://localhost:5173/images/pic3.jpg",
    "http://localhost:5173/images/pic4.jpg",
    "http://localhost:5173/images/pic5.jpg",
    "http://localhost:5173/images/pic6.jpg",
    "http://localhost:5173/images/pic7.jpg",
    "http://localhost:5173/images/pic8.jpg",
    "http://localhost:5173/images/pic9.jpg",
    "http://localhost:5173/images/pic10.jpg",  ];
  return (
    <div className=' flex items-center  h-[36vh] w-full bg-[black] bg-opacity-75'>
     <div className="flex">
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[25vh]  w-[30vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[25vh]  w-[30vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[25vh]  w-[30vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     </div>
    </div>
  );
};

export default PicMarquee;
