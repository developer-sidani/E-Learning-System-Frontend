import React from 'react'
import { PageHeader, AboutUsComponent } from '../../components'
import { MainLayout } from '../../layouts'

const AboutUs = () => (
  <>
      <PageHeader title="Learn+ | About Us" />
      <AboutUsComponent />
  </>
)
AboutUs.getLayout = (page) => (
<MainLayout>
  {page}
</MainLayout>
)

export default AboutUs
