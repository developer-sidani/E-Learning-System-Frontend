import React, { useEffect } from 'react'
import Head from 'next/head'
import { login } from '../api'

const Home = () => {
  useEffect(() => {
    login({ email: 'asidani88@gmail.com', password: 'sidani2001' }).then(r => {
      console.log(r)
    })
  }, [])
  return (
    <>
        <Head>
            <title>Learn+</title>
        </Head>
        <h1 className="text-blue-400 text-4xl font-bold">Hello</h1>
    </>
  )
}

export default Home
