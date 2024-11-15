import Smallchild from "../Smallchild/Smallchild";
import "./Cardinfoot.css";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

export default function Cardinfoot() {
  return (
    <section className="Cardinfoot">
      <div className="address">
        <Smallchild
          icon={<FaLocationDot />}
          above={"Address"}
          down={"4648 Rocky Road Philadelphia"}
        />
      </div>
      <div className="line"></div>

      <div className="email">
        {" "}
        <Smallchild
          icon={<MdEmail />}
          above={"Send Email"}
          down={<a href="#"> info@Example.com</a>}
        />
      </div>
      <div className="line"></div>

      <div className="call">
        <Smallchild
          icon={<MdCall />}
          above={"Call Emergency"}
          down={"+88 0123 654 99"}
        />
      </div>
    </section>
  );
}
