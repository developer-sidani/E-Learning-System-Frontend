import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { PageHeader, GetCourseComponent } from '../../../components'
import { MainLayout } from '../../../layouts'
import { getCourse } from '../../../api'

const GetCoursePage = () => {
  const router = useRouter()
  const { courseId } = router.query
  const myData = useSelector(({ cart }) => cart)
  const cart = myData?.data || []
  const [courseBelongsToCart, setCourseBelongsToCart] = useState(false)

  // ******************************
  const [course, setCourse] = useState([])
  const [loading, setLoading] = useState(false)
  const getCourseCallback = useCallback(
    async (id) => {
      setLoading(true)
      try {
        const res = await getCourse(id)
        if (res?.status !== 200) {
          await router.push('/404')
        }
        setCourse(res?.res?.data)
        console.log(res)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  useEffect(() => {
    if (courseId) {
      getCourseCallback(courseId)
    }
    return () => {
      setCourse([])
    }
  }, [courseId])

  // ***********************************
  useEffect(() => {
    if (courseId) {
      setCourseBelongsToCart(cart.filter(({ id }) => id === courseId).length > 0)
    }
  }, [cart, courseId])
  return (
    <>
      <PageHeader title="Learn+ | Get Course" />
      <GetCourseComponent
        data={course}
        courseBelongsToCart={courseBelongsToCart}
        courseId={courseId}
      />
    </>

  )
}

GetCoursePage.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default GetCoursePage
