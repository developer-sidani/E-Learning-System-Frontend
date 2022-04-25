import React, { useCallback, useState } from 'react'
import { Formik, Form } from 'formik'
import { TextField } from '@mui/material'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { PasswordSchema } from './validation-schema'
import { changePassword } from '../../api/update-user'
import { wait } from '../../utils'

const PasswordSection = () => {
  const [loading, setLoading] = useState(false)
  const profile = useSelector(({ profile }) => profile)
  const [err, setErr] = useState('')
  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  }
  const changePasswordCallback = useCallback(async (values, callback) => {
    setLoading(true)
    setErr('')
    try {
      await profile?.token
      const response = await changePassword(values, profile?.token)
      console.log(response)
      if (response?.status === 203) {
        callback()
      } else {
        setErr(response?.message)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [profile?.token])
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { resetForm }) => {
        await changePasswordCallback(values, async () => {
          toast.success('Password Updated Successfully')
          await wait(700)
          resetForm()
        })
      }}
      validationSchema={PasswordSchema}
    >

      {({
        dirty,
        errors, touched, handleChange, values, handleBlur,
      }) => (
    <Form className="divide-y divide-gray-200 lg:col-span-9">
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
              error={Boolean(touched.oldPassword && errors.oldPassword) || err?.length > 0}
              fullWidth
              helperText={(touched.oldPassword && errors.oldPassword) || err}
              type="password"
              name="oldPassword"
              onChange={handleChange}
              required
              value={values.oldPassword}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
             New Password
            </label>
            <TextField
              error={Boolean(touched.newPassword && errors.newPassword)}
              fullWidth
              helperText={touched.newPassword && errors.newPassword}
              type="password"
              name="newPassword"
              onChange={handleChange}
              required
              value={values.newPassword}
              onBlur={handleBlur}
            />
          </div>

          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Confirm New Password
            </label>
            <TextField
              onBlur={handleBlur}
              error={Boolean(touched.confirmPassword && errors.confirmPassword)}
              fullWidth
              helperText={touched.confirmPassword && errors.confirmPassword}
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              required
              value={values.confirmPassword}
            />
          </div>

        </div>
        <div className="flex justify-center content-center mt-8">
          <button
            type="submit"
            disabled={loading || !dirty}
            className={loading ? 'animate-pulse ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400'
              : !dirty ? ' ml-3 w-60 inline-flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400'
                : 'ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
          >
            Change Password
          </button>
        </div>
      </div>
    </Form>
      )}
    </Formik>
  )
}
export default PasswordSection
