
import './Numbercard.css'
export default function Numbercard({num,title,descreption,color}) {
  return (
    <div className="numbercard">
      <span className='number' style={{color:(color) ? "white": "rgba(255, 255, 255, 0.486)"}}>{num}</span>
      <span className='title'>{title}</span>
      <p> {descreption}</p>
    </div>
  )
}
