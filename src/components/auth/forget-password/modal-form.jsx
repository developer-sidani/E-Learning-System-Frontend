import React, { forwardRef, useState, useCallback } from 'react'
import { LockClosedIcon } from '@heroicons/react/outline'
import { Dialog } from '@headlessui/react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { styles } from '../tw-styles'
import { wait } from '../../../utils'
import { forgetPassword } from '../../../api/auth'

const Schema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
})

const ModalForm = ({ email, setOpen, setEmailSent }, ref) => {
  const [res, setRes] = useState({
    loading: false,
    err: '',
  })
  const resetPassword = useCallback(
    async (email, callback) => {
      try {
        const response = await forgetPassword({
          email,
        })
        if (response.res.statusCode !== 200) {
          // not found
          setRes(prevState => ({ ...prevState, err: response.res?.message }))
        } else {
          callback()
        }
      } catch (err) {
        console.log({ err })
      } finally {
        setRes(prevState => ({ ...prevState, loading: false }))
      }
    },
    [],
  )
  return (
        <Formik
          initialValues={{
            email,
          }}
          validationSchema={Schema}
          onSubmit={({ email }, { resetForm }) => {
            setRes({ err: '', loading: true })
            resetPassword(email, async () => {
              await wait(750)
              resetForm()
              setEmailSent(true)
            })
          }}
        >
            {({ errors, touched }) => (
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <Form>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <LockClosedIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900 font-700" />
                                    Forgot Password
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                    Please enter the email address you used to create your account,
                                    and we will send you a link to reset your password.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="password" className={styles.inputLabel}>
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <Field
                                          id="email"
                                          name="email"
                                          type="text"
                                          autoComplete="email"
                                          required
                                          className={styles.inputContainer}
                                        />
                                        {(errors.email || Boolean(res.err)) && touched.email ? (
                                        <div className="mt-2 text-pink-600 text-sm">
                                            {errors.email || res.err}
                                        </div>
                                        ) : null}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                  type="submit"
                                  ref={ref}
                                  disabled={res.loading}
                                  className={res.loading ? 'animate-pulse w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-400 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm'
                                    : 'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'}
                                >
                                    Submit
                                </button>
                                <button
                                  type="button"
                                  disabled={res.loading}
                                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                  onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </Form>
                    </div>

            )}

        </Formik>
  )
}

export default forwardRef(ModalForm)
