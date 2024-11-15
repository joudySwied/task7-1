import React from "react";
import "./Cardforfifth.css";
import { PiArrowRight } from "react-icons/pi";


export default function Cardforfifth({img1,p1,span1,p2,person}) {
  return (
    <div className="cardforfifth">
      <img src={img1} alt="network" className="bigpicture" />
      <div className="data">
        <div className="child1">
          <p> {p1} </p>
          <span>{span1} </span>
        </div>
        <p className="child2"> {p2}</p>
        <div className="child3">
          <img src={person} alt="" className="person"/>
          <div className="forsmallspan">
            <span className="span1">Admine</span>
            <span className="span2">Co, Founder</span>
          </div>
          <div className="squareforarrow">
          <PiArrowRight />
          </div>

        </div>
      </div>
    </div>
  );
}
