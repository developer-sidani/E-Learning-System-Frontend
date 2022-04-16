import React, { useCallback, useState, Fragment } from 'react'
import { Field, Form, Formik } from 'formik'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { PageHeader } from '../../components'
import { wait } from '../../utils'
import { sendVerifyEmail } from '../../api'

const RequestVerificationPage = () => {
  const verificationSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [serverError, setServerError] = useState('')
  const { email } = router.query
  const [open, setOpen] = useState(false)
  const requestVerification = useCallback(
    async (email, callback) => {
      setLoading(true)
      setServerError('')
      try {
        const res = await sendVerifyEmail({
          email,
        })
        if (res?.response?.statusCode === 200) {
          callback()
        } else if (res?.status === 400) {
          setServerError('User already verified. You can login!')
        } else if (res?.status === 404) {
          setServerError('User Doesn\'t exist')
        }
      } catch (err) {
        console.log({ err })
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  return (
    <>
      <PageHeader title="Learn+ | Request Verification" />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => {}}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div>
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Email Sent Successfully
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please Check your email to verify your account
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => {
                      router.push('/auth/sign-in')
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Flogo%2Flogo-svg.svg?alt=media&token=73ba11c6-d384-4bd6-9738-9d7dbd2a141a"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Send Verification
            </h2>
          </div>
          <Formik
            validationSchema={verificationSchema}
            enableReinitialize
            initialValues={{
              email: email || '',
            }}
            onSubmit={({ email }, { resetForm }) => requestVerification(email, async () => {
              console.log('here!')
              await wait(500)
              resetForm()
              setOpen(true)
            })}
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
                    <label htmlFor="email" className="sr-only">
                      Password
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                    />
                    {(errors.email || serverError) && touched.email ? (
                      <div className="my-2 text-pink-600 text-sm">
                        {errors.email || serverError}
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
                    Send
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default RequestVerificationPage
