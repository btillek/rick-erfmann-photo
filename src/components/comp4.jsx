import Image1 from '../images/comp4/2018-041_print-001-1.webp'
import Image2 from '../images/comp4/Picture 113-2.webp'
import Image3 from '../images/comp4/Picture 133-2.webp'
import Image4 from '../images/comp4/Picture 058-2.webp'
import Image5 from '../images/comp4/Screenshot 2020-07-21 at 14_30_45.webp'
import Image6 from '../images/comp4/Screenshot 2020-07-21 at 14_35_15.webp'
import Image7 from '../images/comp4/Picture 029-2.webp'
import Image8 from '../images/comp4/Liz_portrait-002-3.webp'
import Image9 from '../images/comp4/Picture 073-2.webp'
import Image10 from '../images/comp4/Picture 129-2.webp'

export default function Comp4() {

  return (
    <div className="comp-container">

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image1} alt="a 014-2" style={{width: "35%", maxHeight: "95vh", marginTop: "30vh"}}/>
      </div>

      <div className="img-container" style={{justifyContent: "right"}}>
        <img src={Image2} alt="a 004-2" style={{width: "55%", marginTop: "25vh", marginRight: "1%"}} />
      </div>

      <div className="img-container">
        <img src={Image3} alt="icture 156-2" style={{width: "25%", marginTop: "25%"}} />
        <img src={Image4} alt="Screenshot 2020-07-21 at 14_31_12" style={{width: "75%", maxHeight: "100vh", marginTop: "25%", marginLeft: "10%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "right"}}>
        <img src={Image5} alt="a 008-1-2." style={{width: "30%", marginTop: "40vh", marginRight: "5%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image6} alt="a 008-1-2." style={{width: "20%", marginTop: "30vh"}} />
      </div>

      <div className="img-container">
        <img src={Image7} alt="a 008-1-2." style={{width: "30%", marginTop: "25vh", marginLeft: "10%"}} />
        <img src={Image8} alt="a 008-1-2." style={{width: "25%", marginTop: "70vh", marginLeft: "25%"}} />
      </div>

      <div className="img-container">
        <img src={Image9} alt="a 008-1-2." style={{width: "70%", maxHeight: "100vh", marginTop: "30vh", marginLeft: "7%"}} />
      </div>

      <div className="img-container">
        <img src={Image10} alt="a 008-1-2." style={{width: "15%", marginTop: "50vh", marginLeft: "5%"}} />
      </div>

    </div>
  )
}
