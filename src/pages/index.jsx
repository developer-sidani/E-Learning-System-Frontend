import React from 'react'
import { MainCourseComponent, PageHeader } from '../components'
import { MainLayout } from '../layouts'

const Home = () => (
    <>
      <PageHeader title="Learn+" />
      <h1>Courses:</h1>
      <MainCourseComponent />
    </>
)
Home.getLayout = (page) => (
  <MainLayout>
        {page}
  </MainLayout>
)
export default Home
