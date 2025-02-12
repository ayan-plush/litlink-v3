import React from 'react'
import { motion } from 'framer-motion'
const PicMarquee = () => {
  const upperMarquee =[
    "https://litlink-frontend.onrender.com/images/pic1.jpg",
    "https://litlink-frontend.onrender.com/images/pic2.jpg",
    "https://litlink-frontend.onrender.com/images/pic3.jpg",
    "https://litlink-frontend.onrender.com/images/pic4.jpg",
    "https://litlink-frontend.onrender.com/images/pic5.jpg",
    "https://litlink-frontend.onrender.com/images/pic6.jpg",
    "https://litlink-frontend.onrender.com/images/pic7.jpg",
    "https://litlink-frontend.onrender.com/images/pic8.jpg",
    "https://litlink-frontend.onrender.com/images/pic9.jpg",
    "https://litlink-frontend.onrender.com/images/pic10.jpg",
    "https://litlink-frontend.onrender.com/images/pic1.jpg",
    "https://litlink-frontend.onrender.com/images/pic2.jpg",
    "https://litlink-frontend.onrender.com/images/pic3.jpg",
    "https://litlink-frontend.onrender.com/images/pic4.jpg",
    "https://litlink-frontend.onrender.com/images/pic5.jpg",
    "https://litlink-frontend.onrender.com/images/pic6.jpg",
    "https://litlink-frontend.onrender.com/images/pic7.jpg",
    "https://litlink-frontend.onrender.com/images/pic8.jpg",
    "https://litlink-frontend.onrender.com/images/pic9.jpg",
    "https://litlink-frontend.onrender.com/images/pic10.jpg",  ];
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
