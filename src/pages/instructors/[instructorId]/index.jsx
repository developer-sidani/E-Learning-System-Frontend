import React from 'react'
import { useRouter } from 'next/router'
import { PageHeader, InstructorComponent } from '../../../components'
import { MainLayout } from '../../../layouts'

const instructor = {}
const GetInstructorPage = () => {
  const router = useRouter()
  const { instructorId } = router.query

  instructor.instructorId ??= instructorId
  return (

    <div>
      <PageHeader title="Learn+ | Instructor" />
      <InstructorComponent />

    </div>

  )
}

GetInstructorPage.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default GetInstructorPage
