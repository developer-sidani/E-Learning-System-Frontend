import { createSlice } from '@reduxjs/toolkit'

export const cartsSlice = createSlice({
  name: 'carts',
  initialState: [],
  reducers: {
    set: (state, action) => action.payload,
    addCart: (state, action) => {
      state.push(action.payload)
    },
    update: (state, action) => console.log(action.payload.data) || [
      ...state.filter((cart) => cart._id !== action.payload.data._id),
      {
        ...state.find((cart) => cart._id === action.payload.data._id),
        ...action.payload.data,
      },
    ],
    deleteCart: (state, action) => [
      ...state.filter((cart) => cart._id !== action.payload.id),
    ],
  },
})

// Action creators are generated for each case reducer function
export const {
  set, update, addCart, deleteCart,
} = cartsSlice.actions

export default cartsSlice.reducer
