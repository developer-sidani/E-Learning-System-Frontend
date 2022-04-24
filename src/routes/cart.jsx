import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set as setCart } from '../slices/cart'
import { getCart, updateCart } from '../api'

const CartProvider = ({ children }) => {
  const cart = useSelector(state => state.cart)
  const profile = useSelector((x) => x?.profile)
  const getCartCallback = useCallback(async (token) => {
    try {
      const response = await getCart(token)
      return response?.data
    } catch (e) {
      console.error(e)
    }
  }, [])
  const updateCartCallback = useCallback(async (coursesIds) => {
    console.log('ok')
    try {
      const response = await updateCart(coursesIds, profile?.token || '')
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }, [])
  const dispatch = useDispatch()
  useEffect(() => {
    if (profile?.token) {
      getCartCallback(profile?.token).then(r => {
        if (r?.length > 0) {
          dispatch(setCart({
            data: [...r],
          }))
        }
      })
    }
    if (!cart || !Array.isArray(cart.data)) {
      dispatch(setCart({
        data: [],
      }))
    }
  }, [dispatch, profile?.token])
  useEffect(() => {
    updateCartCallback(cart.data?.map(({ id }) => id))
  }, [cart])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { children }
    </>
  )
}

export default CartProvider
