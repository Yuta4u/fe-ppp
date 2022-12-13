import "../assets/css/wishlist.css"
import { Box, Button, Text, Center, SimpleGrid } from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

import CardWishlist from "./action/cardWishlist"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import {
  setWishlist,
  increment,
  decrement,
  setReset,
} from "../../../Redux/counterSlice"

function Wishlist() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.api.page)
  const data = useSelector((state) => state.api.wishlist)

  const [startPage, setStartPage] = useState(0)
  const [endPage, setEndPage] = useState(8)

  // PAGE

  // console.log(`start:${startPage}, end page:${endPage}, redux:${page}`)
  async function getWishlist() {
    try {
      const { data } = await axios.get("http://localhost:4321/wishlist")
      //   dispatch(setReset())
      dispatch(setWishlist(data))
    } catch (error) {
      console.error(error)
    }
  }

  const incrementPage = () => {
    return (
      dispatch(increment()),
      (setStartPage(startPage + 8), setEndPage(endPage + 8))
    )
  }

  const decrementPage = () => {
    return (
      dispatch(decrement()),
      setStartPage(startPage - 8),
      setEndPage(endPage - 8)
    )
  }
  useEffect(() => {
    getWishlist()
  }, [startPage, endPage])

  return (
    <Box className="wishlist-div">
      <Box className="pagenation">
        {" "}
        <Button
          w="10px"
          background="none"
          // _hover="background:none"
          onClick={() => (page !== 1 ? decrementPage() : false)}
        >
          <ChevronLeftIcon />
        </Button>
        <Text w="20px" m="auto">
          <Center>{page}</Center>
        </Text>
        <Button
          w="10px"
          background="none"
          _hover="background:none"
          onClick={() => incrementPage()}
        >
          <ChevronRightIcon />
        </Button>
      </Box>
      <SimpleGrid columns={[2, null, 4]} spacing="40px">
        {data.map((e, i) =>
          i >= startPage && i < endPage ? (
            <CardWishlist key={i} props={e} />
          ) : (
            false
          )
        )}
      </SimpleGrid>
    </Box>
  )
}

export default Wishlist
