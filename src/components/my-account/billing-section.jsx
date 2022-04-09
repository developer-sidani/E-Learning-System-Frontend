import React, { useState } from 'react'
import { TextField } from '@mui/material'

const BillingSection = () => {
  const [loading, setLoading] = useState(false)
  return (
    <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
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
              // error={Boolean(touched.password && errors.password)}
              fullWidth
              // helperText={touched.password && errors.password}
              type="text"
              name="password"
              // onChange={handleChange}
              required
              // value={values.password}
              // onBlur={handleBlur}
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <TextField
              // onBlur={handleBlur}
              // error={Boolean(touched.confirm_password && errors.confirm_password)}
              fullWidth
              // helperText={touched.confirm_password && errors.confirm_password}
              type="text"
              name="confirm_password"
              // onChange={handleChange}
              required
              // value={values.confirm_password}
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
              // error={Boolean(touched.password && errors.password)}
              fullWidth
              // helperText={touched.password && errors.password}
              type="text"
              name="password"
              // onChange={handleChange}
              required
              // value={values.password}
              // onBlur={handleBlur}
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <TextField
              // onBlur={handleBlur}
              // error={Boolean(touched.confirm_password && errors.confirm_password)}
              fullWidth
              // helperText={touched.confirm_password && errors.confirm_password}
              type="text"
              name="confirm_password"
              // onChange={handleChange}
              required
              // value={values.confirm_password}
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
              // error={Boolean(touched.password && errors.password)}
              fullWidth
              // helperText={touched.password && errors.password}
              placeholder="MM/YY"
              type="text"
              name="password"
              // onChange={handleChange}
              required
              // value={values.password}
              // onBlur={handleBlur}
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              CVC
            </label>
            <TextField
              // onBlur={handleBlur}
              // error={Boolean(touched.confirm_password && errors.confirm_password)}
              // helperText={touched.confirm_password && errors.confirm_password}
              type="password"
              name="cvc"
              // onChange={handleChange}
              required
              // value={values.confirm_password}
            />
          </div>

        </div>

        {/* Submit Button */}
        <div className="flex justify-center content-center mt-8">
          <button
            type="submit"
            disabled={loading}
            className={loading ? 'animate-pulse ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400'
              : 'ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
          >
            Save Information
          </button>
        </div>
      </div>

    </form>
  )
}
export default BillingSection
