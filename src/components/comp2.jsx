import Image1 from '../images/comp2/a 014-2.webp'
import Image2 from '../images/comp2/a 004-2.webp'
import Image3 from '../images/comp2/Picture 156-2.webp'
import Image4 from '../images/comp2/Screenshot 2020-07-21 at 14_31_12.webp'
import Image5 from '../images/comp2/a 008-1-2.webp'
import Image6 from '../images/comp2/2018-028_Prints-004-1.webp'

export default function Comp2() {

  return (
    <div className="comp-container">

      <div className="img-container" style={{justifyContent: "center"}}>
        <img src={Image2} alt="a 004-2" style={{width: "35%", marginTop: "50vh", marginRight: "5%"}} />
        <img src={Image1} alt="a 014-2" style={{width: "25%", marginTop: "25vh"}}/>
      </div>

      <div className="img-container" style={{justifyContent: "space-between"}}>
        <img src={Image3} alt="icture 156-2" style={{width: "60%", marginTop: "20%"}} />
        <img src={Image4} alt="Screenshot 2020-07-21 at 14_31_12" style={{width: "35%", maxHeight: "100vh", marginTop: "40%", marginRight: "2%"}} />
      </div>

      <div className="img-container">
        <img src={Image5} alt="a 008-1-2." style={{width: "40%", maxHeight: "70vh", marginTop: "40vh", marginLeft: "20%"}} />
      </div>

      <div className="img-container">
        <img src={Image6} alt="a 008-1-2." style={{width: "25%", maxHeight: "70vh", marginTop: "40vh", marginLeft: "15%"}} />
      </div>

    </div>
  )
}
