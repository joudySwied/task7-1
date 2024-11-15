import "./Hero.css";
import { TiTick } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiWavePulse1 } from "react-icons/ci";
import { Container, Row, Col } from "react-bootstrap";
import heroimg from "./../../assets/imgs/heroThumb1_1.webp";
import people from "./../../assets/imgs/profileShape1_1.webp";
import { FaStar } from "react-icons/fa";


export default function Hero() {
  return (
    <div className="hero">
    <Container >
      <Row className="row">
        <Col md={7} sm={12} className="lefthero ">
          <p>
            {" "}
            <CiWavePulse1 className="icon" /> Every Thing You Need To Create A
            website{" "}
          </p>
          <h1>Business Innovation With IT Services Expertise</h1>

          <div className="divforlist">
            <ul className="list1">
              <li>
                <TiTick className="tickicon" />
                Deployment and Support
              </li>
              <li>
                <TiTick className="tickicon" />
                Discovery and Analysis
              </li>
            </ul>

            <ul className="list2">
              <li>
                <TiTick className="tickicon" />
                Flexibility and adaptability
              </li>
              <li>
                <TiTick className="tickicon" />
                Competitive Advantage
              </li>
            </ul>
          </div>
          <button>
            GET STARTED <FaArrowRightLong className="righticon" />
          </button>
          <div className="inbottom">
            <div className="childhero childheroplus">
              <p> <FaStar  className="star"/> Trustipilot
              </p>
              <div className="grandchild">
                <img src={people} alt="people" />
                <div className="smallest">
                <span><FaStar /><FaStar /><FaStar /></span>
                <span className="span2">450+ Revews</span>
                </div>
              </div>
            </div>
            <div className="childhero childheroplusplus">
            <p>  Google
              </p>
              <div className="grandchild">
                <img src={people} alt="people" />
                <div className="smallest">
                <span><FaStar /><FaStar /><FaStar /></span>
                <span className="span2">450+ Revews</span>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col md={5} sm={12} >
          <div className="righthero">
            <img src={heroimg} alt="a person" />
          </div>
        </Col>
      </Row>

    </Container>
    </div>

  );
}
