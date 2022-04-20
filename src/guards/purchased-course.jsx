import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getCoursesForStudent } from '../api'

const PurchasedCourseGuard = ({ children }) => {
  const profile = useSelector(state => state.profile)
  const userId = profile?.user?.id
  const router = useRouter()
  const { courseId } = router.query
  const [checked, setChecked] = useState(false)

  const getCoursesForStudentCallback = useCallback(async (userId) => {
    try {
      const response = await getCoursesForStudent(userId)
      return response.courses?.map(({ id }) => id)
    } catch (e) {
      console.error(e)
    }
  }, [])
  useEffect(() => {
    if (!router.isReady) {
      return
    }
    if (userId) {
      getCoursesForStudentCallback(userId)
        . then(r => {
          if (r.includes(courseId)) {
            setChecked(true)
          } else {
            router.push('/')
          }
        })
    } else {
      router.push('/')
    }
  }, [router, profile, userId, getCoursesForStudentCallback, courseId])
  if (!checked) {
    return null
  }
  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
   <>
     {children}
   </>
  )
}

export default PurchasedCourseGuard
