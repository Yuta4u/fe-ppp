// styling
import "./assets/css/home.css"
import Plant from "./assets/img/Plant.jpg"

// assets
import Reason from "./assets/child/reason"
import Label from "./assets/child/label"
import Navbar from "./assets/child/navbar-login"

// others
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home-Child">
        <div className="Home-Layer1">
          <h1 className="Home-Header1">Plants Make</h1>
          <h1 className="Home-Header2">Better Life</h1>
          <p className="Home-Description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/Explore" className="Home-Explorer">
            Explorer
          </Link>
        </div>
        <div className="Home-Layer2">
          <img src={Plant} alt="product" />
        </div>
      </div>
      <Label />
      <div className="Slider">
        <div className="Products-Header">
          <h2>Products</h2>
          {/* <SwiperMod /> */}
        </div>
      </div>
      <Reason />
    </div>
  )
}

export default Home
