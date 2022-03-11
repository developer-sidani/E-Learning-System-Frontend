import React from 'react'
import { styles } from '../tw-styles'

const Logo = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
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
