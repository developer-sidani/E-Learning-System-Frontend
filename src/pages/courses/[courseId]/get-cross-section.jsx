import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../../../components'
import { getRecommendedWithToken } from '../../../api/courses/get-course'

const CrossSection = ({ token }) => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchStudentsAreViewing = useCallback(async (tk) => {
    try {
      const page = Math.floor(Math.random() * 10) + 1
      const response = await getRecommendedWithToken(page, tk)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (token) {
      fetchStudentsAreViewing(token)
    }
  }, [token])
  return (
  <CoursesContainer courses={courses} loading={loading} />
  )
}

export default CrossSection
