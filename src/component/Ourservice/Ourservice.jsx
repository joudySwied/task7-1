import "./Ourservice.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Cardourservice from "../Cardourservice/Cardourservice";
import { Container } from "react-bootstrap";

export default function Ourservice() {
  return (
    <Container className="ourservice">
      <div className="smalltitle">
        <FaArrowLeftLong className="icon" />
        <h3>OUR SERVICE</h3>
        <FaArrowRightLong className="icon" />
      </div>
      <div className="row2">
      <h4>Elevating Businesses With IT Ingenuity</h4>
      <div className="foriconsinservice">
        <div className="circleforicon circleforicon1">
          <FaArrowLeftLong className="icon"/>
        </div>
        <div className="circleforicon">
          <FaArrowRightLong className="icon icon2" />
        </div>
      </div>
      </div>

      <Cardourservice />
      <iframe  src="https://www.youtube.com/embed/uWQ_8CtvzoY?si=28-wW5oxPaxwgr6n" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
    </Container>
  );
}
