import React from 'react'
import { useRouter } from 'next/router'

const course = {}
const GetCoursePage = () => {
  const router = useRouter()
  const { courseId } = router.query

  course.courseId ??= courseId
  return (
    <p>{course?.courseId}</p>
  )
}

export default GetCoursePage
