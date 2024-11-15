import "./Fourthsection.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Cardtofeedback from "../Cardtofeedback/Cardtofeedback";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./../../assets/imgs/testiThumb3_1.webp";
import img2 from "./../../assets/imgs/testiThumb3_2.webp";
import img3 from "./../../assets/imgs/testiThumb3_3.webp";
import { FiBox } from "react-icons/fi";
import { PiIntersectSquareDuotone } from "react-icons/pi";



export default function Fourthsection() {
  return (
    <section className="fourthsection">
      <div className="contain">
        <div className="smalltitle">
          <FaArrowLeftLong className="icon" />
          <h3>TestiMonials</h3>
          <FaArrowRightLong className="icon" />
        </div>
        <h2> OUR Latest Client Feedback </h2>
        <Container className="feedbackcards">
          <Row className="row">
            <Col lg={4} md={6} xs={12} className="hide ">
              {" "}
              <Cardtofeedback 
                feedback={
                  "  Extech has completely transformed our prosses.the user friendy interface and powerfull features maintaining our website .Highly Recomended forall !"
                }
                span={"Kristin Watorn"}
                span2={"web designer"}
                img={img1}
                blue={false}
              />
            </Col>
            <Col  lg={4} md={6} xs={12} className="nothide">
              {" "}
              <Cardtofeedback
                feedback={
                  " I have been using Extech for several month now, and I am Extermly impressed with the ease of customization it offers .the wide range of template"
                }
                span={"Theresa Webb"}
                span2={"Tech enthusiast"}
                img={img2}
                blue={true}
              />
            </Col>
            <Col lg={4} md={6} xs={12} className="hide ">
              {" "}
              <Cardtofeedback 
                feedback={
                  " Extech offers exceptional value for money the comprehensive suite of tools and seamless integration with various plugins  and services  make it a far all"
                }
                span={"RonaldRichards"}
                span2={"web Enterprenuar"}
                img={img3}
                blue={false}
              />
            </Col>
          </Row>
        </Container>
        <div className="parent">
          <div className="child"></div>
        </div>
      </div>
      <FiBox className="boxicon" />
      <PiIntersectSquareDuotone className="sqareicon" />


    </section>
  );
}
