import { Row, Col, Container } from "react-bootstrap";
import star from "./../../assets/imgs/asterisk.svg";
import "./Lastabout.css"
import brandblue from "./../../assets/imgs/aboutbrand.jpg"
import brandgray from "./../../assets/imgs/aboutbrandg.jpg"

export default function Lastabout() {
  return (
    <section>
        <div className="totitle">
            <div className="line"></div>
            <span>1K+ BRANDS TRUST US </span>
            <div className="line"></div>
        </div>
        <Container >
        <Row className="row">
        <Col lg={2} md={4} sm={12} className="brand gray ">
          <img src={brandgray} alt="brand" />
        </Col>
        <Col lg={2} md={4} sm={12} className="brand gray" >
        <img src={brandgray} alt="star" alt="brand" />
        </Col>
        <Col lg={2} md={4} sm={12} className="brand blue ">
          <img src={brandblue} alt="brand" />
        </Col>
        <Col lg={2} md={4} sm={12} className="brand gray">
        <img src={brandgray} alt="brand" />

        </Col>
        <Col lg={2} md={4} sm={12} className="brand gray">
        <img src={brandgray} alt="brand" />

        </Col>
      </Row>

        </Container>

    </section>
  )
}
