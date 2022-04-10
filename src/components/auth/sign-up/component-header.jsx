import React from 'react'
import { styles } from '../tw-styles'

const Logo = 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Flogo%2Flogo-svg.svg?alt=media&token=73ba11c6-d384-4bd6-9738-9d7dbd2a141a'
const signInRoute = '/auth/sign-in'

const ComponentHeader = () => (
  <div className={styles.header}>
    <img
      className={styles.logo}
      src={Logo}
      alt="Learn+"
    />
    <h2 className={styles.title}>Register to start with Learn+</h2>
    <p className="mt-2 text-center text-sm text-gray-600">
      Already have an account?
      {' '}
      <a href={signInRoute} className={styles.link}>
        Login Here
      </a>
    </p>
  </div>
)

export default ComponentHeader
