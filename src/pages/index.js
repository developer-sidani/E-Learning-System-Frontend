import React from 'react'
import { useRouter } from 'next/router'
import { PageHeader } from '../components'
import { GuestGuard } from '../guards'

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
    <GuestGuard>
        {page}
    </GuestGuard>
)
export default Home
