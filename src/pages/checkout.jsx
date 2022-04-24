import React from 'react'
import { PageHeader, CheckoutComponent } from '../components'
import { MainLayout } from '../layouts'

const Checkout = () => (
    <>
      <PageHeader title="Learn+ | Checkout Page" />
      <CheckoutComponent />
    </>
)
Checkout.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)
export default Checkout
