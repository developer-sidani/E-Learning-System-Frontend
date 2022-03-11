import React, { useCallback } from 'react'
import { Formik, Form } from 'formik'
import { SignUpSchema } from './validation-schema'
import { isEmail, phoneRegex, countryList } from '../../../utils'
import { styles } from '../tw-styles'
import 'react-phone-input-2/lib/material.css'
import { callRegisterApi, submitValues, initialValues } from './formik-handlers'
import ProfileSection from './profile-section'
import PersonalInformationSection from './personal-information-section'
import NotificationsSection from './notifications-section'
import ComponentHeader from './component-header'

const dataFormat = 'yyyy-MM-DD'

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
      <ComponentHeader />
      <Formik
        initialValues={initialValues}
        onSubmit={submitValues(registerStudent)}
        validationSchema={SignUpSchema}
      >
        {({
          errors, touched, handleChange, values,
        }) => (
          <Form className="space-y-6">
            <ProfileSection
              values={values}
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />
            <PersonalInformationSection
              values={values}
              errors={errors}
              handleChange={handleChange}
              touched={touched}
            />
            <NotificationsSection
              values={values}
              handleChange={handleChange}
            />

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
