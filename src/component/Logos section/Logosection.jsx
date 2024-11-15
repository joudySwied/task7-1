
import logo1 from './../../assets/imgs/heroShape1_3.webp'
import logo2 from './../../assets/imgs/brandLogo1_1.svg'
import logo3 from './../../assets/imgs/brandLogo1_2.svg'
import logo4 from './../../assets/imgs/brandLogo1_3.svg'
import logo5 from './../../assets/imgs/brandLogo1_4.svg'
import logo6 from './../../assets/imgs/brandLogo1_5.svg'
import './Logosection.css' 
import { Row, Col } from 'react-bootstrap';

export default function Logosection() {
  return (
    <section className='sectionforlogos'>
       <div className="circleforlogo">
            <img src={logo1} alt="" />
       </div>

           <Row className='logoos'>
      <Col lg={2} md={3} >  <img src={logo2} alt="brand logo"  className='brandlogo hide'/></Col>
      <Col lg={2} md={3} >  <img src={logo3} alt="brand logo"  className='brandlogo hide'/></Col>
      <Col lg={2} md={3} >  <img src={logo4} alt="brand logo"  className='brandlogo '/></Col>
      <Col lg={2} md={3} >  <img src={logo5} alt="brand logo"  className='brandlogo hide'/></Col>
      <Col lg={2} md={3} >  <img src={logo6} alt="brand logo"  className='brandlogo hide'/></Col>


    </Row>
    </section>
  )
}
