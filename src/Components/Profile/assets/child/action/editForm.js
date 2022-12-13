// STYLING
import {
  RadioGroup,
  Stack,
  Radio,
  Textarea,
  Input,
  Box,
  Button,
} from "@chakra-ui/react"
import { Report, Loading } from "notiflix"
import { useState } from "react"
import axios from "axios"
import { setUser } from "../../../../Redux/counterSlice"
import { useDispatch, useSelector } from "react-redux"

const EditForm = () => {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [no_telepon, setNoTelp] = useState("")
  const [jenis_kelamin, setKelamin] = useState("")
  const [tanggal_lahir, setDate] = useState("")
  const [alamat, setAlamat] = useState("")
  // const id = useSelector((state) => state.api.user.id)

  const data = {
    nama,
    email,
    no_telepon,
    jenis_kelamin,
    tanggal_lahir,
    alamat,
  }
  const dispatch = useDispatch()

  async function editProfile() {
    if (
      !nama ||
      !email ||
      !no_telepon ||
      !jenis_kelamin ||
      !tanggal_lahir ||
      !alamat
    ) {
      invalidInput()
    } else {
      const response = await axios
        .put(`http://localhost:4321/users/${id}`, data)
        .catch((err) => {
          console.error(err)
        })
      if (response) {
        dispatch(setUser(data))
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

  function updateSuccess() {
    return setTimeout(
      () =>
        Report.success(`BERHASIL`, `berhasil update PROFILE:)`, "OK", "", {
          success: {
            backOverlayColor: "rgba(0,0,0,0.5)",
          },
        }),
      300
    )
  }

  return (
    <>
      <Input
        placeholder="nama..."
        size="sm"
        bgColor="whiteAlpha.400"
        _placeholder={{ color: "whiteAlpha.400" }}
        width={"25vw"}
        onChange={(e) => setNama(e.target.value)}
      />
      <Input
        placeholder="email.."
        size="sm"
        bgColor="whiteAlpha.400"
        _placeholder={{ color: "whiteAlpha.400" }}
        width={"25vw"}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="nomor telepon.."
        size="sm"
        bgColor="whiteAlpha.400"
        _placeholder={{ color: "whiteAlpha.400" }}
        width={"25vw"}
        onChange={(e) => setNoTelp(e.target.value)}
      />
      <Box>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio
              colorScheme="blue"
              value="Laki-laki"
              onChange={(e) => setKelamin(e.target.value)}
            >
              Laki-laki
            </Radio>
            <Radio
              colorScheme="pink"
              value="Perempuan"
              onChange={(e) => setKelamin(e.target.value)}
            >
              Perempuan
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Input
        placeholder="Select Date and Time"
        size="ms"
        w={"25vw"}
        type="datetime-local"
        onChange={(e) => setDate(e.target.value)}
      />
      <Textarea
        placeholder="Alamat anda.."
        w={"25vw"}
        bgColor="whiteAlpha.400"
        _placeholder={{ color: "whiteAlpha.400" }}
        onChange={(e) => setAlamat(e.target.value)}
      />
      <Button
        bgColor="gray.800"
        color="#F7FAFC"
        h=""
        w="50%"
        onClick={() => updateSuccess()}
      >
        Simpan
      </Button>
    </>
  )
}

export default EditForm
