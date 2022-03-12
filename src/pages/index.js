import React from 'react'
import { useRouter } from 'next/router'
import { PageHeader } from '../components'
import { GuestGuard } from '../guards'
import { MainLayout } from '../layouts'

const Home = () => {
  const router = useRouter()
  return (
    <>
      <PageHeader title="Learn+" />
      <h1>Learn+</h1>
      <button
        type="button"
        onClick={() => {
          router.push('/auth/sign-in')
        }}
      >
        Sign In
      </button>
    </>
  )
}
Home.getLayout = (page) => (
  <MainLayout>
    <GuestGuard>
        {page}
    </GuestGuard>
  </MainLayout>
)
export default Home
