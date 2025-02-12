import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='bg-[#312C23]'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 max-md-lg:pb-10 max-sm:pb-6'>
                <div className='w-3/12 max-lg:w-4/12 max-sm:w-full'>
                    <div className='flex flex-col gap-3'>
                        <img className='w-[190px] h-[70px]' src="https://litlink-frontend.onrender.com/images/LitLinkLogoLight.png" alt="logo" />
                        <ul className='flex flex-col gap-2 text-[#fff2df]'>
                            <li>Address : Delhi Technological University, Rohini, New Delhi, 110042</li>
                            <li>Phone : 99xxxxxxxxx</li>
                            <li>Email : fwd.ayan@gmail.com</li>
                        </ul> 
                    </div> 
                </div>

                <div className='w-5/12 text-[#fff2df] max-lg:w-8/12 max-sm:w-full'>
                <div className='flex justify-center max-sm:justify-start max-sm:mt-6 w-full'>
                        <div>
                <h2 className='font-bold text-[#fff2df] text-lg mb-2'>Usefull Links </h2>
                <div className='flex justify-between gap-[80px] max-lg:gap-[40px]'>
                    <ul className='flex flex-col gap-2 text-[#fff2df] text-sm font-semibold'>
                        <li>
                            <Link>About Us </Link>
                        </li>
                        <li>
                            <Link>About Our Shop </Link>
                        </li>
                        <li>
                            <Link>Support </Link>
                        </li>
                        <li>
                            <Link>Privacy Policy </Link>
                        </li>
                        <li>
                            <Link>Blogs  </Link>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-2 text-[#fff2df] text-sm font-semibold'>
                        <li>
                            <Link>Our Service </Link>
                        </li>
                        <li>
                            <Link>Company Profile</Link>
                        </li>
                        <li>
                            <Link>Support </Link>
                        </li>
                        <li>
                            <Link>Privacy Policy </Link>
                        </li>
                        <li>
                            <Link>Blogs  </Link>
                        </li>
                    </ul>
                </div>
                        </div> 
                    </div> 
                </div>

                <div className='w-4/12 text-[#fff2df] max-lg:w-full max-lg:mt-6'>
                <div className='w-full flex flex-col justify-start gap-5'>
                    <h2 className='font-bold text-lg mb-2'>Subscribe to our weekly zine</h2>
                    <span>Get Email updates about tour latest and shop specials offers</span>
                    <div className='h-[50px] w-full bg-white border relative'>
                        <input className='h-full bg-transparent w-full px-3 outline-0' type="text" placeholder='Enter Your Email' />
                        <button className='h-full absolute right-0 bg-[#C2AD86] uppercase px-4 font-[impacted] text-[#312C23] tracking-widest text-lg'>Subscribe</button>
                     </div> 

            <ul className='flex justify-start items-center gap-3'>
                        <li>
                            <a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-[#C2AD86] rounded-full' href="#"><FaFacebookF/> </a>
                        </li>

                        <li>
                            <a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-[#C2AD86] rounded-full' href="#"><FaTwitter/> </a>
                        </li>
                        <li>
                            <a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-[#C2AD86] rounded-full' href="#"><FaLinkedin/> </a>
                        </li>
                        <li>
                            <a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-[#C2AD86] rounded-full' href="#"><FaGithub/> </a>
                        </li>

                     </ul>
                </div> 
            </div> 

            </div>

            <div className='w-[90%] flex flex-wrap justify-center items-center text-[#c2ad866b] mx-auto py-5 text-center'>
                <span>Copiright @ 2025 All Rights Reserved </span>
            </div>
           
        </footer>
    );
};
export default Footer;