import "./Lastcard.css"
import person100 from './../../assets/imgs/ctaThumb.webp' 
import Shape1 from './../../assets/imgs/ctaShape2_1.webp' 
import Shape2 from './../../assets/imgs/ctaShape2_4 (1).webp' 
import { FaArrowRight } from "react-icons/fa6";


export default function Lastcard() {
  return (
    <div className='lastcard'>
        <div className="contain">
            <img src={person100} alt="person with laptop " />
            <p> Stay Connected With Cutting Edge IT</p>
            <button> TALK TO A SPECIALET  <FaArrowRight className="icon" />
            </button>
        </div>
        <img src={Shape1} alt="dicore" className="shape1"/>
        <img src={Shape2} alt="dicore" className="shape2" />

        {/* <div className="dicore1"></div>
        <div className="dicore2"></div>
        <div className="dicore3"></div> */}


    </div>
  )
}
