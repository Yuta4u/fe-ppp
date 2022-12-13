import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

// asset
import bg from "../Register/assets/img/bglogin.png"
import logo from "../Register/assets/img/eternal-logo.png"

// styling
import "../Register/assets/css/register.css"

const Register = () => {
  const [name, setName] = useState("")
  const [phone_number, setNohp] = useState("")
  const [address, setAddress] = useState("")
  const [gender, setGender] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmpassword] = useState("")

  //navigate
  const navigate = useNavigate()

  //action
  const register = async (req, res) => {
    const data = { name, phone_number, address, gender, email, password }
    try {
      const act = await axios.post("http://localhost:3333/register", data)
      if (act) {
        alert("REGISTER BERHASIL YEY")
        navigate("/login")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Signup">
      <div className="colomndftr">
        <div className="apadftr"></div>
        <img className="bglogindftr" src={bg} />
      </div>
      <div className="isi3">
        <div className="logonamadftr">
          <button onClick={() => navigate("/", { state: "/" })}>
            <img src={logo}></img>
          </button>
        </div>
        <div className="isi4">
          <input
            className="dftr"
            type="text"
            placeholder="Nama "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <input
            className="dftr"
            type="text"
            placeholder="No. Handphone"
            value={phone_number}
            onChange={(e) => setNohp(e.target.value)}
          />{" "}
          <br />
          <input
            className="dftr"
            type="text"
            placeholder="Alamat "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />{" "}
          <br />
          <input
            className="gender"
            type="radio"
            id="male"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          <label for="male">Male</label>
          <input
            className="gender"
            type="radio"
            id="female"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          <label for="female">Female</label> <br />
          <input
            className="dftr"
            type="text"
            placeholder="Input e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          <input
            className="dftr"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <input
            className="dftr"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          />{" "}
          <br />
          <button className="btnsignup" onClick={register}>
            Register
          </button>{" "}
          <br />
          <span>
            <label for="akun">Sudah punya akun? </label>
            <button
              id="akun"
              onClick={() => navigate("/Login", { state: "/Login" })}
            >
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
