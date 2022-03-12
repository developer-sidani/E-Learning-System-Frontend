import React from 'react'
import { PageHeader, SignInComponent } from '../../components'
import { GuestGuard } from '../../guards'

const SignIn = () => (
    <>
        <PageHeader title="Learn+ | Sign In" />
        <SignInComponent />
    </>
)
SignIn.getLayout = (page) => (
    <GuestGuard>
        {page}
    </GuestGuard>
)

export default SignIn
