import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { PageHeader, Component1 } from '../../../components'
import { MainLayout } from '../../../layouts'

const GetCoursePage = () => {
  const router = useRouter()
  const { courseId } = router.query
  const myData = useSelector(({ cart }) => cart)
  const cart = myData?.data || []
  const [courseBelongsToCart, setCourseBelongsToCart] = useState(false)
  useEffect(() => {
    if (courseId) {
      setCourseBelongsToCart(cart.filter(({ id }) => id === courseId).length > 0)
    }
  }, [cart, courseId])
  return (
    <>
      <PageHeader title="Learn+ | Get Course" />
      <Component1
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
