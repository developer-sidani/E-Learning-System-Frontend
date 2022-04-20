import React from 'react'
import { useRouter } from 'next/router'
import { AuthGuard } from '../../guards'
import { MainLayout } from '../../layouts'
import { PurchasedCourse } from '../../components'
// import MyCoursesPage from './index'

const PurchasedCoursePage = () => {
  const router = useRouter()
  const { courseId } = router.query

  return (
    <div>
      <PurchasedCourse />
      {courseId}
    </div>
  )
}
PurchasedCoursePage.getLayout = (page) => (
    <AuthGuard>
      <MainLayout>
        {page}
      </MainLayout>
    </AuthGuard>
)

export default PurchasedCoursePage
