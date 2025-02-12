import React from 'react'
import { motion } from 'framer-motion'
const PicMarquee = ( {products}) => {
  
  return (
    // <div className=' flex mt-8 items-center h-[36vh] w-full '>
    //  <div className="flex">
    //  <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    //  transition={{duration:80, repeat: Infinity, ease: "linear"}}
    //  className=" flex flex-shrink-0 ">
    //  {products?.map((image,index)=>{
    //   return <img className="h-[33.33vh] object-scale-down  w-[30vh] pr-[5vh]" src={image.images[0]} key={index}/>
    //  }
    // )}
    //  </motion.div>
    //  <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    //  transition={{duration:80, repeat: Infinity, ease: "linear"}}
    //  className=" flex flex-shrink-0 ">
    //  {products?.map((image,index)=>{
    //   return <img className="h-[33.33vh] object-scale-down  w-[30vh] pr-[5vh]" src={image.images[0]} key={index}/>
    //  }
    // )}
    //  </motion.div>
    //  <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    //  transition={{duration:80, repeat: Infinity, ease: "linear"}}
    //  className=" flex flex-shrink-0 ">
    //  {products?.map((image,index)=>{
    //   return <img className="h-[26.66vh] object-scale-down  w-[25vh] pr-[5vh]" src={image.images[0]} key={index}/>
    //  }
    // )}
    //  </motion.div>
    //  </div>
    // </div>
    <div className=' flex mt-8 items-center h-[520px] w-full '>
    <div className="flex">
    <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    transition={{duration:80, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[510px] object-cover  w-[350px] pr-[5vh]" src={image.images[0]} key={index}/>
    }
   )}
    </motion.div>
    <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    transition={{duration:80, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[520px] object-cover  w-[350px] pr-[5vh]" src={image.images[0]} key={index}/>
    }
   )}
    </motion.div>
    <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    transition={{duration:80, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[520px] object-cover  w-[350px] pr-[5vh]" src={image.images[0]} key={index}/>
    }
   )}
    </motion.div>
    </div>
   </div>
  );
};

export default PicMarquee;
