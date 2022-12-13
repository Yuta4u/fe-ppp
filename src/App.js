// REACT ROUTE
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// COMPONENTS
import Register from "./Components/Register/register"
import Login from "./Components/Login/login"
import Home from "./Components/Home/home"
import Profile from "./Components/Profile/Profile"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/register"} element={<Register />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/profile"} element={<Profile />}></Route>
      </Routes>
    </Router>
  )
}

export default App
