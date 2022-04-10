import React, { useRef, useState } from 'react'
import { Formik, Form } from 'formik'

import { Switch } from '@headlessui/react'
import {
  FormControl,
  FormHelperText,
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import { useSelector } from 'react-redux'
import { PasswordSchema } from './validation-schema'

const submitValues = (callback, handler) => (values, { resetForm }) => {
  console.log(values)
  // callback(values, resetForm, handler)
}

const PasswordSection = () => {
  const [loading, setLoading] = useState(false)
  const profile = useSelector(({ profile }) => profile)

  const ref = useRef(null)
  const initialValues = {
    old_password: '',
    new_password: '',
    confirm_password: '',
  }

  const [serverError, setServerError] = useState('')
  const [open, setOpen] = useState(false)

  const scrollToError = () => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      })
    }
  }
  return (
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
      validationSchema={PasswordSchema}
    >

      {({
        setFieldValue, dirty,
        errors, touched, handleChange, values, handleBlur,
      }) => (
    <Form className="divide-y divide-gray-200 lg:col-span-9">
      {/* Profile section */}
      <div className="py-6 px-4 sm:p-6 lg:pb-8">
        <div>
          <h2 className="text-lg leading-6 font-medium text-gray-900">Password</h2>
          <p className="mt-1 text-sm text-gray-500">This information is sensitive so be careful.</p>
        </div>
        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              Old Password
            </label>
            <TextField
              error={Boolean(touched.old_password && errors.old_password)}
              fullWidth
              helperText={touched.old_password && errors.old_password}
              type="password"
              name="old_password"
              onChange={handleChange}
              required
              value={values.old_password}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
             New Password
            </label>
            <TextField
              error={Boolean(touched.new_password && errors.new_password)}
              fullWidth
              helperText={touched.new_password && errors.new_password}
              type="password"
              name="new_password"
              onChange={handleChange}
              required
              value={values.new_password}
              onBlur={handleBlur}
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <TextField
              onBlur={handleBlur}
              error={Boolean(touched.confirm_password && errors.confirm_password)}
              fullWidth
              helperText={touched.confirm_password && errors.confirm_password}
              type="password"
              name="confirm_password"
              onChange={handleChange}
              required
              value={values.confirm_password}
            />
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
            Change Password
          </button>
        </div>
      </div>
    </Form>
      )}
    </Formik>
  )
}
export default PasswordSection
