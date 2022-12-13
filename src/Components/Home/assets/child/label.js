//STYLING
import "../css/label.css"

//assets
import logo from "../img/eternal-logo2.png"
import plantLabel from "../img/Plant-Label.png"

const Label = () => {
  return (
    <div className="Label">
      <img src={logo} />
      <img className="PlantLabel" src={plantLabel} />
      <h2>
        Set the scene and welcome loved <br /> ones with thoughtful touches of
        greenery. <br />
        Enjoy online delivery on your order.
      </h2>
    </div>
  )
}

export default Label
