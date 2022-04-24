import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../courses'
import { getCourses } from '../../../api'

const PersonalizedSearchCourses = () => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchPersonalizedCourses = useCallback(async () => {
    try {
      const response = await getCourses(2, 10)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPersonalizedCourses()
  }, [])
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
