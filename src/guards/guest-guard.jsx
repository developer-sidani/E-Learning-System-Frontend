import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const GuestGuard = ({ children }) => {
	const profile = useSelector((state) => state.profile)
	const router = useRouter()
	const [checked, setChecked] = useState(false)
	useEffect(() => {
		if (!router.isReady) {
			return
		}
		if (profile?.token) {
			router.push('/')
		} else {
			setChecked(true)
		}
	}, [router, profile])
	if (!checked) {
		return null
	}

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>{children}</>
	)
}

export default GuestGuard
