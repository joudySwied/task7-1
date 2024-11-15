import logo from "./../../assets/imgs/logow.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import "./Footer.css";
import { Link } from "react-router-dom";
import footer1 from "./../../assets/imgs/footerThumb1_1.webp";
import footer2 from "./../../assets/imgs/footerThumb1_2.webp";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import Cardinfoot from "../../component/Cardinfoot/Cardinfoot";



export default function Footer({clasfoot, yes}) {
  return (
    <section className={clasfoot} >
      <Container>

      { yes && <Cardinfoot  /> }
      
        <Row className="row" >
          <Col xs={12} md={6} lg={3}>
            <img src={logo} alt="logo" className="navlogo" />
            <p className="p1">
              Extexh IT phasellus aliquam valutpat ullam corper laoreet neque a
              lacinia a curabitur lacinia mollis{" "}
            </p>
            <div className="forfootericons">
              <div className="iconsquare">
                <a href="https://www.facebook.com/profile.php?id=100008991941437&mibextid=ZbWKwL">
                <FaFacebookF className="iconsosial" /></a>
              </div>
              <div className="iconsquare">
                <a href="#"><FaTwitter className="iconsosial" /></a>
              </div>
              <div className="iconsquare">
                <a href="#"><FaYoutube className="iconsosial" /> </a>
              </div>
              <div className="iconsquare">
                <a href="https://www.instagram.com/joudyswied/profilecard/?igsh=dHVtZ3FqMnMweXk4"><FaInstagram className="iconsosial" /></a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <h5>QUICK LINKS</h5>
            <div className="linearline"></div>
            <ul className="listoflink">
              <li>
                <Link to={"/about"}>
                  {" "}
                  <MdOutlineKeyboardDoubleArrowRight />
                  Extech About
                </Link>
              </li>
              <li>
                <a href="#">
                  <MdOutlineKeyboardDoubleArrowRight />
                  Our Service
                </a>
              </li>
              <li>
                <a href="#">
                  <MdOutlineKeyboardDoubleArrowRight />
                  Our Blogs
                </a>
              </li>
              <li>
                <a href="#">
                  <MdOutlineKeyboardDoubleArrowRight />
                  FAQ'S
                </a>
              </li>
              <li>
                <Link to={"/about"}>
                  {" "}
                  <MdOutlineKeyboardDoubleArrowRight />
                  <MdOutlineKeyboardDoubleArrowRight />
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5>Recent Posts</h5>
            <div className="linearline"></div>
            <div className="smallcard">
              <img src={footer1} alt="meeting" />
              <div className="disecription">
                <span className="lightspan">
                  <LuCalendarDays className="icon" />
                  15th April .2024
                </span>
                <span className="span2">
                  Top 5 Most Famous Technology Trend In 2024 .
                </span>
              </div>
            </div>
            <div className="smallcard smallcard1">
              <img src={footer2} alt="meeting" />
              <div className="disecription">
                <span className="lightspan">
                  <LuCalendarDays className="icon" />
                  20th june .2024
                </span>
                <span className="span2">
                  The surfing Man Will Blow Your Mind Technology Trend In 2024{" "}
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="thelastone">
            <h5>Contact Us</h5>
            <div className="linearline"></div>
            <span className="toemail">
             
              <a href="#">
               
                <RiMailFill className="icon" />
                info@example.com
              </a>
            </span>
            <span className="tophone">
              
              <FaPhoneAlt />
              +208-6666-0112
            </span>
            <form action="joudy.php" className="form">
              <div className="foremailandbutton">
                <input type="Email"  placeholder="Your email adress"/>
                <button><FaArrowRight />
                </button>
              </div>
              <div className="forcheakbox">
                <input type="checkbox" id="cheak" />
                <label htmlFor="cheack ">I agree to the <a href="#">privacy policy</a></label>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// style={{ padding : (one) ? " 140px 50px 10px 160px" : " 300px 50px 3px 160px " , } }
