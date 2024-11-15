import { Row, Col } from "react-bootstrap";
import star from "./../../assets/imgs/asterisk.svg";
import "./Firstabout.css"

export default function Firstabout() {
  return (
    <section className="firstabout">
      <Row>
        <Col lg={3} md={6} sm={12} className="subject nothide">
          <img src={star} alt="star" />
          <span>Cyber security</span>
          <img src={star} alt="star1" className="star"/>
        </Col>
        <Col lg={3} md={6} sm={12} className="subject hide" >
          <img src={star} alt="star" />
          <span>IT Soulution</span>
        </Col>
        <Col lg={3} md={6} sm={12} className="subject hide ">
          <img src={star} alt="star" />
          <span>Technology</span>
        </Col>
        <Col lg={3} md={6} sm={12} className="subject hide">
          <img src={star} alt="star" />
          <span>Data Secur</span>
        </Col>
      </Row>
    </section>
  );
}
