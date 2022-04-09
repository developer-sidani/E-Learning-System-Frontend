import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import {
  FormControl,
  FormHelperText,
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import { countryList } from '../../utils'
import { DatePickerComponent } from '../date-picker'

const countries = countryList.map(({ Name }) => Name)

const PasswordSection = () => {
  const [loading, setLoading] = useState(false)
  return (
    <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
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
              // error={Boolean(touched.password && errors.password)}
              fullWidth
              // helperText={touched.password && errors.password}
              type="password"
              name="password"
              // onChange={handleChange}
              required
              // value={values.password}
              // onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
             New Password
            </label>
            <TextField
              // error={Boolean(touched.password && errors.password)}
              fullWidth
              // helperText={touched.password && errors.password}
              type="password"
              name="password"
              // onChange={handleChange}
              required
              // value={values.password}
              // onBlur={handleBlur}
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <TextField
              // onBlur={handleBlur}
              // error={Boolean(touched.confirm_password && errors.confirm_password)}
              fullWidth
              // helperText={touched.confirm_password && errors.confirm_password}
              type="password"
              name="confirm_password"
              // onChange={handleChange}
              required
              // value={values.confirm_password}
            />
          </div>

        </div>
        <div className="flex justify-center content-center mt-8">
          <button
            type="submit"
            disabled={loading}
            className={loading ? 'animate-pulse ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400'
              : 'ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
          >
            Change Password
          </button>
        </div>
      </div>

    </form>
  )
}
export default PasswordSection
