// styling
import {
  Image,
  Center,
  Box,
  Icon,
  Button,
  Collapse,
  useDisclosure,
  Avatar,
  Text,
  Divider,
} from "@chakra-ui/react"
import { ChatIcon, StarIcon, EditIcon, CheckIcon } from "@chakra-ui/icons"
import { Loading } from "notiflix/build/notiflix-loading-aio" // LOADING
import { Report } from "notiflix/build/notiflix-report-aio" // REPORT
import "./assets/css/profile.css"

// assets
import profileImg from "./assets/img/john.jpg"

// components
import _content_topup from "./assets/child/_topup"
import _content_jual from "./assets/child/_cardJual"

// REDUX, REACT
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
// import { setUser, setSaldo, setProduct } from "../redux/counterSlice"
import { useNavigate } from "react-router-dom"

// AXIOS
import axios from "axios"
import { setSaldo, setUser } from "../Redux/counterSlice"

const Profile = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.api.user)
  const saldo = useSelector((state) => state.api.saldo)
  // =============== variable ===============
  const { isOpen, onToggle } = useDisclosure()
  const [navname, setNavname] = useState("") // JUDUL CONTENT

  // action content
  const showContent = (temp) => {
    return (
      setNavname(temp.target.value),
      // document.querySelector(".edit-profile").classList.add("hide"),
      document.querySelector(".topup").classList.add("hide"),
      document.querySelector(".jual").classList.add("hide"),
      // document.querySelector(".wishlist").classList.add("hide"),
      // document.querySelector(".riwayat-jual").classList.add("hide"),
      // document.querySelector(".riwayat-beli").classList.add("hide"),
      // ====== SHOW CONTENT =========
      document.querySelector(`.${temp.target.name}`).classList.remove("hide")
    )
  }

  const getUserData = async () => {
    const action = await axios.post("http://localhost:3333/users", {
      email: user.email,
    })
    dispatch(setUser(action.data))
    dispatch(setSaldo(action.data.balance))
  }

  const logout = () => {
    return (
      Loading.standard(),
      setTimeout(
        () =>
          Report.success(
            `LOGOUT BERHASIL`,
            ``,
            "OKAY",
            () => nav("/"),
            Loading.remove()
          ),
        2500
      )
    )
  }

  useEffect(() => {
    getUserData()
  }, [saldo])

  return (
    <div className="container-profile">
      {/* <Navbar /> */}
      <div className="profile-div">
        <Box className="profile">
          {/* PROFILE */}
          <Center>
            <Image
              className="profile-img"
              borderRadius="full"
              boxSize="10vw"
              marginTop="5vh"
              w={"10vw"}
              src={profileImg}
            />
          </Center>

          <Center>
            <Box
              w="80%"
              mt="2vh"
              lineHeight="4vh"
              fontSize={["sm", "md", "lg", "xl"]}
              color="whiteAlpha.600"
            >
              {" "}
              {user.name}
            </Box>
          </Center>
          <Box fontSize={["sm", "md", "lg", "xl"]} color="whiteAlpha.600">
            Rp {saldo}
          </Box>
          {/* BUTTON PROFILE */}
          <div className="pd">
            <Button
              colorScheme="whiteAlpha"
              variant="link"
              onClick={onToggle}
              mt="3vh"
              fontSize="1.35vw"
            >
              <Icon as={EditIcon} mr="5px" />
              Akun saya
            </Button>

            <Collapse in={isOpen} animateOpacity>
              <Box className="nav-profile">
                <Button
                  colorScheme="whiteAlpha"
                  variant="link"
                  fontSize={"2vh"}
                  value="Profile Saya"
                  name="edit-profile"
                  onClick={(e) => showContent(e)}
                >
                  Edit Profile
                </Button>
                <Button
                  colorScheme="whiteAlpha"
                  variant="link"
                  fontSize={"2vh"}
                  value="Top up"
                  name="topup"
                  onClick={(e) => showContent(e)}
                >
                  Top Up
                </Button>
                <Button
                  colorScheme="whiteAlpha"
                  variant="link"
                  fontSize={"2vh"}
                  value="Jual"
                  name="jual"
                  ml="-5px"
                  onClick={(e) => showContent(e)}
                >
                  Jual
                </Button>
              </Box>
            </Collapse>
            <Button
              colorScheme="whiteAlpha"
              variant="link"
              value="Wishlist"
              name="wishlist"
              mt="5px"
              fontSize="1.3vw"
              onClick={(e) => showContent(e)}
            >
              <Icon as={StarIcon} mr="5px" />
              Wishlist
            </Button>
            <Button
              colorScheme="whiteAlpha"
              variant="link"
              value="Riwayat Jual"
              name="riwayat-jual"
              mt="5px"
              fontSize="1.3vw"
              onClick={(e) => showContent(e)}
            >
              <Icon as={ChatIcon} mr="5px" />
              Riwayat Jual
            </Button>
            <Button
              colorScheme="whiteAlpha"
              value="Riwayat Beli"
              name="riwayat-beli"
              variant="link"
              mt="5px"
              mb="3vh"
              fontSize="1.3vw"
              onClick={(e) => showContent(e)}
            >
              <Icon as={CheckIcon} mr="5px" />
              Riwayat Beli
            </Button>
          </div>
          {/* */}

          <Button
            colorScheme="whiteAlpha"
            variant="link"
            mt="5px"
            fontSize="1.3vw"
          ></Button>
          <Box className="logout">
            <Button
              colorScheme="whiteAlpha"
              variant="link"
              mt="5px"
              fontSize="1.3vw"
              onClick={() => logout()}
            >
              logout
            </Button>
          </Box>
        </Box>

        {/* =============== CONTENT ===============  */}

        <Box className="profile-maincontent">
          <Box
            className="judul"
            fontSize={["sm", "md", "lg", "xl"]}
            color="whiteAlpha.600"
            display={"flex"}
            alignItems={"center"}
            width={"49%"}
            mt={"10px"}
            ml={"47.3%"}
            mb={"15px"}
            justifyContent={"space-between"}
          >
            {navname}
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              fontSize={"2vh"}
              h={"30px"}
            >
              <Text mr={"5px"}>{user.name}</Text>
              <Divider orientation="vertical" h={"40px"} mr={"5px"} />
            </Box>
          </Box>
          <Divider w={"95%"} m={"0 auto 20px"} />
          {/* <Box className="edit-profile hide">
                <_content_editProfile />
              </Box> */}
          <Box className="topup hide">
            <_content_topup />
          </Box>
          <Box className="jual hide">
            <_content_jual />
          </Box>
          {/* <Box className="wishlist hide">
                <_content_wishlist />
              </Box>
              <Box className="riwayat-beli hide">
                <_content_riwayatBeli />
              </Box> */}
          {/* <Box className="riwayat-jual hide">{"hai"}</Box> */}
          {/* <Box className="jual hide">
                <Jual />
              </Box> */}
        </Box>
      </div>
    </div>
  )
}

export default Profile
