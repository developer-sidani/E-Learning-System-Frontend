import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set as setCart } from '../slices/cart'

const CartProvider = ({ children }) => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!cart || !Array.isArray(cart.data)) {
      dispatch(setCart({
        data: [],
      }))
    }
  }, [dispatch])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { children }
    </>
  )
}

export default CartProvider
