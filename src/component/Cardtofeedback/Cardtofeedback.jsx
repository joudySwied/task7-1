import { FaStar } from "react-icons/fa6";
import { TiStarOutline } from "react-icons/ti";
import  './Cardtofeedback.css'
import { SiComma } from "react-icons/si";


export default function Cardtofeedback({feedback,span ,span2,img,blue}) {
  return (
    <div className={(blue)? "cardtofeedback1" :"cardtofeedback2"} >
      <div className="stars">
        <FaStar className="staricon"/>
        <FaStar className="staricon"/>
        <FaStar className="staricon"/>
        <FaStar className="staricon"/>
        <TiStarOutline className="staricon"/>
      </div>
      <p>
      {feedback}
      </p>
      <div className="under">
        <img src={ img } alt="profile "  className="profile"/>
        <div className="spans">
          <span className="span1"> {span }</span>
          <span className="span2">  {span2 } </span>
        </div>
        <div className="forcomma">
        <SiComma className="comma1"/>
        <SiComma className="comma2"/>
        </div>


      </div>
    </div>
  );
}
