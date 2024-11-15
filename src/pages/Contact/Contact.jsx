import End from "../../component/End/End";
import Footer from "../../component/Footer/footer";
import Hero2 from "../../component/Hero2/Hero2";
import Nav2 from "../../component/Nav2/NAV2";

export default function Contact() {
  return (
    <div>
      <Nav2 />
      <Hero2 title={"Contact Us"} span={"Home  > Contact"} />
      <Footer clasfoot={"footer1"} yes ={true} />   
      <End />
    </div>
  )
}
