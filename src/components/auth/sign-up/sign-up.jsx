import React, { useCallback } from 'react'
import { Formik, Form } from 'formik'
import PhoneInput from 'react-phone-input-2'
import { SignUpSchema } from './validation-schema'
import { register } from '../../../api'
import { isEmail, phoneRegex, countryList } from '../../../utils'
import { styles } from '../tw-styles'
import 'react-phone-input-2/lib/material.css'
import { callRegisterApi, submitValues, initialValues } from './formik-handlers'

const dataFormat = 'yyyy-MM-DD'

const Logo = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'

const SignUpComponent = () => {
  const registerStudent = useCallback(
    callRegisterApi,
    [],
  )

  // todo:
  // - Change styling for the select input
  // - Handle server errors
  // - show a success message to check email
  return (
    <div className="space-y-6 mt-6 md:m-32">

      <div className={styles.header}>
        <img
          className={styles.logo}
          src={Logo}
          alt="Learn+"
        />
        <h2 className={styles.title}>Register to start with Learn +</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          <a href="/auth/sign-in" className={styles.link}>
            Login Here
          </a>
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={submitValues(registerStudent)}
        validationSchema={SignUpSchema}
      >
        {({
          errors, touched, handleChange, values,
        }) => (
          <Form className="space-y-6">

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful what you share.
                  </p>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">

                        <input
                          value={values.user}
                          onChange={handleChange}
                          type="text"
                          name="user"
                          id="user"
                          className={styles.inputContainer}
                          placeholder=""
                        />
                        {(errors.user) && touched.user ? (
                          <div className="mt-2 text-pink-600 text-sm">
                            {errors.user}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

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
                        className={`mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${styles.inputContainer}`}
                      >
                        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                        <option value="" disabled />
                        {countryList.map((x, i) => (
                          <option key={i} value={x.Name}>{x.Name}</option>
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
                    {/* PHONE NUMBER */}

                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="col-span- mt-8">
                      <PhoneInput
                        inputProps={{
                          // value: values.phone,
                          // onChange: handleChange,
                          autoFocus: true,
                        }}
                        // country="lb"
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

            {/* NOTIFICATIONS */}

            <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                  <p className="mt-1 text-sm text-gray-500">Decide which communications you would like to receive.</p>
                </div>
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
            </div>

            <div className="flex justify-center content-center">
              <button
                type="submit"
                className="ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
