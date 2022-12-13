import { useNavigate } from "react-router-dom"

// styling
import "../css/navbar.css"

const Navbar = () => {
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
        <button
          className="Navbar-Login"
          onClick={() => nav("/Login", { state: "/Login" })}
        >
          Login
        </button>
        <button
          className="Navbar-Register"
          onClick={() => nav("/Signup", { state: "/Signup" })}
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Navbar
