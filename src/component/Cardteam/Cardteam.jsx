import { FiShare2 } from "react-icons/fi";
import "./Cardteam.css";
// import member1 from "./../../assets/imgs/04.webp"

export default function Cardteam({ name, job , photo }) {
  return (
    <div className="cardteam ">
      <img src={ photo } alt="member " />
      <div className="introduce">
        <div className="forshareicon">
        <FiShare2 className="icon "/>    
        </div>
      <FiShare2 className="icon "/>
      <h5>{name}</h5>
      <span> { job } </span>
       </div>
     
    </div>
  );
}
