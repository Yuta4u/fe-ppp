import { Box } from "@chakra-ui/react"
import "../css/jual.css"

import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"

import PostForm from "./action/postForm"
import CardJual from "./action/cardJual"

const Jual = () => {
  const [datas, setDatas] = useState([])
  const user = useSelector((state) => state.api.user)
  const product = useSelector((state) => state.api.product)

  // async function getProduct() {
  //   try {
  //     const { data } = await axios.get("http://localhost:5000/product")
  //     console.log(data, "ini jual")
  //     setDatas(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   getProduct()
  //   console.log(product)
  // }, [])

  // const getProduct = async () => {
  //   const { data } = await axios.get("http://localhost:5000/product")
  //   console.log(data, "ini jual")
  // }

  return (
    <>
      <PostForm /> {/* ========== POST FORM JUAL ========== */}
      <Box className="jual-div">
        {datas.map((e, key) => (
          <CardJual props={e} key={key} />
        ))}
      </Box>
    </>
  )
}

export default Jual
