import React from 'react'
import { AuthGuard } from '../../guards'
import { MainLayout } from '../../layouts'
import { PageHeader, MyCoursesComponent } from '../../components'

const MyCoursesPage = () => (
  <>

    <PageHeader title="Learn+ | My Courses" />
    <MyCoursesComponent />
  </>
)

MyCoursesPage.getLayout = (page) => (
  <AuthGuard>
    <MainLayout>
      {page}
    </MainLayout>
  </AuthGuard>
)
export default MyCoursesPage
