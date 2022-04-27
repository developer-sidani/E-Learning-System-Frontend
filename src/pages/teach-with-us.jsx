import React from 'react'
import { PageHeader, TeachWithUsComponent } from '../components'
import { MainLayout } from '../layouts'

const TeachWithUs = () => (
	<>
		<PageHeader title="Learn+ | Teach With Learn+" />
		<TeachWithUsComponent />
	</>
)
TeachWithUs.getLayout = (page) => <MainLayout>{page}</MainLayout>
export default TeachWithUs
