import React from 'react'
import PhoneInput from 'react-phone-input-2'
import { styles } from '../tw-styles'
import { countryList } from '../../../utils'
import 'react-phone-input-2/lib/material.css'

const PersonalInformationSection = ({
  touched, errors, handleChange, values,
}) => (
  <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>

      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">

        {/* FIRSTNAME AND LASTNAME */}

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

          {/* ************************************ */}

          {/* email and country */}
          <div className="col-span-6 sm:col-span-3">
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
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              value={values.gender}
              onChange={handleChange}
              id="gender"
              name="gender"
              autoComplete="Gender"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <option value="" disabled />
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {(errors.gender) && touched.gender ? (
              <div className="mt-2 text-pink-600 text-sm">
                {errors.gender}
              </div>
            ) : null}
          </div>
          {/* ************************************************** */}

          {/* PASSWORD */}

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
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              value={values.country}
              onChange={handleChange}
              id="country"
              name="country"
              autoComplete="country-name"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <option value="" disabled />
              {countryList.map(({ Name }, i) => (
                <option key={i} value={Name}>{Name}</option>
              ))}
            </select>
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
        <div className="col-span-3 sm:col-span-3">
          <div className="col-span-6 mt-8">
            <PhoneInput
              autoFormat={false}
              inputProps={{
                name: 'phone',
                // onChange: handleChange
                autoFocus: true,
              }}
              value={values.phone}
              onChange={(phoneNumber, country, e) => { handleChange(e) }}
              inputClass={styles.inputContainer2}
              containerStyle={{ width: '100%' }}
            />
            {(errors.phone) && touched.phone ? (
              <div className="mt-2 text-pink-600 text-sm">
                {errors.phone}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PersonalInformationSection
