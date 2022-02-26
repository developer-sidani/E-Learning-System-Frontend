import React, { useState, useCallback } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { login } from '../../api'
import { styles } from './tw-styles'
import { isEmail, wait } from '../../utils'

const Logo = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
const SignInSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string()
    .required('Required'),
})
const SignInComponent = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [serverErr, setServerErr] = useState({
    email: '',
    password: '',
  })
  const onLogin = useCallback(
    async (email, username, password) => {
      try {
        const res = await login({
          email,
          username,
          password,
        })
        console.log({ res })
        if (res.status === 403) {
          // not found
          setServerErr(prevState => ({ ...prevState, email: res?.message }))
        } else if (res?.status === 401) {
          // wrong password
          setServerErr(prevState => ({ ...prevState, password: res?.message }))
        } else {
          router.push('/')
        }
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    },
    [router],
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
            onSubmit={async ({ email, password }, { resetForm }) => {
              setServerErr({
                email: '',
                password: '',
              })
              setLoading(true)
              if (isEmail(email)) {
                onLogin(email, null, password)
              } else {
                onLogin(null, email, password)
              }
              await wait(500)
              resetForm()
            }}
          >
              {({ errors, touched }) => (
                  <Form className="space-y-6">
                    <div>
                      <label htmlFor="email" className={styles.inputLabel}>
                        Email or Username
                      </label>
                      <div className="mt-1">
                        <Field
                          id="email"
                          name="email"
                          type="text"
                          autoComplete="email"
                          required
                          className={styles.inputContainer}
                        />
                        {(errors.email || Boolean(serverErr.email)) && touched.email ? (
                          <div className="mt-2 text-pink-600 text-sm">
                            {errors.email || serverErr.email}
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
                        {(errors.password || Boolean(serverErr.password)) && touched.password ? (
                          <div className="mt-2 text-pink-600 text-sm">
                            {errors.password || serverErr.password}
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
