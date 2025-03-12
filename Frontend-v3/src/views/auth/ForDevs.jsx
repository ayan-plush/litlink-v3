import Footer from "../../components/Footer"
import Header from "../../components/Header"
import End from "../End"
import LandingNavbar from "../LandingNavbar"
import PicMarquee from "../PicMarquee"
import { FaCreativeCommonsShare } from 'react-icons/fa';


const ForDevs = () => {
  return (
    <div className=' bg-[#9f9279] bg-cover bg-center bg-[url("https://res.cloudinary.com/decks92gf/image/upload/v1739376514/paperbg_q6qqe1.jpg")]  w-full min-h-screen  overflow-hidden'>
        <Header/>
        <div className="flex md:pt-35 pt-25 h-screen max-md:flex-wrap">
            <div className=" w-full h-full">
                    
                  <div className="flex w-full max-md:flex-col items-center h-full justify-center">
                  <div className=' text-[2vh] tracking-wide text-left px-[10vh] mb-[5vh] uppercase '>
                        Testing Login:
                  </div>
                  <div className=' text-[2vh] tracking-wide text-left px-[10vh] mb-[5vh]  '>
                        test123@gmail.com 
                  </div>
                  <div className=' text-[2vh] tracking-wide text-left px-[10vh] mb-[5vh]  '>
                        Password: 12345abc
                  </div>
                  </div>
            </div>
            
        </div>
      
      <Footer/>
    </div>
  )
}

export default ForDevs