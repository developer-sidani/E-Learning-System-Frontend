import React, { useCallback, useEffect, useState } from 'react'
import { getCourses } from '../../../api'
import { CoursesContainer } from '../courses'
import { getRecommendedWithToken } from '../../../api/courses/get-course'

const TrendingCourses = ({ token }) => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchTrendingCourses = useCallback(async (tk) => {
    try {
      const response = await getRecommendedWithToken(6, tk)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (token) {
      fetchTrendingCourses(token)
    }
  }, [token])
  return (
    <CoursesContainer
      courses={courses}
      loading={loading}
      title="Popular Right Now / Trending Now"
      description="View the most trending products based on your  purchases and general trend."
    />
  )
}

export default TrendingCourses
