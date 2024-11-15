import React from "react";
import Nav2 from "../../component/Nav2/NAV2";
import Hero2 from "../../component/Hero2/Hero2";
import Firstabout from "../../component/Firstabout/Firstabout";
import Secondabout from "../../component/Secondabout/Secondabout";
import Lastabout from "../../component/Lastabout/Lastabout";
import Footer from "../../component/Footer/footer";
import End from "../../component/End/End";
// import Cardinfoot from "../../component/Cardinfoot/Cardinfoot";


export default function About() {
  return (
    <div>
      <Nav2 />
      <Hero2 title={"About Us"} span={"Home  > About us"} />
      <Firstabout />
      <Secondabout />
      <Lastabout />
      <Footer clasfoot={"footer1"} yes ={true} />   
         <End />



    </div>
  );
}
