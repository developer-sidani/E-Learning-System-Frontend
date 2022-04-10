import { createSlice } from '@reduxjs/toolkit'

export const cartsSlice = createSlice({
  name: 'carts',
  initialState: [
    {
      id: '123',
      name: 'Help Center',
      price: 50,
      image: 'https://img-c.udemycdn.com/course/125_H/473160_d929_3.jpg',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    {
      id: '456',
      name: 'Help Center2',
      price: 50,
      image: 'https://img-c.udemycdn.com/course/125_H/473160_d929_3.jpg',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    {
      id: '789',
      name: 'Help Center3',
      price: 50,
      image: 'https://img-c.udemycdn.com/course/125_H/473160_d929_3.jpg',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
    {
      id: '789',
      name: 'Help Center3',
      price: 50,
      image: 'https://img-c.udemycdn.com/course/125_H/473160_d929_3.jpg',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
    },
  ],
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
