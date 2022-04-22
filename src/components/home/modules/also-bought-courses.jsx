import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../courses'
import { getCourses } from '../../../api'

const AlsoBoughtCourses = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchAlsoBoughtCourses = useCallback(async () => {
    try {
      const response = await getCourses(11, 10)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAlsoBoughtCourses()
  }, [])
  return (
    <CoursesContainer
      courses={courses}
      loading={loading}
      title="You May Also Like / Others Also Bought"
      description="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. "
    />
  )
}

export default AlsoBoughtCourses
