import React, { useRef, useState } from 'react'
import { Formik, Form } from 'formik'

import {
  FormControl,
  FormHelperText,
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material'
import PhoneInput from 'react-phone-input-2'
import { useSelector } from 'react-redux'
import { countryList } from '../../utils'
import { DatePickerComponent } from '../date-picker'
import { ProfileSchema } from './validation-schema'

const submitValues = (callback, handler) => (values, { resetForm }) => {
  console.log(values)
  console.log('test')
  // callback(resetForm)
  // callback(values, resetForm, handler)
}

const countries = countryList.map(({ Name }) => Name)

const ProfileSection = ({ user }) => {
  const [loading, setLoading] = useState(false)
  const profile = useSelector(({ profile }) => profile)

  const ref = useRef(null)
  const initialValues = {
    username: profile?.user?.info?.username || '',
    email: profile?.user?.info?.email || '',
    address: profile?.user?.info?.address || '',
    firstname: profile?.user?.info?.fullName.split(' ')[0] || '',
    lastname: profile?.user?.info?.fullName.substring(profile?.user?.info?.fullName.lastIndexOf(' ') + 1) || '',
    country: profile?.user?.info?.country || '',
    gender: profile?.user?.info?.gender.charAt(0).toUpperCase() + profile?.user?.info?.gender.slice(1) || '',
    phone: profile?.user?.info?.phone || '',
    birthday: '09/08/2000',
    // photoURL: profile?.user?.info?.photoURL || '',
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
      validationSchema={ProfileSchema}
    >

      {({
        setFieldValue, dirty,
        errors, touched, handleChange, values, handleBlur,
      }) => (
  <Form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
    {/* Profile section */}
    <div className="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 className="text-lg leading-6 font-medium text-gray-900">Profile</h2>
        <p className="mt-1 text-sm text-gray-500">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row">
        <div className="flex-grow space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1 rounded-md shadow-sm flex">
                          <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                            learnplus.live/
                          </span>

              <TextField
                onBlur={handleBlur}
                error={Boolean(touched.username && errors.username)}
                // fullWidth
                helperText={touched.username && errors.username}
                name="username"
                onChange={handleChange}
                required
                value={values.username}
              />
            </div>
          </div>

          <div>
            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                name="email"
                onChange={handleChange}
                required
                onBlur={handleBlur}
                value={values.email}
              />
            </div>

          </div>
        </div>

        <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
          <p className="text-sm font-medium text-gray-700" aria-hidden="true">
            Photo
          </p>
          <div className="mt-1 lg:hidden">
            <div className="flex items-center">
              <div
                className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                aria-hidden="true"
              >
                <img className="rounded-full h-full w-full" src={user.imageUrl} alt="" />
              </div>
              <div className="ml-5 rounded-md shadow-sm">
                <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                  <label
                    htmlFor="mobile-user-photo"
                    className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                  >
                    <span>Change</span>
                    <span className="sr-only"> user photo</span>
                  </label>
                  {/* <input */}
                  {/*  id="mobile-user-photo" */}
                  {/*  name="user-photo" */}
                  {/*  type="file" */}
                  {/*  className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md" */}
                  {/* /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden relative rounded-full overflow-hidden lg:block">
            <img className="relative rounded-full w-40 h-40" src={user.imageUrl} alt="" />
            <label
              htmlFor="desktop-user-photo"
              className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
            >
              <span>Change</span>
              <span className="sr-only"> user photo</span>
              <input
                type="file"
                id="desktop-user-photo"
                name="user-photo"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <TextField
            onBlur={handleBlur}
            error={Boolean(touched.firstname && errors.firstname)}
            fullWidth
            helperText={touched.firstname && errors.firstname}
            name="firstname"
            onChange={handleChange}
            required
            value={values.firstname}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <TextField
            onBlur={handleBlur}
            error={Boolean(touched.lastname && errors.lastname)}
            fullWidth
            helperText={touched.lastname && errors.lastname}
            name="lastname"
            onChange={handleChange}
            required
            value={values.lastname}
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            error={Boolean(touched.country && errors.country)}
            fullWidth
            name="country"
            onChange={handleChange}
            required
            value={values.country}
            onBlur={handleBlur}
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country}>{country}</MenuItem>
            ))}
          </Select>
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
            name="address"
            onChange={handleChange}
            required
            value={values.address}
          />
        </div>
        {/* new */}
        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <PhoneInput
            specialLabel=""
            country="lb"
            autoFormat={false}
            inputProps={{
              name: 'phone',
              autoFocus: false,
            }}
            value={values.phone}
            onChange={(phoneNumber, country, e) => {
              handleChange(e)
            }}
            inputStyle={{ width: '100%' }}
            containerStyle={{ width: '100%' }}
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
            Birthday
          </label>
          <DatePickerComponent
            date={values.birthday}
            setDate={setFieldValue}
            name="birthday"
            value={values.birthday}
          />
        </div>
        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            error={Boolean(touched.gender && errors.gender)}
            fullWidth
            name="gender"
            onChange={handleChange}
            required
            value={values.gender}
            onBlur={handleBlur}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </div>

      </div>
      <div className="flex justify-center content-center mt-8">
        <button
          type="submit"
          disabled={loading}
          className={loading ? 'animate-pulse ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400'
            : 'ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
        >
          Update Profile
        </button>
      </div>
    </div>

  </Form>
      )}
    </Formik>
  )
}
export default ProfileSection
