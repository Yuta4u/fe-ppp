import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"

const store = configureStore({
  reducer: {
    api: counterReducer,
  },
})

export default store
