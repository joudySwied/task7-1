import React from "react";
import Smallchild from "../Smallchild/Smallchild";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import video from "./../../assets/imgs/video.webp";
import "./Seccontact.css";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Seccontact.css"


export default function Seccontact() {
  return (
    <section className="secondcontact">
      <div className="childrencard">
        <Smallchild
          icon={<IoCallSharp />}
          above={"Call us 7 /24"}
          down={" +208-555-1223"}
          classo={"Smallchild1"}
        />
        <div className="line"></div>
        <Smallchild
          icon={<MdEmail />}
          above={"Make a Quto"}
          down={<a href="#">infotech@gmail.com</a>}
          classo={"Smallchild1"}
        />
        <div className="line"></div>
        <Smallchild
          icon={<FaLocationDot />}
          above={"Location"}
          down={" 4517 washington ave"}
          classo={"Smallchild1"}
        />
        <img src={video} alt="fake video" />
      </div>
      <div className="forform">
        <h6>Ready to Get Started ?</h6>
        <p>
          Nullam Varius ,eart quis iaculic dictum ,eros urna Varius eros urna ,
          ut blandit fdljs odio in turpis .Quisque rhoncus ,eros in auctor
          ultrices{" "}
        </p>
        <form action="jojo.php">
            <div className="firstrow">
                <div className="left">
                    <label htmlFor="name"> Your Name*</label>
                    <input type="text" />
                </div>
                <div className="right">
                <label htmlFor="email"> Your Email*</label>
                <input type="emial" />
                </div>
            </div>
            <label htmlFor="meaasge" className="labelformessage">Write Message*</label>
                <textarea name="message" id="meaasge"> </textarea>
                <button>Send Message <FaArrowRightLong />
                </button>
        </form>
      </div>
    </section>
  );
}
