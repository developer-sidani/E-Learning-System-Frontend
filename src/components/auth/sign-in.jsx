import React, { useState, useCallback } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { login } from '../../api'
import { styles } from './tw-styles'

const Logo = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Required'),
})
const SignInComponent = () => {
  const [loading, setLoading] = useState(false)
  const onLogin = useCallback(
    async (email, password) => {
      try {
        const res = await login({
          email,
          password,
        })
        console.log(res.message)
      } catch (err) {
        console.log({ err })
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  return (
    <div className={styles.root}>
        <div className={styles.header}>
          <img
            className={styles.logo}
            src={Logo}
            alt="Learn+"
          />
          <h2 className={styles.title}>Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
              {' '}
            <a href="#" className={styles.link}>
              Register Here
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              email: '',
              password: '',
              remember: false,
            }}
            validationSchema={SignInSchema}
            onSubmit={({ email, password }) => {
              setLoading(true)
              onLogin(email, password)
            }}
          >
              {({ errors, touched }) => (
                  <Form className="space-y-6">
                    <div>
                      <label htmlFor="email" className={styles.inputLabel}>
                        Email address
                      </label>
                      <div className="mt-1">
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className={styles.inputContainer}
                        />
                        {errors.email && touched.email ? (
                          <div className="mt-2 text-pink-600 text-sm">
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password" className={styles.inputLabel}>
                        Password
                      </label>
                      <div className="mt-1">
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className={styles.inputContainer}
                        />
                        {errors.password && touched.password ? (
                          <div className="mt-2 text-pink-600 text-sm">
                            {errors.password}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Field
                          id="remember"
                          name="remember"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a href="#" className={styles.link}>
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className={loading ? styles.disabledButton : styles.button}
                        disabled={loading}
                      >
                        Sign in
                      </button>
                    </div>
                  </Form>
              )}

          </Formik>
          </div>
        </div>
    </div>
  )
}

export { SignInComponent }
