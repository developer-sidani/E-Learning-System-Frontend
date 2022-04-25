import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../courses'
import {
  getRecommendedWithToken,
} from '../../../api/courses/get-course'

const RecommendedCourses = ({ token }) => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchRecommendedCourses = useCallback(async (tk) => {
    try {
      const response = await getRecommendedWithToken(2, tk)
      console.log({ response })
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (token) {
      fetchRecommendedCourses(token)
    }
  }, [token])
  return (
    <CoursesContainer
      courses={courses}
      loading={loading}
      title="Recommended for You"
      description="View courses based on your preferences and product similarities."
    />
  )
}

export default RecommendedCourses
