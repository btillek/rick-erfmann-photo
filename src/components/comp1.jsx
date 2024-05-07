import Image1 from '../images/Picture 055-2.webp'
import Image2 from '../images/Picture 103-2.webp'
import Image3 from '../images/liege_ 018-2.webp'
import Image4 from '../images/200410_Raven_ID-blue-2.webp'
import Image5 from '../images/portra400-032.webp'
import Image6 from '../images/2020-007_Kodacolor 200-0011-1.webp'
import Image7 from '../images/Picture 780-1-1500_tif.webp'

export default function Comp1() {

  const style1 = {
    width: 720,
    left: "20vw",
    marginTop: 50
  }

  const styleSmall = {
    left: 0,
    height: "auto",
    maxHeight: "100vh",
    maxWidth: "90vw",
    marginTop: 50
  }

  return (
    <div className="comp-container">

      <div className="img-container">
        <img src={Image1} alt="055-2.webp" style={window.innerWidth > 1024 ? style1 : styleSmall}/>
      </div>

      <div className="img-container">
        <img src={Image2} alt="103-2.webp" style={{width: 682, right: "10vw", marginTop: 200}} />
      </div>

      <div className="img-container">
        <img src={Image3} alt="liege_ 018-2.webp" style={{width: 297, height: 280, left: "10vw", marginTop: 300}} />
        <img src={Image4} alt="200410_Raven_ID-blue-2.webp" style={{width: 569, left: "10vw", marginLeft: 20, marginTop: 270}} />
      </div>

      <div className="img-container">
        <img src={Image5} alt="portra400-032.webp" style={{width: 600, left: "15%", marginTop: 300}} />
      </div>

      <div className="img-container">
        <img src={Image6} alt="2020-007_Kodacolor 200-0011-1.webp" style={{width: 249, right: "30%", marginTop: 20}} />
      </div>

      <div className="img-container">
        <img src={Image7} alt="780-1-1500_tif.webp" style={{width: 378, left: "20%", marginTop: 50}} />
      </div>

    </div>
  )
}
