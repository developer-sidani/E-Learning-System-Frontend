import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { Grid } from '@mui/material'
import { styles } from '../tw-styles'
import { countryList } from '../../../utils'
import 'react-phone-input-2/lib/material.css'
import { SelectMenu } from '../../select-menu'
import { DatePickerComponent } from '../../date-picker'
import { UploadFile } from '../../../hooks'

const countries = countryList.map(({ Name }) => Name)
const PersonalInformationSection = ({
  touched, errors, handleChange, values, setFieldValue,
}) => {
  const [file, handleUpload] = UploadFile({
    location: 'images/users/students',
    fileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
    fileSize: 2,
    errorMessages: {
      fileType: 'Please select an image file (png or jpg)',
      fileSize: 'File Should Not Exceed 2MB',
    },
  })
  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>

        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <input
                value={values.firstname}
                onChange={handleChange}
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="first-name"
                className={styles.inputContainer}
              />
              {(errors.firstname) && touched.firstname ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.firstname}
                </div>
              ) : null}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <input
                value={values.lastname}
                onChange={handleChange}
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="last-name"
                className={styles.inputContainer}
              />
              {(errors.lastname) && touched.lastname ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.lastname}
                </div>
              ) : null}
            </div>

            <div className="mt-6 lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0 col-span-3">
              <p className="text-sm font-medium text-gray-700" aria-hidden="true">
                Photo
              </p>
              <div className="mt-1 lg:hidden">
                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                    aria-hidden="true"
                  >
                    <img className="rounded-full h-full w-full" src={file.url || ''} alt="" />
                  </div>
                  <div className="ml-5 rounded-md shadow-sm">
                    <div
                      className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500"
                    >
                      <label
                        htmlFor="mobile-user-photo"
                        className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                      >
                        <span>Change</span>
                        <span className="sr-only">user photo</span>
                      </label>
                      <input
                        onChange={handleUpload}
                        id="mobile-user-photo"
                        name="user-photo"
                        type="file"
                        className="absolute h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden relative rounded-full overflow-hidden lg:block w-1/2">
                <img className="relative rounded-full w-40 h-40" src={file.url || ''} alt="" />
                <label
                  htmlFor="desktop-user-photo"
                  className="absolute inset-0 h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
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
              {file.error && (
                <div className="mt-2 text-pink-600 text-sm">
                  {file.error}
                </div>
              ) }
              {(!file.error || file.active) && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${file.progress.toString()}%` }} />
                </div>
              ) }

            </div>

            {/* email and country */}
            <div className="col-span-6 sm:col-span-6">
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className={styles.inputContainer}
              />
              {(errors.email) && touched.email ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.email}
                </div>
              ) : null}
            </div>

            <div className="col-span-6 -mt-1 sm:col-span-3">
              <SelectMenu
                name="gender"
                handleChange={handleChange}
                value={values.gender}
                options={['Male', 'Female']}
                title="Gender"
              />
              {(errors.gender) && touched.gender ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.gender}
                </div>
              ) : null}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                value={values.password}
                onChange={handleChange}
                type="password"
                name="password"
                id="password"
                className={styles.inputContainer}
              />
              {(errors.password) && touched.password ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.password}
                </div>
              ) : null}
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                value={values.confirm_password}
                onChange={handleChange}
                type="password"
                name="confirm_password"
                id="confirm_password"
                className={styles.inputContainer}
              />
              {(errors.confirm_password) && touched.confirm_password ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.confirm_password}
                </div>
              ) : null}
            </div>

            {/* ************************************************** */}
            <div className="col-span-6 sm:col-span-3 -mt-1">
              <SelectMenu
                name="country"
                handleChange={handleChange}
                value={values.country}
                options={countries}
                title="Country"
              />
              {(errors.country) && touched.country ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.country}
                </div>
              ) : null}
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                value={values.address}
                onChange={handleChange}
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                className={styles.inputContainer}
              />
              {(errors.address) && touched.address ? (
                <div className="mt-2 text-pink-600 text-sm">
                  {errors.address}
                </div>
              ) : null}
            </div>

          </div>
          {/* PHONE NUMBER */}
          <Grid
            container
            spacing={3}
            mt={2}
          >
            <Grid
              item
              md={6}
              sm={12}
            >
              <>
                <PhoneInput
                  autoFormat={false}
                  inputProps={{
                    name: 'phone',
                    autoFocus: true,
                  }}
                  value={values.phone}
                  onChange={(phoneNumber, country, e) => {
                    handleChange(e)
                  }}
                  // inputClass={styles.inputContainer2}
                  // containerStyle={{ width: '100%' }}
                />
                {(errors.phone) && touched.phone ? (
                  <div className="mt-2 text-pink-600 text-sm">
                    {errors.phone}
                  </div>
                ) : null}
              </>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
            >
              <DatePickerComponent
                label="Birthday"
                date={values.birthday}
                setDate={setFieldValue}
                name="birthday"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default PersonalInformationSection
