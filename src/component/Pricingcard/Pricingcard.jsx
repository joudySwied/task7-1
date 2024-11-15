import React from "react";
import { GoQuestion } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import pricingincard from "./../../assets/imgs/pricingIcon1_1.svg";
import { IoIosClose } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Pricingcard.css";

export default function Pricingcard({ dark, button }) {
  return (
    <div className="cardpricing">
      <div
        className="upper"
        style={{ backgroundColor: dark ? "#18185E" : "#384BFF" }}
      >
        <div className="forp">
          <span className="span1">Regular plans</span>
          <span className="span2">
            $49 <span>/month</span>
          </span>
        </div>
        <img src={pricingincard} alt="img" />
      </div>
      <div className="forfitured ">
        <span>
          <TiTick className="icon1" />
          100GB SSD storage
        </span>
        <GoQuestion />
      </div>
      <div className="forfitured">
        <span>
          <TiTick className="icon1" />
          100GB SSD storage
        </span>
        <GoQuestion />
      </div>
      <div className="forfitured">
        <span>
          <TiTick className="icon1" />
          100GB SSD storage
        </span>
        <GoQuestion />
      </div>
      <div className="forfitured">
        <span>
          <TiTick className="icon1" />
          100GB SSD storage
        </span>
        <GoQuestion />
      </div>
      <div className="forfitured">
        <span>
          <TiTick className="icon1" />
          100GB SSD storage
        </span>
        <GoQuestion />
      </div>
      <div className="forfitured">
        <span>
          <IoIosClose className="icon2" />
          100GB SSD storage
        </span>
        <GoQuestion />
      </div>
      <div className="forfitured">
        <span>
          <IoIosClose className="icon2" />
          100GB SSD storage
        </span>
        <GoQuestion />
      </div>
      <button className={button}>
        {" "}
        GET STARTED NOW <FaLongArrowAltRight className="icon " />
      </button>
    </div>
  );
}
