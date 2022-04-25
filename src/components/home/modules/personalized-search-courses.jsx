import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../courses'
import { getRecommendedWithToken } from '../../../api/courses/get-course'

const PersonalizedSearchCourses = ({ token }) => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchPersonalizedCourses = useCallback(async (tk) => {
    try {
      const response = await getRecommendedWithToken(4, tk)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (token) {
      fetchPersonalizedCourses(token)
    }
  }, [token])
  return (
    <CoursesContainer
      courses={courses}
      loading={loading}
      title="Personalized Search"
      description="View the most relevant courses to satisfy your specific needs and save time."
    />
  )
}

export default PersonalizedSearchCourses
