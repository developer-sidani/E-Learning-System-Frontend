import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import {
  TextField,
} from '@mui/material'
import * as Yup from 'yup'

export const ReviewSchema = Yup.object().shape({

  message: Yup.string().required('Your message could not be empty'),

})

const submitValues = (callback, handler) => (values, { resetForm }) => {
  resetForm()
  console.log(values)
  // callback(values, resetForm, handler)
}

const AddReview = ({ courseId }) => {
  const [rating, setRating] = useState(0)
  const profile = useSelector(({ profile }) => profile)
  const ref = useRef(null)
  const initialValues = {
    message: '',
  }

  const [loading, setLoading] = useState(false)
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
    <div className="flex items-start space-x-4 mt-5">
      <div className="flex-shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full"
          src={profile?.user?.info?.photoUrl || 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fuser.png?alt=media&token=11e4daf6-bffa-4e1d-8359-260f96c87514'}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">

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
          validationSchema={ReviewSchema}
        >

          {({
            setFieldValue, dirty,
            errors, touched, handleChange, values, handleBlur,
          }) => (
        <Form>
          <div className=" border-gray-200 focus-within:border-indigo-600">
            <label htmlFor="comment" className="sr-only">
              Add your review
            </label>
            <TextField
              error={Boolean(touched.message && errors.message)}
              fullWidth
              helperText={touched.message && errors.message}
              type="text"
              name="message"
              onChange={handleChange}
              required
              value={values.message}
              onBlur={handleBlur}
              multiline
              rows={4}
              className=" block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm"
              placeholder="Add your comment..."
            />
          </div>
          <div className="pt-2 ">

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading || !dirty}
                className={loading ? 'animate-pulse ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400'
                  : !dirty ? ' ml-3 w-60 inline-flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-400'
                    : 'ml-3 w-60 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}
              >
                Post
              </button>
            </div>
          </div>
        </Form>
          )}
        </Formik>
      </div>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? 'bg-white' : 'off'}
              onClick={() => setRating(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export { AddReview }
