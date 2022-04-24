import { createSlice } from '@reduxjs/toolkit'

export const cartsSlice = createSlice({
  name: 'carts',
  initialState: {
    data: [],
  },
  reducers: {
    set: (state, action) => action.payload,
    addCart: (state, action) => {
      state.data.push(action.payload)
    },
    update: (state, action) => console.log(action.payload.data) || [
      ...state.data.filter((cart) => cart.id !== action.payload.data.id),
      {
        ...state.data.find((cart) => cart.id === action.payload.data.id),
        ...action.payload.data,
      },
    ],
    deleteCart: (state, action) => {
      console.log(action.payload)
      return ({ data: state.data.filter((cart) => cart.id !== action.payload) })
    },
    deleteAll: (state) => {
      state.data = []
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  set, update, addCart, deleteCart, deleteAll,
} = cartsSlice.actions

export default cartsSlice.reducer
