import React, { useCallback, useEffect, useState } from 'react'
import { getCourses } from '../../../api'
import { CoursesContainer } from '../courses'

const StudentsAreViewingCourses = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchStudentsAreViewing = useCallback(async () => {
    try {
      const response = await getCourses(10, 10)
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
      description="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. "
    />
  )
}

export default StudentsAreViewingCourses
