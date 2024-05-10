import Image1 from '../images/comp6/contact_Raven002-1.webp'
import Image2 from '../images/comp6/Picture 122-2.webp'
import Image3 from '../images/comp6/2018-026_Tri-X_Print-001-2.webp'
import Image4 from '../images/comp6/2018-026_Tri-X_Print-008-1.webp'
import Image5 from '../images/comp6/2018-015_Portra 160-013-2.webp'
import Image6 from '../images/comp6/200410_Raven_ID-Twiske-2.webp'
import Image7 from '../images/comp6/2019-037_Ektar 100-001-1.webp'
import Image8 from '../images/comp6/Picture 688-1-1500.webp'
import Image9 from '../images/comp6/Screenshot 2020-07-21 at 15_25_16.webp'

export default function Comp6() {

  return (
    <div className="comp-container">

      <div className="img-container" style={{justifyContent: "right"}}>
        <img src={Image1} alt="a 014-2" style={{width: "70%", maxHeight: "120vh", marginTop: "90vh", marginRight: "1%"}}/>
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image2} alt="a 004-2" style={{width: "20%", marginTop: "15vh", marginRight: "20%"}} />
        <img src={Image3} alt="icture 156-2" style={{width: "35%", marginTop: "45%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image4} alt="Screenshot 2020-07-21 at 14_31_12" style={{width: "25%", maxHeight: "100vh", marginTop: "60vh", marginLeft: "10%"}} />
      </div>

      <div className="img-container">
        <img src={Image5} alt="a 008-1-2." style={{width: "40%", marginTop: "60vh", marginRight: "5%"}} />
        <img src={Image6} alt="a 008-1-2." style={{width: "40%", marginTop: "60vh"}} />
      </div>

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image7} alt="a 008-1-2." style={{width: "30%", marginTop: "60vh", marginRight: "10%"}} />
      </div>

      <div className="img-container">
        <img src={Image8} alt="a 008-1-2." style={{width: "35%", marginTop: "50vh", marginLeft: "10%"}} />
      </div>

      <div className="img-container" style={{justifyContent: "right"}}>
        <img src={Image9} alt="a 008-1-2." style={{width: "30%", marginTop: "100vh", marginRight: "15%", marginBottom: "60vh"}} />
      </div>

    </div>
  )
}
