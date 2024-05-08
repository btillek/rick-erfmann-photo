import Image1 from '../images/comp1/Picture 055-2.webp'
import Image2 from '../images/comp1/Picture 103-2.webp'
import Image3 from '../images/comp1/liege_ 018-2.webp'
import Image4 from '../images/comp1/200410_Raven_ID-blue-2.webp'
import Image5 from '../images/comp1/portra400-032.webp'
import Image6 from '../images/comp1/2020-007_Kodacolor 200-0011-1.webp'
import Image7 from '../images/comp1/Picture 780-1-1500_tif.webp'

export default function Comp1() {

  const styleRight = {
    justifyContent: "right"
  }

  return (
    <div className="comp-container">

      <div className="img-container" style={styleRight}>
        <img src={Image1} alt="055-2.webp" style={{width: "50%", marginTop: "10%", marginRight: "10%"}}/>
      </div>

      <div className="img-container">
        <img src={Image2} alt="103-2.webp" style={{width: "45%", marginTop: "10%", marginLeft: "10%"}} />
      </div>

      <div className="img-container" style={styleRight}>
        <img src={Image3} alt="liege_ 018-2.webp" style={{width: "20%", height: "20%", marginTop: "20%"}} />
        <img src={Image4} alt="200410_Raven_ID-blue-2.webp" style={{width: "40%", marginLeft: 20, marginTop: "18%", marginRight: "5%"}} />
      </div>

      <div className="img-container" style={styleRight}>
        <img src={Image5} alt="portra400-032.webp" style={{width: "45%", maxHeight: "100vh", marginTop: "20%", marginRight: "15%"}} />
      </div>

      <div className="img-container">
        <img src={Image6} alt="2020-007_Kodacolor 200-0011-1.webp" style={{width: "20%", maxHeight: "50vh", marginTop: "2%", marginLeft: "2%"}} />
      </div>

      <div className="img-container" style={styleRight}>
        <img src={Image7} alt="780-1-1500_tif.webp" style={{width: "25%", marginTop: "5%", marginRight: "10%"}} />
      </div>

    </div>
  )
}
