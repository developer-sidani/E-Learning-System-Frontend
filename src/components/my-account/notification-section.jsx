import React, { useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import { useSelector } from 'react-redux'
// import moment from 'moment'
// import {
//   ErrorAlert, SuccessModal,
// } from '../auth/sign-up'

// import { wait } from '../../utils'

const submitValues = (callback, handler) => (values, { resetForm }) => {
  console.log(values)
  // callback(resetForm)

  // callback(values, resetForm, handler)
}

const NotificationSection = () => {
  const profile = useSelector(({ profile }) => profile)

  const ref = useRef(null)
  const initialValues = {
    isNotified: profile?.user?.info?.isNotified || true,
    keepMeUpdated: profile?.user?.info?.keepMeUpdated || true,

  }
  const scrollToError = () => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      })
    }
  }
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  return (

  //   <SuccessModal setOpen={setOpen} open={open} />
  // {serverError && <ErrorAlert message={serverError} ref={ref} />}
  <Formik
    initialValues={initialValues}
    onSubmit={submitValues()}
    enableReinitialize
    // onSubmit={submitValues({
    //   init() {
    //     setServerError('')
    //     setLoading(true)
    //   },
    //   error(message) {
    //     setServerError(message)
    //     scrollToError()
    //   },
    //   stopLoading() {
    //     setLoading(false)
    //   },
    //   success: async (callback) => {
    //     setServerError('')
    //    setLoading(false) */
    //    setOpen(true) */
    //     await wait(500)
    //     callback()
    //   },
    // })}

  >
    {({
      setFieldValue, dirty,
      errors, touched, handleChange, values, handleBlur,
    }) => (

    <Form className="divide-y divide-gray-200 lg:col-span-9">
      <div className=" sm:rounded-lg sm:p-6">
        <div className="mb-4">
          <h2 className="text-lg leading-6 font-medium text-gray-900">Notifications</h2>
          <p className="mt-1 text-sm text-gray-500">
            Decide which communications you would like to receive.
{' '}
          </p>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-6">

          <div className="mt-5 md:mt-0 md:col-span-2">

            <fieldset>
              {/* <legend className="text-base font-medium text-gray-900">By Email</legend> */}
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="h-5 flex items-center">
                    <input
                      checked={values.keepMeUpdated}
                      onChange={handleChange}
                      id="keepMeUpdated"
                      name="keepMeUpdated"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="font-medium text-gray-700">
                      Newsletter
                    </label>
                    <p className="text-gray-500">Subscribe to receive recent news, courses, and offers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      checked={values.isNotified}
                      onChange={handleChange}
                      id="isNotified"
                      name="isNotified"
                      type="checkbox"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label htmlFor="notifications" className="font-medium text-gray-700">
                      Notifications
                    </label>
                    <p className="text-gray-500">Receive all Learn+ relevent notifications.</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex justify-center content-center mt-8">
          <button
            type="submit"
            disabled={loading || !dirty}
            className={loading ? 'animate-pulse ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400'
              : !dirty ? ' ml-3 w-60 inline-flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400'
                : 'ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}

          >
            Update Notifications
          </button>
        </div>
      </div>

    </Form>
    )}
  </Formik>

  )
}
export default NotificationSection
