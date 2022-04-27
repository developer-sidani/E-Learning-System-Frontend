import React from 'react'
import { PageHeader, CheckoutComponent } from '../components'
import { MainLayout } from '../layouts'
import { AuthGuard } from '../guards'

const Checkout = () => (
	<>
		<PageHeader title="Learn+ | Checkout Page" />
		<CheckoutComponent />
	</>
)
Checkout.getLayout = (page) => (
	<MainLayout>
		<AuthGuard>{page}</AuthGuard>
	</MainLayout>
)
export default Checkout
