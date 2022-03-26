import React from 'react'
import { PageHeader, SignUpComponent } from '../../components'
import { GuestGuard } from '../../guards'

const SignUp = () => (
    <>
      <PageHeader title="Learn+ | Sign Up" />
      <SignUpComponent />
    </>
)
SignUp.getLayout = (page) => (
  <GuestGuard>
    {page}
  </GuestGuard>
)
export default SignUp
