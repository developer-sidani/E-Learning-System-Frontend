import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthGuard, PurchasedCourseGuard } from '../../guards'
import { MainLayout } from '../../layouts'
import { PageHeader, PurchasedCourse } from '../../components'
import { getCourseById } from '../../api'

const PurchasedCoursePage = () => {
  const router = useRouter()
  const { courseId } = router.query
  const [loading, setLoading] = useState(true)
  const getCourseCallback = useCallback(async (id) => {
    try {
      const response = await getCourseById(id)
      console.log(response)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (courseId) {
      getCourseCallback(courseId)
    }
  }, [courseId])

  return (
    <>
      <PageHeader title="Learn+" />
      <PurchasedCourse />
    </>
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
