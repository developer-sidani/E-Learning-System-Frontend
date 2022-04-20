import React from 'react'
import { useRouter } from 'next/router'
import { AuthGuard, PurchasedCourseGuard } from '../../guards'
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
      <PurchasedCourseGuard>
        <MainLayout>
          {page}
        </MainLayout>
      </PurchasedCourseGuard>
    </AuthGuard>
)

export default PurchasedCoursePage
