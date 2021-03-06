import React, { useState } from 'react'
import { AuthGuard } from '../guards'
import { MainLayout } from '../layouts'
import { PageHeader, MyAccountComponent } from '../components'

const MyAccountPage = () => (
	<>
		<PageHeader title="Learn+ | My Account" />
		<MyAccountComponent />
	</>
)

MyAccountPage.getLayout = (page) => (
	<MainLayout>
		<AuthGuard>{page}</AuthGuard>
	</MainLayout>
)
export default MyAccountPage
