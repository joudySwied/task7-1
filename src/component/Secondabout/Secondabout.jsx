import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";
import Cardteam from "../Cardteam/Cardteam";
import member1 from "./../../assets/imgs/04.webp";
import member2 from "./../../assets/imgs/05.webp";
import member3 from "./../../assets/imgs/06.webp";
import member4 from "./../../assets/imgs/07.webp";
import "./Secondabout.css"

export default function Secondabout() {
  return (
    <section className="secondabout">
      <div className="smalltitle">
        <FaArrowLeftLong className="icon" />
        <h3>TEAM MEMBERS </h3>
        <FaArrowRightLong className="icon" />
      </div>
      <div className="row2">
        <h4>Our Dedicated Team Members</h4>
        <div className="forbutton">
        <button>
        
          All Members <FaArrowRightLong className="icon" />
        </button>
        </div>


      </div>
      <Container>
          <Row>
            <Col lg={3} md={6} xs={12} className="forcardmember">
              
              <Cardteam
                photo={member1}
                name={"Masirul Islam"}
                job={"Web designer"}
              />
            </Col>
            <Col lg={3} md={6} xs={12} className="forcardmember">
              
              <Cardteam
                photo={member2}
                name={"Jessica Mardol"}
                job={"Cyper Expert"}
              />
            </Col>
            <Col lg={3} md={6} xs={12} className="forcardmember">
              
              <Cardteam
                photo={member3}
                name={"Arnold Hemingway"}
                job={"Web Expert"}
              />
            </Col>
            <Col lg={3} md={6} xs={12} className="forcardmember">
              
              <Cardteam
                photo={member4}
                name={"Shicon Haque"}
                job={"Data Analyst"}
              />
            </Col>

          </Row>
        </Container>
    </section>
  );
}
