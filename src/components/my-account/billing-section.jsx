import React, { useState, useRef } from 'react'
import { Formik, Form } from 'formik'
import { useSelector } from 'react-redux'
import { TextField } from '@mui/material'
import { BillingSchema } from './validation-schema'

const submitValues = (callback, handler) => (values, { resetForm }) => {
  console.log(values)
  // callback(resetForm)

  // callback(values, resetForm, handler)
}

const BillingSection = () => {
  const [loading, setLoading] = useState(false)
  const profile = useSelector(({ profile }) => profile)

  const ref = useRef(null)
  const initialValues = {
    email: profile?.user?.info?.email || '',
    address: '',
    name_on_card: '',
    card_number: '',
    expiration: '',
    cvc: '',

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
      validationSchema={BillingSchema}
    >

      {({
        setFieldValue, dirty,
        errors, touched, handleChange, values, handleBlur,
      }) => (

        <Form className="divide-y divide-gray-200 lg:col-span-9">
      {/* Profile section */}
      <div className="py-6 px-4 sm:p-6 lg:pb-8">
        <div>
          <h2 className="text-lg leading-6 font-medium text-gray-900">Billing</h2>
          <p className="mt-1 text-sm text-gray-500">
            This information is sensitive so be careful.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.password && errors.password}
              type="text"
              name="email"
              onChange={handleChange}
              required
              value={values.email}
              onBlur={handleBlur}
            />

          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <TextField
              onBlur={handleBlur}
              error={Boolean(touched.address && errors.address)}
              fullWidth
              helperText={touched.address && errors.address}
              type="text"
              name="address"
              onChange={handleChange}
              required
              value={values.address}
            />
          </div>

        </div>

        {/* Second Row */}
        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <TextField
              error={Boolean(touched.name_on_card && errors.name_on_card)}
              fullWidth
              helperText={touched.name_on_card && errors.name_on_card}
              type="text"
              name="name_on_card"
              onChange={handleChange}
              required
              value={values.name_on_card}
              onBlur={handleBlur}
            />

          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <TextField
              onBlur={handleBlur}
              error={Boolean(touched.card_number && errors.card_number)}
              fullWidth
              helperText={touched.card_number && errors.card_number}
              type="number"
              name="card_number"
              onChange={handleChange}
              required
              value={values.card_number}
            />
          </div>

        </div>

        {/* Third Row */}
        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              Expiration Date
            </label>
            <TextField
              error={Boolean(touched.expiration && errors.expiration)}
              fullWidth
              helperText={touched.expiration && errors.expiration}
              placeholder="MM/YY"
              type="text"
              name="expiration"
              onChange={handleChange}
              required
              value={values.expiration}
              onBlur={handleBlur}
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <TextField
              onBlur={handleBlur}
              error={Boolean(touched.cvc && errors.cvc)}
              helperText={touched.cvc && errors.cvc}
              type="number"
              name="cvc"
              fullWidth
              onChange={handleChange}
              required
              value={values.cvc}
            />
          </div>

        </div>

        {/* Submit Button */}
        <div className="flex justify-center content-center mt-8">
          <button
            type="submit"
            disabled={loading || !dirty}
            className={loading ? 'animate-pulse ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400'
              : !dirty ? ' ml-3 w-60 inline-flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400'
                : 'ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}

          >
            Save Information
          </button>
        </div>
      </div>

        </Form>
      )}
    </Formik>
  )
}
export default BillingSection
