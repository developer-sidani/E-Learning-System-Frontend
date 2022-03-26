import React, { useCallback, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { resetPassword } from '../../../api'
import { wait } from '../../../utils'
import ForgotPasswordSuccessModal from './success-modal'

const ForgotPasswordSchema = Yup.object().shape({
  password: Yup.string().matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
  ).required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
})

const ForgotPasswordComponent = ({ token }) => {
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const onResetPassword = useCallback(
    async (newPassword, callback) => {
      try {
        const res = await resetPassword({
          newPassword,
          resetToken: token,
        })
        if (res?.err) {
          setServerError(res?.err?.message)
        } else if (res?.result) {
          callback()
          setOpen(true)
        }
      } catch (err) {
        console.log({ err })
      } finally {
        setLoading(false)
      }
    },
    [token],
  )
  return (
    <>
      <ForgotPasswordSuccessModal
        open={open}
        handleSubmit={() => router.push('/auth/sign-in')}
      />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Reset Your Password
            </h2>
          </div>
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={({ password: newPassword }, { resetForm }) => {
              setServerError('')
              setLoading(true)
              onResetPassword(newPassword, async () => {
                await wait(750)
                resetForm()
              })
            }}
          >
            {({
              errors,
              handleSubmit,
              touched,
            }) => (
              <Form
                className="mt-8 space-y-6"
                onSubmit={e => {
                  e.preventDefault()
                  handleSubmit()
                }}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                    {errors.password && touched.password ? (
                      <div className="my-2 text-pink-600 text-sm">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                      Confirm Password
                    </label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm Password"
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div className="my-2 text-pink-600 text-sm">
                        {errors.confirmPassword}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <button
                    disabled={loading}
                    type="submit"
                    className={loading ? 'animate-pulse group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400'
                      : 'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
                  >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className={loading ? 'animate-pulse h-5 w-5 text-gray-500' : 'h-5 w-5 text-indigo-500 group-hover:text-indigo-400'} aria-hidden="true" />
                </span>
                    Confirm
                  </button>
                  {serverError ? (
                    <div className="my-2 text-pink-600 text-sm">
                      {serverError}
                    </div>
                  ) : null}
                </div>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </>
  )
}

export default ForgotPasswordComponent
