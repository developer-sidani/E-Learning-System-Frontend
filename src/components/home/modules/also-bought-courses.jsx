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
      description="View products mainly based on collaborative filtering and other users behavior."
    />
  )
}

export default AlsoBoughtCourses
