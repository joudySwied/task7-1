import'./Hero2.css'
import dicore1 from "./../../assets/imgs/element.webp"
import dicore2 from "./../../assets/imgs/line-element.webp"

export default function Hero2({title,span}) {
  return (
    <section className='hero2'>
        <div className='hero22'>
        <div className='descriptionhero2'>
        <h2>{title}</h2>
        <span>{span}</span>
      </div>
      <img src={dicore1} alt="dicore" className='dicore1'/>
      <img src={dicore2} alt="dicore" className='dicore2' />
        </div>

    </section>
  )
}
