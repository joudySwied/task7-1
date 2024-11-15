import './Secondsection.css'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Numbercard from '../Numbercard/Numbercard';

export default function Secondsection() {
  return (
    <section className='secondsection'>
              <Container className='container'>
            <Row >
                <Col lg={3} md={6} xs={12} >
                
                    <Numbercard num={"01"} 
                    color={false}
                    title={"Requirement"}
                    descreption= {"there are many variations of passages Lorem ipsum dolor sit amet consectetur adipisicing."}
                    />
                </Col>
                <Col lg={3} md={6} xs={12} >
                    
                    <Numbercard num={"02"} 
                    color={true}
                    title={"UI/UX Design"}
                    descreption= {"there are many variations of passages Lorem ipsum dolor sit amet consectetur adipisicing."}
                    />
                </Col>
                <Col lg={3} md={6} xs={12} >
                
                    <Numbercard num={"03"} 
                    color={false}
                    title={"Prototype"}
                    descreption= {"there are many variations of passages Lorem ipsum dolor sit amet consectetur adipisicing."}
                    />
                </Col>
                <Col lg={3} md={6} xs={12} >
                
                    <Numbercard num={"04"} 
                    color={false}
                    title={"Development"}
                    descreption= {"there are many variations of passages Lorem ipsum dolor sit amet consectetur adipisicing."}
                    />
                </Col>

            </Row>
        </Container>
    </section>
  )
}
