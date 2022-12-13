import { Box, Image, Stack, Text, Divider } from "@chakra-ui/react"
import Tanaman1 from "../../img/tanaman1.jpg"

const CardBeli = ({ props }) => {
  return (
    <Box className="product">
      <Box className="img">
        <Image
          src={Tanaman1}
          w="15vw"
          m="auto"
          h="16vh"
          // borderRadius="20px"
        />
      </Box>
      <Stack
        direction="column"
        m="2"
        fontSize="2vh"
        className="content"
        color="whiteAlpha.600"
      >
        <Text as="ins"></Text>
        <Text as="samp">nama tanaman: {props.nm_product} </Text>
        <Text as="samp">deskrpsi: {props.deskripsi} </Text>
        <Text as="samp">quantity: {props.quantity}</Text>
      </Stack>
      <Divider orientation="vertical" h={"13vh"} m={"auto"} />
      <Box className="total-harga" color="whiteAlpha.600" fontSize={"3vh"}>
        {props.harga_product}
      </Box>
    </Box>
  )
}

export default CardBeli
