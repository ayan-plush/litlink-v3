import React, { useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
const PicMarquee = ( {products}) => {
  const [speed,setSpeed] = useState(30)
  const darray = [
    'https://res.cloudinary.com/decks92gf/image/upload/v1740898844/happy-person-green-shape_xf6tou.png',
    'https://res.cloudinary.com/decks92gf/image/upload/v1740899886/person-reading-book-blue-shape_qxkikx.png',
    'https://res.cloudinary.com/decks92gf/image/upload/v1740899886/person-reading-book-red-shape_jbroto.png'
  ]
   
  return (
    // <div className=' flex mt-8 items-center h-[36vh] w-full '>
    //  <div className="flex">
    //  <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    //  transition={{duration:80, repeat: Infinity, ease: "linear"}}
    //  className=" flex flex-shrink-0 ">
    //  {products?.map((image,index)=>{
    //   return <img className="h-[33.33vh] object-scale-down  w-[30vh] pr-[10px]" src={image.images[0]} key={index}/>
    //  }
    // )}
    //  </motion.div>
    //  <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    //  transition={{duration:80, repeat: Infinity, ease: "linear"}}
    //  className=" flex flex-shrink-0 ">
    //  {products?.map((image,index)=>{
    //   return <img className="h-[33.33vh] object-scale-down  w-[30vh] pr-[10px]" src={image.images[0]} key={index}/>
    //  }
    // )}
    //  </motion.div>
    //  <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    //  transition={{duration:80, repeat: Infinity, ease: "linear"}}
    //  className=" flex flex-shrink-0 ">
    //  {products?.map((image,index)=>{
    //   return <img className="h-[26.66vh] object-scale-down  w-[25vh] pr-[10px]" src={image.images[0]} key={index}/>
    //  }
    // )}
    //  </motion.div>
    //  </div>
    // </div>
    <div>






    <div className=' flex mt-8 items-center h-[260px] w-full '>
    <div className="flex">
    <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    transition={{duration:speed, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[260px] rounded-2xl object-cover  w-[170px] mr-[30px]" src={index%5===0?darray[(index/5)]:image.images[0]} key={index}/>
    }
   )}

    </motion.div>
    <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    transition={{duration:speed, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[260px] rounded-2xl object-cover   w-[170px] mr-[30px]" src={index%5===0?darray[(index/5)]:image.images[0]} key={index}/>
    }
   )}

    </motion.div>
    <motion.div initial={{x:0}} animate={{x:"-100%"}} 
    transition={{duration:speed, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[260px] rounded-2xl object-cover   w-[170px]  mr-[30px]" src={index%5===0?darray[(index/5)]:image.images[0]} key={index}/>
    }
   )}

    </motion.div>
   
    </div>
   </div>

   <div className=' flex mt-4 items-center h-[260px] w-full '>
    <div className="flex">
    <motion.div initial={{x:"-100%"}} animate={{x:0}} 
    transition={{duration:speed, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[260px] rounded-2xl object-cover  w-[170px] mr-[30px]" src={index%5===0?darray[(index/5)]:image.images[0]} key={index}/>
    }
   )}

    </motion.div>
    <motion.div initial={{x:"-100%"}} animate={{x:0}} 
    transition={{duration:speed, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[260px] rounded-2xl object-cover   w-[170px] mr-[30px]" src={index%5===0?darray[(index/5)]:image.images[0]} key={index}/>
    }
   )}

    </motion.div>
    <motion.div initial={{x:"-100%"}} animate={{x:0}} 
    transition={{duration:speed, repeat: Infinity, ease: "linear"}}
    className=" flex flex-shrink-0 ">
    {products?.map((image,index)=>{
     return <img className="h-[260px] rounded-2xl object-cover   w-[170px]  mr-[30px]" src={index%5===0?darray[(index/5)]:image.images[0]} key={index}/>
    }
   )}

    </motion.div>
   
    </div>
   </div>
    </div>

  );
};

export default PicMarquee;
