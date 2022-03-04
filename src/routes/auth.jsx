import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set as setProfile } from '../slices/profile'

const AuthRouter = ({ children }) => {
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    if (profile.token && !profile.doneNeededRefresh) {
      dispatch(setProfile({ token: null, doneNeededRefresh: true }))
    }

    if (!profile.doneNeededRefresh) {
      dispatch(setProfile({ doneNeededRefresh: true }))
    }
  }, [profile, dispatch])

  return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        { children }
      </>
  )
}

export default AuthRouter
