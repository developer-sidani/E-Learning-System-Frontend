import React from 'react'
import { PageHeader } from '../components'
import { AuthGuard } from '../guards'

const Home = () => (
    <>
        <PageHeader title="Learn+" />
        <h1>Learn+</h1>
        <button
          type="button"
          onClick={() => {
            localStorage.clear()
          }}
        >
            Logout
        </button>
    </>
)
Home.getLayout = (page) => (
    <AuthGuard>
        {page}
    </AuthGuard>
)
export default Home
