import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { PageHeader } from '../../components'
import { AuthGuard } from '../../guards'
import { MainLayout } from '../../layouts'

const Home = () => {
  const profile = useSelector(state => state.profile)
  const router = useRouter()
  console.log({ profile })
  const { info } = profile.user || { info: null }
  return (
    <>
      <PageHeader title="Learn+" />
      <h1 className="text-4xl">Learn+</h1>
      <h2 className="text-2xl">
        {`Logged in as ${info?.username}`}
      </h2>
      <button
        type="button"
        onClick={() => {
          localStorage.clear()
          router.reload()
        }}
      >
        Logout
      </button>
    </>
  )
}
Home.getLayout = (page) => (
  <MainLayout>
    {/* <AuthGuard> */}
      {page}
    {/* </AuthGuard> */}
  </MainLayout>
)
export default Home
