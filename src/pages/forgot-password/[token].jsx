import React from 'react'
import { useRouter } from 'next/router'
import { PageHeader, ForgotPasswordComponent } from '../../components'

const ForgotPassword = () => {
  const router = useRouter()
  const { token } = router.query
  return (
    <>
      <PageHeader title="Learn+ | Reset Password" />
      <ForgotPasswordComponent token={token} />
    </>
  )
}

export default ForgotPassword
