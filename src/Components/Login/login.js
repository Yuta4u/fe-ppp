//asset
import logo from "../Login/assets/img/eternal-logo.png"
import bg from "../Login/assets/img/bglogin.png"

// styling
import "../Login/assets/css/login.css"

// redux
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../Redux/counterSlice"

// others
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
// import { setCurrentPath } from "../Redux/counterSlice"

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // redux
  const dispatch = useDispatch()
  // const user = useSelector((state) => state.action.user)

  const Login = async (e) => {
    try {
      const tryLogin = await axios.post("http://localhost:3333/login", {
        email,
        password,
      })
      if (tryLogin) {
        const getUserLogin = await axios.post("http://localhost:3333/users", {
          email,
          refresh_token: tryLogin.data.accessToken,
        })
        // dispatch(setUserLogin(getUserLogin.data))
        dispatch(setUser(getUserLogin.data))
        if (getUserLogin) {
          alert("berhasil login :)")
          navigate("/home")
        }
      }
    } catch (err) {
      return alert("email atau password tidak valid :(")
    }
  }

  return (
    <div className="Login">
      <div className="colomn1">
        <div className="apa"></div>
        <img className="bglogin" src={bg} />
      </div>
      <div className="colomn2">
        <div className="logonama">
          <button onClick={() => navigate("/", { state: "/" })}>
            <img className="iimg" src={logo}></img>
          </button>
        </div>
        <div className="isi1">
          <h1>Welcome</h1>
          <div className="login-form">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="btnlogin" type="button" onClick={Login}>
              Login
            </button>
          </div>
          <span>
            <label for="akun">Belum punya akun? </label>
            <button
              id="akun"
              onClick={() => navigate("/register", { state: "/register" })}
            >
              Register
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
