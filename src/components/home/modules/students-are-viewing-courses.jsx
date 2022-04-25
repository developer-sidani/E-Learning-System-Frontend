import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../courses'
import { getRecommendedWithoutToken } from '../../../api/courses/get-course'

const StudentsAreViewingCourses = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchStudentsAreViewing = useCallback(async () => {
    try {
      const response = await getRecommendedWithoutToken(2)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchStudentsAreViewing()
  }, [])
  return (
    <CoursesContainer
      courses={courses}
      loading={loading}
      title="Students are viewing"
      description="View products mainly based on collaborative filtering and other users behavior."
    />
  )
}

export default StudentsAreViewingCourses
