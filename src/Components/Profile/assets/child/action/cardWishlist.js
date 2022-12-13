import React from "react"
import { Box, GridItem, Image, Text, Icon } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import Tanaman1 from "../../img/tanaman1.jpg"
import "../../css/wishlist.css"

const CardWishlist = ({ props }) => {
  return (
    <Box w="17vw" h="300px" p="10px" textAlign="center" className="card">
      <Image src={pict} h="50%" w="100%" />
      <Text as="ins" fontSize="1rem">
        {props.nm_product}
      </Text>
      <Box>
        <Text>Sisa : {props.quantity}</Text>
        <Text>Harga : {props.harga_product}</Text>
      </Box>
      <Box className="star">
        <Text>{props.nm_toko}</Text>
        <Icon
          as={StarIcon}
          mt="4px"
          className="star-icon"
          color="yellow.200"
        ></Icon>
      </Box>
    </Box>
  )
}

export default CardWishlist
