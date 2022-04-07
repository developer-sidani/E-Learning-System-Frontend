import React from 'react'
import { useRouter } from 'next/router'
import { PageHeader, Component1 } from '../../../components'
import { GuestGuard } from '../../../guards'
import { MainLayout } from '../../../layouts'

const course = {}
const GetCoursePage = () => {
  const router = useRouter()
  const { courseId } = router.query

  course.courseId ??= courseId
  return (
    <>
      <PageHeader title="Learn+ | Get Course" />
      <Component1 />
    </>

  )
}

GetCoursePage.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default GetCoursePage
