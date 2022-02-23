import React, { useCallback, useEffect } from 'react'
import Head from 'next/head'
import { login } from '../api'

const Home = () => {
  const onLogin = useCallback(
    async () => {
      try {
        const res = await login({
          email: 'asidani88@gmail.com',
          password: 'sidani2001',
        })
        console.log(res)
      } catch (err) {
        console.log(err)
      } finally {
        console.log('finally')
      }
    },
    [],
  )
  useEffect(() => {
    onLogin()
  }, [onLogin])
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
