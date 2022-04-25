import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../courses'
import { getRecommendedWithToken } from '../../../api/courses/get-course'

const AlsoBoughtCourses = ({ token }) => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchAlsoBoughtCourses = useCallback(async (tk) => {
    try {
      const response = await getRecommendedWithToken(7, tk)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (token) {
      fetchAlsoBoughtCourses(token)
    }
  }, [token])
  return (
    <CoursesContainer
      courses={courses}
      loading={loading}
      title="You May Also Like / Others Also Bought"
      description="View products mainly based on collaborative filtering and other users behavior."
    />
  )
}

export default AlsoBoughtCourses
