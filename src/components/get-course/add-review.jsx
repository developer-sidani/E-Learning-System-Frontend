import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import {
  TextField,
} from '@mui/material'
import * as Yup from 'yup'
import StarRatings from 'react-star-ratings'
import { toast } from 'react-hot-toast'
import { createReview } from '../../api'
import { wait } from '../../utils'

export const ReviewSchema = Yup.object()
  .shape({

    content: Yup.string()
      .required('Your content could not be empty'),
    rating: Yup.number()
      .required('Rating could not be zero'),

  })

const AddReview = ({ courseId }) => {
  const [loading, setLoading] = useState(false)
  const reviewCallBack = useCallback(
    async (
      {
        content,
        rating,
        userId,
        courseId,
      },
      successfulCallBack,
      errorCallBack,
    ) => {
      setLoading(true)
      try {
        const response = await createReview({

          content,
          rating,
          userId,
          courseId,
        })
        if (response?.status === 200) {
          successfulCallBack()
        } else {
          errorCallBack()
        }
      } catch
      (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    },
    [],
  )

  const [starRating, setStarRating] = useState()

  const profile = useSelector(({ profile }) => profile)
  const userId = profile?.user?.id
  const initialValues = {
    // userId,
    courseId,
    content: '',
    rating: 0,
  }
  const submitValues = () => (values, { resetForm }) => {
    values.courseId = courseId
    values.userId = userId
    values.rating = starRating

    reviewCallBack(
      values,
      async () => {
        toast.success('Review sent successfully')
        await wait(700)
        resetForm()
      },
      () => {
        toast.error('Review could not be sent')
      },
    )
  }

  return (
        <div className="flex items-start space-x-4 mt-5">
          <div className="flex-shrink-0">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src={profile?.user?.info?.photoUrl || 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fuser.png?alt=media&token=84d78ce0-3b98-4506-af71-e7599f0a2bb0'}
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">

            <Formik
              initialValues={initialValues}
              onSubmit={submitValues()}
              validationSchema={ReviewSchema}
            >

              {({

                dirty,
                errors,
                touched,
                handleChange,
                values,
                handleBlur,
              }) => (
                <Form>
                  <div className=" border-gray-200 focus-within:border-indigo-600">
                    <StarRatings
                      error={Boolean(touched.rating && errors.rating)}
                      rating={starRating}
                      changeRating={setStarRating}
                      name="rating"
                      starDimension="20px"
                      starHoverColor="#FACC15"
                      starRatedColor="#FACC15"
                      starSpacing="0px"
                      numberOfStars={5}
                    />
                    {(errors.rating) && touched.rating ? (
                      <div className="mt-1 text-pink-600 text-sm">
                        {errors.rating}
                      </div>
                    ) : null}

                    <label htmlFor="comment" className="sr-only">
                      Add your review
                    </label>
                    <TextField
                      error={Boolean(touched.content && errors.content)}
                      fullWidth
                      helperText={touched.content && errors.content}
                      type="text"
                      name="content"
                      onChange={handleChange}
                      required
                      value={values.content}
                      onBlur={handleBlur}
                      multiline
                      rows={4}
                      className=" mt-5 block w-full border-0 border-b border-transparent p-0 pb-2 resize-none focus:ring-0 focus:border-indigo-600 sm:text-sm"
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

        </div>
  )
}

export { AddReview }
