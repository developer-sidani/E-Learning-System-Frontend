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
      ...state.data.filter((cart) => cart._id !== action.payload.data._id),
      {
        ...state.data.find((cart) => cart._id === action.payload.data._id),
        ...action.payload.data,
      },
    ],
    deleteCart: (state, action) => [
      ...state.data.filter((cart) => cart._id !== action.payload.id),
    ],
    deleteAll: (state, action) => {
      state.data = []
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  set, update, addCart, deleteCart, deleteAll,
} = cartsSlice.actions

export default cartsSlice.reducer
