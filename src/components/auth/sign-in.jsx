import React, { useState, useCallback, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { login } from '../../api'
import { styles } from './tw-styles'
import { isEmail, wait } from '../../utils'
import { Modal } from '.'
import { set } from '../../slices/profile'

const errorStatusFromBackend = {
  password: 401,
  user: 403,
  checkEmail: 400,
}

// TODO get the link
const Logo = 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Flogo%2Flogo-svg.svg?alt=media&token=73ba11c6-d384-4bd6-9738-9d7dbd2a141a'
const SignInSchema = Yup.object().shape({
  user: Yup.string().required('Required'),
  password: Yup.string()
    .required('Required'),
})
const SignInComponent = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [serverErr, setServerErr] = useState({
    user: '',
    password: '',
    verifyEmail: '',
  })
  const onLogin = useCallback(
    async (user, password, rememberMe, callback) => {
      try {
        const res = await login({
          user,
          password,
          rememberMe,
        })
        if (res.status === errorStatusFromBackend.user || res.status === errorStatusFromBackend.checkEmail) {
          setServerErr(prevState => ({ ...prevState, user: res?.message }))
        } else if (res?.status === errorStatusFromBackend.password) {
          // wrong password
          setServerErr(prevState => ({ ...prevState, password: res?.message }))
        } else if (res?.status === 406) {
          // SEND VERIFICATION LINK
          setServerErr(prevState => ({ ...prevState, verifyEmail: 'Verify your email' }))
        } else if (res?.user?.info?.type !== 'Student') {
          setServerErr(prevState => ({ ...prevState, user: 'Wrong Username' }))
        } else {
          dispatch(set({ user: res.user, token: res.token }))
          callback()
        }
      } catch (err) {
        console.log({ err })
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  const router = useRouter()
  useEffect(() => {
    setServerErr({
      user: '',
      password: '',
      verifyEmail: '',
    })
  }, [])
  const [email, setEmail] = useState('')
  return (
    <>
    <Modal open={open} setOpen={setOpen} email={isEmail(email) ? email : ''} />
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
            <a href="/auth/sign-up" className={styles.link}>
              Register Here
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              user: '',
              password: '',
              rememberMe: false,
            }}
            validationSchema={SignInSchema}
            onSubmit={async ({ user, password, rememberMe }, { resetForm }) => {
              setServerErr({
                user: '',
                password: '',
                verifyEmail: '',
              })
              setLoading(true)
              onLogin(user, password, rememberMe, async () => {
                await wait(500)
                resetForm()
                setEmail('')
              })
            }}
          >
              {({
                errors, handleSubmit, touched, handleChange, values,
              }) => (
                  <Form
                    className="space-y-6"
                    onSubmit={e => {
                      e.preventDefault()
                      handleSubmit()
                    }}
                  >
                    <div>
                      <label htmlFor="user" className={styles.inputLabel}>
                        Email or Username
                      </label>
                      <div className="mt-1">
                        <Field
                          value={email}
                          onChange={(e) => {
                            handleChange(e)
                            setEmail(e.target.value)
                          }}
                          id="user"
                          name="user"
                          type="text"
                          autoComplete="user"
                          required
                          className={styles.inputContainer}
                        />
                        {(errors.user || Boolean(serverErr.user)) && touched.user ? (
                          <div className="mt-2 text-pink-600 text-sm">
                            {errors.user || serverErr.user}
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
                          id="rememberMe"
                          name="rememberMe"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <button
                          type="button"
                          className={styles.link}
                          onClick={() => setOpen(true)}
                        >
                          Forgot your password?
                        </button>
                      </div>
                    </div>

                    <div>
                      {serverErr.verifyEmail.length > 0 ? (
                        <button
                          type="button"
                          className={styles.link}
                          onClick={() => router.push(`/auth/request-verification?email=${values.user}`)}
                        >
                          {serverErr.verifyEmail}
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className={loading ? styles.disabledButton : styles.button}
                          disabled={loading}
                        >
                          Sign in
                        </button>
                      )}
                    </div>
                  </Form>
              )}
          </Formik>
          </div>
        </div>
    </div>
    </>
  )
}

export { SignInComponent }
