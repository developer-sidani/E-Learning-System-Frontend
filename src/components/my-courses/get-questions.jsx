import React, {
  memo, useCallback, useEffect, useState,
} from 'react'
import { getQuestions } from '../../api'

function classNames(...classes) {
  return classes.filter(Boolean)
    .join(' ')
}

const GetQuestions = ({ lectureId }) => {
  console.log(lectureId)
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(true)

  const Loader = memo(() => {
    const circleCommonClasses = 'h-5 w-5 bg-primary rounded-full'

    return (
      <div className="flex h-96">
        <div className="m-auto flex">
          <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
          <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
          <div className={`${circleCommonClasses} animate-bounce400`} />
        </div>
      </div>
    )
  })

  const getQuestionsCallBack = useCallback(async (id) => {
    try {
      return await getQuestions(id)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    if (lectureId) {
      getQuestionsCallBack(lectureId).then((r) => setQuestions(r.res))
    }
  }, [lectureId])
  console.log(questions)

  return loading ? <Loader /> : (
    <>
      <h3 className="sr-only">questions</h3>

      {questions?.map((review, reviewIdx) => (
        <div key={review?.id} className="flex text-sm text-gray-500 space-x-4">
          <div className="flex-none py-10">
            <img src={review?.userId?.info?.photoUrl} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
          </div>
          <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
            <h3 className="font-medium text-gray-900">{review?.userId?.info?.fullName}</h3>
            <p>
              <time dateTime={review?.datetime}>{review?.date}</time>
            </p>

            <div
              className="mt-4 prose prose-sm max-w-none text-gray-500"
              dangerouslySetInnerHTML={{ __html: review?.content }}
            />
          </div>

        </div>
      ))}

    </>
  )
}

export default GetQuestions
