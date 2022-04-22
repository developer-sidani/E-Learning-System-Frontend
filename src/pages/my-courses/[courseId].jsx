import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthGuard, PurchasedCourseGuard } from '../../guards'
import { MainLayout } from '../../layouts'
import { PageHeader, PurchasedCourse, PurchasedCourseNew } from '../../components'
import { getCourseById } from '../../api'

const PurchasedCoursePage = () => {
  const router = useRouter()
  const { courseId } = router.query
  const [course, setCourse] = useState()
  const [loading, setLoading] = useState(true)
  const getCourseCallback = useCallback(async (id) => {
    try {
      const response = await getCourseById(id)
      if (response.status === 200) {
        return response.data
      }
      await router.push('404')
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    if (courseId) {
      getCourseCallback(courseId).then(r => {
        setCourse(r)
      })
    }
  }, [courseId])

  return (
    <>
      <PageHeader title={`${course?.title} | Learn+`} />
      <PurchasedCourseNew course={course} />
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
