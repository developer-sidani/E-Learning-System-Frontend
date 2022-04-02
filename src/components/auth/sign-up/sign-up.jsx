import React, {
  useCallback, useRef, useState,
} from 'react'
import { Formik, Form } from 'formik'
import {
  SignUpSchema,
  callRegisterApi,
  submitValues,
  initialValues,
  ProfileSection,
  PersonalInformationSection,
  NotificationsSection,
  ComponentHeader,
  ErrorAlert,
  SuccessModal,
} from '.'
import { wait } from '../../../utils'

const SignUpComponent = () => {
  const ref = useRef(null)
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
  const registerStudent = useCallback(
    callRegisterApi,
    [],
  )

  return (
    <div className="space-y-6 mt-6 md:m-32">
      <ComponentHeader />
      <SuccessModal setOpen={setOpen} open={open} />
      {serverError && <ErrorAlert message={serverError} ref={ref} />}
      <Formik
        initialValues={initialValues}
        onSubmit={submitValues(registerStudent, {
          init() {
            setServerError('')
            setLoading(true)
          },
          error(message) {
            setServerError(message)
            scrollToError()
          },
          stopLoading() {
            setLoading(false)
          },
          success: async (callback) => {
            setServerError('')
            setLoading(false)
            setOpen(true)
            await wait(500)
            callback()
          },
        })}
        validationSchema={SignUpSchema}
      >
        {({
          setFieldValue,
          errors, touched, handleChange, values, handleBlur,
        }) => (
          <Form className="space-y-6">
            <ProfileSection
              values={values}
              errors={errors}
              handleChange={handleChange}
              touched={touched}
              handleBlur={handleBlur}
            />
            <PersonalInformationSection
              handleBlur={handleBlur}
              values={values}
              errors={errors}
              handleChange={handleChange}
              touched={touched}
              setFieldValue={setFieldValue}
            />
            <NotificationsSection
              values={values}
              handleChange={handleChange}
            />
            <div className="flex justify-center content-center">
              <button
                type="submit"
                disabled={loading}
                className={loading ? 'animate-pulse ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400'
                  : 'ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { SignUpComponent }
