// STYLING
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react"
import { Report, Loading } from "notiflix"
// OTHER
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import FormData from "form-data"
// import { setProduct } from "../../redux/counterSlice"
import { setProduct } from "../../../../Redux/counterSlice"

// EXECUTION
const PostForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()

  // VARIABLE POST =====
  const nama = useSelector((state) => state.api.user.nama)
  const user_id = useSelector((state) => state.api.user.id)
  const [product_name, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [stock, setStock] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const data = { image, product_name, stock, price, description, user_id }

  // console.log(data)
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  // API
  async function postJual() {
    let form = new FormData()
    form.append("image", image)
    form.append("product_name", product_name)
    form.append("stock", stock)
    form.append("price", price)
    form.append("description", description)
    form.append("user_id", user_id)
    if (!image || !product_name || !stock || !price || !description) {
      invalidInput()
    } else {
      const response = await axios.post("http://localhost:5000/product", form)
      if (response) {
        dispatch(setProduct(data))
      }
    }
  }

  // FUNCTION
  function invalidInput() {
    return setTimeout(
      () =>
        Report.failure(
          `GAGAL`,
          `Inputan tidak valid(tidak boleh ada yang kosong!) `,
          "OKAY",
          Loading.remove(),
          {
            failure: {
              backOverlayColor: "rgba(0,0,0,0.5)",
            },
          }
        ),
      300
    )
  }

  function postSuccess() {
    return setTimeout(
      () =>
        Report.success(`BERHASIL`, `berhasil posting tanaman:)`, "OK", "", {
          success: {
            backOverlayColor: "rgba(0,0,0,0.5)",
          },
        }),
      300
    )
  }

  // function getUrlImage(e) {
  //   let str = e
  //   return str.substring(12, str.length)
  // }

  return (
    <>
      <Button
        h="30px"
        onClick={onOpen}
        className="btnopen"
        bgColor="gray.800"
        color="#F7FAFC"
        fontSize="2vh"
        mt="-10px"
        borderRadius="none"
      >
        Jual Product
      </Button>
      <Modal
        closeOnOverlayClick={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent backgroundColor="facebook.50">
          <ModalHeader>Post Jual</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <form onSubmit={(e) => console.log(e)}>
              <FormControl mt={4}>
                <input
                  type={"file"}
                  onChange={(e) => setImage(e.target.files[0])}
                ></input>
              </FormControl>
              <FormControl mt={4}>
                <Input
                  ref={initialRef}
                  placeholder="nama tanaman..."
                  onChange={(e) => setProductName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <Textarea
                  placeholder="Description..."
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <Input
                  placeholder="quantity..."
                  onChange={(e) => setStock(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <Input
                  placeholder="Price jual/pcs"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
            </form>
          </ModalBody>

          {/* =============== BUTTON NAV =============== */}
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => (postJual(), postSuccess(), onClose())}
            >
              Post
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default PostForm
