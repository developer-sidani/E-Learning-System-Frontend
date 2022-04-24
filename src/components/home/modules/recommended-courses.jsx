import React, { useCallback, useEffect, useState } from 'react'
import { getCourses } from '../../../api'
import { CoursesContainer } from '../courses'

const RecommendedCourses = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchRecommendedCourses = useCallback(async () => {
    try {
      const response = await getCourses(9, 10)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRecommendedCourses()
  }, [])
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
