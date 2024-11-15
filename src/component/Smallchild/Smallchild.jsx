import { FaLocationDot } from "react-icons/fa6";
import "./Smallchild.css";

export default function Smallchild({ icon, above, down,classo }) {
  return (
    <section className={classo}>
      <div className="circleforlocatio">{icon}</div>
      <div className="right">
        <span className="above">{above} </span>
        <span className="down"> {down}</span>
      </div>
    </section>
  );
}
