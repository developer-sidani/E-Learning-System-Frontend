import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const AuthGuard = ({ children }) => {
	const profile = useSelector(({ profile }) => profile)
	const router = useRouter()
	const [checked, setChecked] = useState(false)
	useEffect(() => {
		if (!router.isReady) {
			return
		}
		if (!profile?.token) {
			router.push('/auth/sign-in')
		} else {
			setChecked(true)
		}
	}, [router.isReady, profile])
	if (!checked) {
		return null
	}

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>{children}</>
	)
}

export default AuthGuard
