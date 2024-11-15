import Card from "../Card/Card";
import './Cardourservice.css'
import img1 from "./../../assets/imgs/serviceIcon1_2.svg"
import img2 from "./../../assets/imgs/serviceIcon1_3.svg"
import img3 from "./../../assets/imgs/serviceIcon1_4.svg"
import img4 from "./../../assets/imgs/serviceIcon1_1.svg"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Cardourservice() {
  return (
    <section className="cardourservice">
      <Container className="cardss">
        <Row>
          <Col lg={3} md={6} sm={12} className="hide">
            <Card  
            servicelogo1={img1 } 
            title={"Woo Comerc"}  
            des={"Collaboratively formulate principle capital. progressively evolve userrevolutionary hosting services" }
             />
          </Col>

          <Col lg={3} md={6} sm={12} className="hide">
          <Card 
            servicelogo1={img2 } 
            title={"CRM solution"}  
            des={"Collaboratively formulate principle capital. progressively evolve userrevolutionary hosting services" }
             />
          </Col>

          <Col lg={3} md={6} sm={12} className="nohide">
          <Card 
            servicelogo1={img3 } 
            title={"Web Designe"}  
            des={"Collaboratively formulate principle capital. progressively evolve userrevolutionary hosting services" }
             />
          </Col>

          <Col lg={3} md={6}  sm={12} className="hide">
          <Card 
            servicelogo1={img4 } 
            title={"Data Guard sentinel"}  
            des={"Collaboratively formulate principle capital. progressively evolve userrevolutionary hosting services" }
             />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
