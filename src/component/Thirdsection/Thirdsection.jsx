import pricing1 from "./../../assets/imgs/pricingIcon1_2.svg";
import deiamond from "./../../assets/imgs/pricingShape1_2.webp";
import hand from "./../../assets/imgs/pricingShape1_1.webp";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "./Thirdsection.css";
import Pricingcard from "../Pricingcard/Pricingcard";
import Cardcontact from "../Cardcontact/Cardcontact";
export default function Thirdsection() {
  return (
    <section className="thirdsection1">
      <section className="thirdsection">
        <div className="smalltitle">
          <FaArrowLeftLong className="icon" />
          <h3>OUR PRICING</h3>
          <FaArrowRightLong className="icon" />
        </div>
        <h2>OUR Awesome Pricing Plans</h2>
        <div className="undertitle">
          <div>
          
          <span className="year ">
          <span className="month ">monthly</span>yearly</span>
          </div>

          <img src={pricing1} alt="arrow" />
          <span className="save">Save 25%</span>
        </div>
        <Container className="forcards">
            <Row >
                <Col lg={4} md={6} xs={12}>
                <Pricingcard dark={false}
                button={"button1"} />
                </Col>
                <Col lg={4} md={6} xs={12}><Pricingcard dark={true} button={"button2"}/></Col>
                <Col lg={4} md={6} xs={12}> <Pricingcard dark={false} button={"button1"}/></Col>
            </Row>
        </Container>
        <Cardcontact/>
      </section>
      <img src={deiamond} alt="deiamond" className="deiamond"/>
      <img src={hand} alt="hand" className="hand"  />
    </section>
  );
}
