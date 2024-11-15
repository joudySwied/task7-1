import Hero from "./../../component/hero/hero";
import Logosection from "./../../component/Logos section/Logosection";
import Navbar from "./../../component/Navbar/Navbar";
import Ourservice from "./../../component/Ourservice/Ourservice";
import "bootstrap/dist/css/bootstrap.min.css";
import Secondsection from "./../../component/Secondsection/Secondsection";
import Thirdsection from "./../../component/Thirdsection/Thirdsection";
import Fourthsection from "./../../component/Fourthsection/Fourthsection";
import Fifthsection from "./../../component/Fifthsection/Fifthsection";
import End from "../../component/End/End";
import Footer from "../../component/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logosection />
      <Ourservice />
      <Secondsection />
      <Thirdsection />
      <Fourthsection />
      <Fifthsection />
      <Footer clasfoot={"footer"} yes={false} />
      <End />
    </>
  );
}
