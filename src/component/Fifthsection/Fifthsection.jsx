import "./Fifthsection.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cardforfifth from "../Cardforfifth/Cardforfifth";
import fifth1 from "./../../assets/imgs/blogThumb1_2.webp";
import fifth2 from "./../../assets/imgs/blogThumb1_3.webp";
import fifth3 from "./../../assets/imgs/blogThumb1_1.webp";
import person1 from "./../../assets/imgs/blogProfile1_2.webp";
import person2 from "./../../assets/imgs/blogProfile1_3.webp";
import person3 from "./../../assets/imgs/blogProfile1_1.webp";
import Lastcard from "../Lastcard/Lastcard";


export default function Fifthsection() {
  return (
    <section className="fifthsection">
      <div className="smalltitle">
        <FaArrowLeftLong className="icon" />
        <h3>BLOGS & NEWS</h3>
        <FaArrowRightLong className="icon" />
      </div>
      <div className="undersmalltitle">
        <h2> Fiatured News And Insights</h2>
        <div className="foricon">
          <div className="circleforicon">
            <FaArrowLeftLong className="icon1" />
          </div>
          <div className="circleforicon circleforicon2">
            {" "}
            <FaArrowRightLong className="icon1" />
          </div>
        </div>
      </div>

      <Container className="cardsection">
        <Row >
          <Col lg={4} md={12} xs={12} >
            <Cardforfifth 
            img1={fifth1}
            p1={"Uncategorized"}
            span1={ "MARCH 14,2024"}
            p2={"Best And Faster Data Server Ever"}
            person={person1}/>
          </Col>
          <Col lg={4} md={12} xs={12} className="hide5">
            <Cardforfifth 
            img1={fifth2}
            p1={"Technology"}
            span1={" MARCH 29 ,2024"}
            p2={"Life Won't One Beast Air Over Above All"}
            person={person2}
            />
          </Col>
          <Col lg={4} md={12} xs={12} className="hide5">
            <Cardforfifth 
            img1={fifth3}
            p1={"Shared Hosting"}
            span1={ "MARCH 24,2024"}
            p2={"Attentive Was Born In 2015 Help Sales Teams"}
            person={person3}
            />
          </Col>
        </Row>
      </Container>
      <Lastcard />
    </section>
  );
}
