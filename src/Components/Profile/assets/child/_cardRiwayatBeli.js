import { Box, Button, Center, Text } from "@chakra-ui/react"
import "../css/riwayat_beli.css"
import React, { useEffect, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

//
import { useDispatch, useSelector } from "react-redux"
import {
  setRiwayatBeli,
  increment,
  decrement,
} from "../../../Redux/counterSlice"
import CardBeli from "./action/cardBeli"
import axios from "axios"

const CardRiwayatBeli = () => {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.api.page)
  const data = useSelector((state) => state.api.riwayatBeli)

  const [startPage, setStartPage] = useState(0)
  const [endPage, setEndPage] = useState(4)

  // PAGE
  async function getBeli() {
    try {
      const { data } = await axios.get("http://localhost:4321/beli")
      dispatch(setRiwayatBeli(data))
    } catch (error) {
      console.error(error)
    }
  }

  const incrementPage = () => {
    return (
      dispatch(increment()),
      setStartPage(startPage + 4),
      setEndPage(endPage + 4)
    )
  }

  const decrementPage = () => {
    return (
      dispatch(decrement()),
      setStartPage(startPage - 4),
      setEndPage(endPage - 4)
    )
  }
  // useEffect(() => {
  //   getBeli()
  // }, [startPage, endPage])

  //============ RETURN RIWAYAT BELI ==============
  return (
    <Box className="riwayat-beli">
      <Box className="pagenation">
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
          onClick={() =>
            data.length > 4
              ? data.length % 4 === 0
                ? page < Math.ceil(data.length / 4)
                  ? incrementPage()
                  : false
                : page < Math.ceil(data.length / 4)
                ? incrementPage()
                : false
              : false
          } // GOKIL
        >
          <ChevronRightIcon />
        </Button>
      </Box>
      <Box className="profile-product" color="whiteAlpha.600">
        {data.map((e, i) =>
          i >= startPage && i < endPage ? <CardBeli key={i} props={e} /> : false
        )}
      </Box>
    </Box>
  )
}

export default CardRiwayatBeli
