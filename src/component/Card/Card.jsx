import "./Card.css";
// import servicelogo1 from "./../../assets/imgs/serviceIcon1_3.svg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Card({servicelogo1, title, des}) {
  return (
    <div className="cardi">
      <div className="squreforimg">
        <img src={servicelogo1} alt="woo comerce" className="imagforcard" />
      </div>
      <h5>{title} </h5>
      <p>{des}</p>
      <button>
        {" "}
        Read more <MdKeyboardDoubleArrowRight className="icon" />
      </button>
    </div>
  );
}
