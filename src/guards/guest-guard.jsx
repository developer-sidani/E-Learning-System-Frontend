import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const GuestGuard = ({ children }) => {
  const profile = useSelector(state => state.profile)
  const router = useRouter()
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    console.log({ profile })
    if (!router.isReady) {
      return
    }
    if (profile?.token) {
      router.push('/home')
    } else {
      setChecked(true)
    }
  }, [router.isReady])
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

export default GuestGuard
