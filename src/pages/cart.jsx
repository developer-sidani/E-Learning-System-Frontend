import React from 'react'
import { PageHeader, CartComponent } from '../components'
import { MainLayout } from '../layouts'

const Cart = () => (
    <>
        <PageHeader title="Learn+ | Teach With Learn+" />
        <CartComponent />
    </>
)
Cart.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)
export default Cart