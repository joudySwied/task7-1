import contactimg from "./../../assets/imgs/ctaThumb1_1.webp";
import line from "./../../assets/imgs/ctaShape1_1.webp";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import './Cardcontact.css'


export default function Cardcontact() {
  return (
    <div className="cardcontact">
      <div className="contain">
        <img src={contactimg} alt="study" />
        <div className="dsecription">
          <div className="smalltitle">
            <FaArrowLeftLong className="icon" />
            <h3>CONTACT US</h3>
            <FaArrowRightLong className="icon" />
          </div>
          <p>24/7 Export Hosting Support Our Costumers Love</p>
        </div>
        <button> TALK TO A SPECIALET <FaLongArrowAltRight />
        </button>
      </div>
      <img src={line} alt="" />
    </div>
  );
}
