import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { LockClosedIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { PageHeader } from '../../components'
import { wait } from '../../utils'

const RequestVerificationPage = () => {
  const verificationSchema = Yup.object().shape({
    email: Yup.string().email().required('Required'),
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { email } = router.query
  return (
    <>
      <PageHeader title="Learn+ | Request Verification" />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
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
            onSubmit={(v) => console.log(v)}
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
                    {errors.email && touched.email ? (
                      <div className="my-2 text-pink-600 text-sm">
                        {errors.email}
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
