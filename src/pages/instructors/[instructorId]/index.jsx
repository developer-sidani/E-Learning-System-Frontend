import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PageHeader, InstructorComponent } from '../../../components'
import { MainLayout } from '../../../layouts'
import { getUser } from '../../../api'

const instructor = {}
const GetInstructorPage = () => {
  const router = useRouter()
  const { instructorId } = router.query

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const getUserCallback = useCallback(
    async (id) => {
      setLoading(true)
      try {
        const res = await getUser(id)
        setUser(res?.res?.data)
        if (res?.res?.statusCode !== 200) {
          await router.push('/404')
        }
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  useEffect(() => {
    getUserCallback(instructorId)
    return () => {
      setUser([])
    }
  }, [])
  instructor.instructorId ??= instructorId
  return (

    <div>
      <PageHeader title="Learn+ | Instructor" />
      <InstructorComponent instructor={user} />

    </div>

  )
}

GetInstructorPage.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default GetInstructorPage
