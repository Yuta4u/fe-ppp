import { createSlice } from "@reduxjs/toolkit"
// import { useEffect } from "react"

const initialState = {
  user: [],
  product: [],
  riwayatBeli: [],
  riwayatJual: [],
  wishlist: [],
  page: 1,
}

export const counterSlice = createSlice({
  name: "x",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload, "ini dispatch")
      state.user = action.payload
    },
    setRiwayatBeli: (state, action) => {
      state.riwayatBeli = action.payload
    },
    setSaldo: (state, action) => {
      state.saldo = action.payload
    },
    setWishlist: (state, action) => {
      state.wishlist = action.payload
    },
    setProduct: (state, action) => {
      state.product = action.payload
    },
    increment: (state, action) => {
      state.page += 1
    },
    decrement: (state, action) => {
      state.page -= 1
    },
    reset: (state, action) => {
      state.page = 1
    },
  },
})

export const {
  setUser,
  setRiwayatBeli,
  setSaldo,
  setProduct,
  increment,
  decrement,
  setWishlist,
  setReset,
} = counterSlice.actions

export default counterSlice.reducer
