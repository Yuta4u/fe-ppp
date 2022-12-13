import { Box } from "@chakra-ui/react"

const ProfileEdit = ({ props }) => {
  return (
    <>
      <Box>{props.nama}</Box>
      <Box>{props.email}</Box>
      <Box>{props.no_telepon}</Box>
      <Box>{props.jenis_kelamin}</Box>
      <Box>{props.tanggal_lahir}</Box>
      <Box>{props.alamat}</Box>
    </>
  )
}

export default ProfileEdit
