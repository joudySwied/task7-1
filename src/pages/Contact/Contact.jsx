import End from "../../component/End/End";
import Footer from "../../component/Footer/footer";
import Hero2 from "../../component/Hero2/Hero2";
import Nav2 from "../../component/Nav2/NAV2";
import Seccontact from "../../component/Seccontact/Seccontact";
import "./Contact.css"

export default function Contact() {
  return (
    <div>
      <Nav2 />
      <Hero2 title={"Contact Us"} span={"Home  > Contact"} />
      <Seccontact />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1108465.0487607277!2d53.87480950393283!3d24.13550143266501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2suk!4v1731694475469!5m2!1sen!2suk" className="mab" ></iframe>
      <Footer clasfoot={"footer1"} yes ={true} />   
      <End />
    </div>
  )
}
