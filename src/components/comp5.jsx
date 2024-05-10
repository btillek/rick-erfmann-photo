import Image1 from '../images/comp5/Picture 211-1-1.webp'
import Image2 from '../images/comp5/Picture 136-2.webp'
import Image3 from '../images/comp5/Picture 188-1.webp'
import Image4 from '../images/comp5/Picture 218-1.webp'
import Image5 from '../images/comp5/Picture 038-2.webp'
import Image6 from '../images/comp5/Picture 107-2.webp'
import Image7 from '../images/comp5/Picture 060-2.webp'
import Image8 from '../images/comp5/Picture 163-2.webp'
import Image9 from '../images/comp5/Picture 235-2.webp'
import Image10 from '../images/comp5/Picture 566-1.webp'

export default function Comp5() {

  return (
    <div className="comp-container">

      <div className="img-container" style={{justifyContent: "right"}}>
        <img src={Image1} alt="a 014-2" style={{width: "40%", maxHeight: "95vh", marginTop: "30vh", marginRight: "5%"}}/>
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image2} alt="a 004-2" style={{width: "35%", marginTop: "25vh", marginRight: "5%"}} />
        <img src={Image3} alt="icture 156-2" style={{width: "35%", marginTop: "45%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image4} alt="Screenshot 2020-07-21 at 14_31_12" style={{width: "45%", maxHeight: "100vh", marginTop: "30%", marginRight: "25%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "right"}}>
        <img src={Image5} alt="a 008-1-2." style={{width: "15%", marginTop: "40vh", marginRight: "10%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image6} alt="a 008-1-2." style={{width: "30%", marginTop: "30vh", marginLeft: "5%"}} />
      </div>

      <div className="img-container">
        <img src={Image7} alt="a 008-1-2." style={{width: "30%", marginTop: "10vh", marginLeft: "10%"}} />
        <img src={Image8} alt="a 008-1-2." style={{width: "35%", marginTop: "50vh", marginLeft: "10%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image9} alt="a 008-1-2." style={{width: "35%", maxHeight: "100vh", marginTop: "40vh", marginLeft: "7%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "right"}}>
        <img src={Image10} alt="a 008-1-2." style={{width: "25%", marginTop: "5vh", marginRight: "10%"}} />
      </div>

    </div>
  )
}
