import React, { useCallback, useEffect, useState } from 'react'
import { getCourses } from '../../../api'
import { CoursesContainer } from '../courses'

const TrendingCourses = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchTrendingCourses = useCallback(async () => {
    try {
      const response = await getCourses(5, 10)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTrendingCourses()
  }, [])
  return (
    <CoursesContainer
      courses={courses}
      loading={loading}
      title="Popular Right Now / Trending Now"
      description="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. "
    />
  )
}

export default TrendingCourses
