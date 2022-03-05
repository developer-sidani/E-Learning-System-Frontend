import React from 'react'
// import Datepicker from '@themesberg/tailwind-datepicker'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import PhoneInput from 'react-phone-input-2'
import { isEmail, countryList } from '../../utils'
import { styles } from './tw-styles'
import 'react-phone-input-2/lib/material.css'

const SignUpSchema = Yup.object().shape({
  user: Yup.string().required('Required'),
  email: Yup.string().email('Must be a valid email').required('Required'),
  password: Yup.string().required('Required'),
  confirm_password: Yup.string().required('Required'),
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  birthday: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  gender: (gender) => (Boolean) || 'male',
  isNotified: Yup.boolean().default(true),
  keepMeUpdated: Yup.boolean().default(true),
})

const Logo = 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'

const SignUpComponent = () => (
  <div className="space-y-6 mt-6 md:m-32">

<div className={styles.header}>
          <img
            className={styles.logo}
            src={Logo}
            alt="Learn+"
          />
          <h2 className={styles.title}>Sign up to start with Learn +</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?
              {' '}
            <a href="./sign-in" className={styles.link}>
              Login Here
            </a>
          </p>
</div>
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form className="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">

                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className={styles.inputContainer}
                      // className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Photo</label>
                <div className="mt-1 flex items-center space-x-5">
                  <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Change
                  </button>
                </div>
              </div>

            </form>
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
            <form action="#" method="POST">

              {/* FIRSTNAME AND LASTNAME */}

              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className={styles.inputContainer}
                    // className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className={styles.inputContainer}
                    // className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                {/* ************************************ */}

                    {/* email and country */}
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className={styles.inputContainer}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Gender
                </label>
                  <select
                    id="gender"
                    name="gender"
                    autoComplete="Gender"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                  <option>Male</option>
                  <option>Female</option>
                  </select>
                </div>
                {/* ************************************************** */}

                            {/* PASSWORD */}

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className={styles.inputContainer}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className={styles.inputContainer}
                  />
                </div>

              {/* ************************************************** */}
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country
                </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                   {countryList.map((x, i) => (
                     <option key={i}>{x.Name}</option>
                   ))}
                  </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Address
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className={styles.inputContainer}
                  />
              </div>
                            {/* PHONE NUMBER */}

{/* ********************** */}

              </div>

                <div className="col-span-6 sm:col-span-3">
                <div className="col-span- mt-8">
            <PhoneInput
              inputProps={{
                name: 'phone',
                required: true,
                // enableSearch: true,

              }}
              excludeCountries="il"
              country="lb"
              inputClass={styles.inputContainer2}
              containerStyle={{ width: '100%' }}
              enableAreaCodes
            />
                </div>

                </div>

            </form>
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

            <form className="space-y-6" action="#" method="POST">
              <fieldset>
                {/* <legend className="text-base font-medium text-gray-900">By Email</legend> */}
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="h-5 flex items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="comments" className="font-medium text-gray-700">
                        Newsletter
                      </label>
                      <p className="text-gray-500">Subscribe to receive recent news, courses, and offers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>

                    <div className="ml-3 text-sm">
                      <label htmlFor="candidates" className="font-medium text-gray-700">
                        Notifications
                      </label>
                      <p className="text-gray-500">Receive all Learn+ relevent notifications.</p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>

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
  </div>
)

export { SignUpComponent }
