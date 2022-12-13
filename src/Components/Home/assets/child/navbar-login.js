import { Navigate, useNavigate } from "react-router-dom"

// assets
import Logo from "../img/eternal-logo.png"
import Profile from "../img/Profile.png"
import Cart from "../img/Cart.png"

// styling
import "../css/navbar-login.css"

const NavbarLogin = () => {
  const search = (e) => {
    localStorage.setItem("keyword", e.target[0].value)

    nav("/Result")
  }

  let nav = useNavigate()

  return (
    <div className="Navbar">
      <div className="Navbar-Layer1">
        <button onClick={() => nav("/", { state: "/" })}>
          {<img className="Navbar-Eternal" src={Logo} />}
        </button>
      </div>
      <div className="Navbar-Layer2">
        <form className="Search" onSubmit={search}>
          <input className="SearchBar" placeholder="Search" />
          <input className="Navbar-Search" type="submit" value="Search" />
        </form>
        <button onClick={() => nav("/Cart", { state: "/Cart" })}>
          {<input className="Navbar-Cart" type="image" src={Cart} />}
        </button>
        <input
          className="Navbar-Profile"
          type="image"
          src={Profile}
          onClick={() => nav("/profile")}
        />
      </div>
    </div>
  )
}

export default NavbarLogin
