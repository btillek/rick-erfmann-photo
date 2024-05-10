import Image1 from '../images/comp3/Picture 065-2.webp'
import Image2 from '../images/comp3/Picture 106-2.webp'
import Image3 from '../images/comp3/2016-064_Tri-X 400-010-2.webp'
import Image4 from '../images/comp3/Picture 238-2.webp'
import Image5 from '../images/comp3/Picture 171-2_tif.webp'
import Image6 from '../images/comp3/Picture 086-2.webp'
import Image7 from '../images/comp3/Picture 082-2.webp'
import Image8 from '../images/comp3/2018-026_Tri-X_Print-002-1.webp'

export default function Comp2() {

  return (
    <div className="comp-container">

      <div className="img-container">
        <img src={Image1} alt="a 014-2" style={{width: "70%", maxHeight: "95vh", marginTop: "25vh", marginLeft: "2%"}}/>
      </div>

      <div className="img-container" style={{justifyContent: "right"}}>
        <img src={Image2} alt="a 004-2" style={{width: "25%", marginTop: "15vh", marginRight: "15%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image3} alt="icture 156-2" style={{width: "30%", marginTop: "20%", marginLeft: "10%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image4} alt="Screenshot 2020-07-21 at 14_31_12" style={{width: "35%", marginTop: "25%", marginLeft: "35%"}} />
      </div>

      <div className="img-container">
        <img src={Image5} alt="a 008-1-2." style={{width: "40%", marginTop: "40vh", marginLeft: "10%"}} />
        <img src={Image6} alt="a 008-1-2." style={{width: "20%", marginTop: "80vh", marginLeft: "25%"}} />
      </div>

      <div className="img-container">
        <img src={Image7} alt="a 008-1-2." style={{maxHeight: "120vh", maxWidth: "60vw", marginTop: "40vh"}} />
        <img src={Image8} alt="a 008-1-2." style={{width: "20%", marginTop: "80vh", marginLeft: "15%"}} />
      </div>

    </div>
  )
}
