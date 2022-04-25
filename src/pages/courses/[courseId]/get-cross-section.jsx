import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../../../components'
import { getCrossSell } from '../../../api/courses/get-course'

const CrossSection = ({ courseId }) => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchStudentsAreViewing = useCallback(async (id) => {
    try {
      const response = await getCrossSell(id)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (courseId) {
      fetchStudentsAreViewing(courseId)
    }
  }, [courseId])
  return (
  <CoursesContainer courses={courses} loading={loading} />
  )
}

export default CrossSection
