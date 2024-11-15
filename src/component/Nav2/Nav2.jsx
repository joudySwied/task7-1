import "./Nav2.css";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "./../../assets/imgs/logo.svg";
import logo2 from "./../../assets/imgs/plane.webp";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

export default function Nav2() {
  const [Toglle, setToglle] = useState(true);
  return (
    <nav className="Nav2">
      <div className="rectangle">
        {" "}
        <div className="tringle "> </div>
        <button>
          GET A QUOTE
          <FaArrowRightLong className="righticon" />
        </button>
      </div>
      <img src={logo2} alt="logo" className="logo2" />
      <img src={logo} alt="logo" className="logo" />
      <div className={Toglle ? "setoflinks1" : "setoflinks"}>
        <ul>
          <IoIosClose className="close " onClick={() => setToglle(true)} />

          <li>
            {" "}
            <Link to={"/"}> Home </Link>
            <FaAngleDown className="downicon" />
          </li>
          <li>
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li>
            services
            <FaAngleDown className="downicon" />
          </li>
          <li>
            Pages
            <FaAngleDown className="downicon" />
          </li>
          <li>
            Biog
            <FaAngleDown className="downicon" />
          </li>
          <li>
            {" "}
            <Link to={"/contact"}> Contact</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="navRight">

        <CiSearch className="searchicon" />
        <span onClick={() => setToglle(false)}>
          <IoMenu className="menu" />
        </span>
      </div>
    </nav>
  );
}
