import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik, Form } from 'formik'
import {
  TextField,
} from '@mui/material'
import * as Yup from 'yup'
import { toast } from 'react-hot-toast'
import { createQuestion } from '../../api'
import { wait } from '../../utils'

export const QuestionSchema = Yup.object()
  .shape({

    content: Yup.string()
      .required('Your content could not be empty'),

  })

const AddQuestion = ({ lectureId }) => {
  const [loading, setLoading] = useState(false)
  const questionCallBack = useCallback(
    async (
      {
        content,
        userId,
        lectureId,
      },
      successfulCallBack,
      errorCallBack,
    ) => {
      setLoading(true)
      try {
        const response = await createQuestion({

          content,
          userId,
          lectureId,
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

  const profile = useSelector(({ profile }) => profile)
  const userId = profile?.user?.id
  const initialValues = {
    userId,
    lectureId,
    content: '',
  }
  const submitValues = () => (values, { resetForm }) => {
    values.lectureId = lectureId
    values.userId = userId

    questionCallBack(
      values,
      async () => {
        toast.success('Question sent successfully')
        await wait(700)
        resetForm()
      },
      () => {
        toast.error('Question could not be sent')
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
          validationSchema={QuestionSchema}
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
                <label htmlFor="comment" className="sr-only">
                  Add your question
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

    </div>
  )
}

export default AddQuestion
