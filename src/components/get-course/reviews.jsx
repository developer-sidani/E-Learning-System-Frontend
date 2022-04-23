import React, {
  memo, useCallback, useEffect, useState,
} from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { reviews } from './data'
import { getReviews, getSectionsWithLectures } from '../../api'

function classNames(...classes) {
  return classes.filter(Boolean)
    .join(' ')
}

const ReviewsComponent = ({ courseId }) => {
  const [reviews, setReviews] = useState([])
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

  const reviewCallBack = useCallback(async (id) => {
    try {
      return await getReviews(id)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    if (courseId) {
      reviewCallBack(courseId).then((r) => setReviews(r.res))
    }
  }, [courseId])
  console.log(reviews)
  return loading ? <Loader /> : (
    <>
      <h3 className="sr-only">Reviews</h3>

      {reviews?.map((review, reviewIdx) => (
        <div key={review?.id} className="flex text-sm text-gray-500 space-x-4">
          <div className="flex-none py-10">
            <img src={review?.userId?.info?.photoUrl} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
          </div>
          <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
            <h3 className="font-medium text-gray-900">{review?.userId?.info?.fullName}</h3>
            <p>
              <time dateTime={review?.datetime}>{review?.date}</time>
            </p>

            <div className="flex items-center mt-4">
              {[0, 1, 2, 3, 4]?.map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    review?.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">
              {review?.rating}
              {' '}
              out of 5 stars
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

export default ReviewsComponent
