import "../css/edit_profile.css"
import { Avatar, Box, Divider, Flex, VStack, Button } from "@chakra-ui/react"
import ProfileImg from "../assets/img/john.jpg"

import { SettingsIcon } from "@chakra-ui/icons"

// COMPONENTS
import EditForm from "./action/editForm"
import ProfileEdit from "./action/profileEdit"

// REACT / REDUX
import { useSelector } from "react-redux"
import { useState } from "react"

const EditProfile = () => {
  const profile = useSelector((state) => state.api.user) // ngambil hasil redux
  const [flag, setFlag] = useState(false)

  const showed = (x) => {
    return x ? <EditForm /> : <ProfileEdit props={profile} />
  }

  return (
    <Flex className="edit-profile-div">
      <Flex className="edit-profile-child" color="whiteAlpha.600">
        <VStack
          spacing={3}
          align="stretch"
          w={"30%"}
          //   bgColor={"whatsapp.200"}
          display={"flex"}
          gap={"30px"}
        >
          <Box>Nama Toko</Box>
          <Box>Nama</Box>
          <Box>Email</Box>
          <Box>Nomor Telepon</Box>
          <Box>Jenis Kelamin</Box>
          <Box>Tanggal lahir</Box>
          <Box>Alamat</Box>
        </VStack>

        {/* ============ PROFILE / FORM EDIT =========== */}
        <VStack
          align="stretch"
          w={"40%"}
          gap={flag ? "44px" : "30"}
          mr={"5vw"}
          spacing={flag ? "" : "11px"}
        >
          <Box mb="-10px">
            {`${profile.nama} STORE`}
            <Button
              className="settings"
              background="none"
              ml={"5px"}
              onClick={() => setFlag(flag ? false : true)}
            >
              <SettingsIcon />
            </Button>
          </Box>
          {showed(flag)}
          {/* {saveBtn(flag)} */}
        </VStack>

        {/* ============ LAST DIV PROFILE ============== */}
        <Divider orientation="vertical" h={"61vh"} />
        <Box className="edit-profile-img">
          <Avatar src={ProfileImg} size={["md", "lg", "xl", "2xl"]} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default EditProfile
