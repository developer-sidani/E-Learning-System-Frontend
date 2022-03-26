import React from 'react'
import Image from 'next/image'
import { StarIcon, ThumbUpIcon } from '@heroicons/react/solid'
import moment from 'moment'
import { OnHoverComponent } from '../index'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const MainCourseComponent = ({ course, loading }) => (
    <div
      className={loading ? 'animate-pulse p-2 pr-0 mr-0 group cursor-pointer transition duration-200 ease-in transform max-w-xs'
        : 'p-2 pr-0 mr-0 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 max-w-xs'}
    >
    <img
      src={course?.image_480x270}
      className={loading && 'animate-pulse'}
      height={480}
      width={270}
      alt="ok"
    />
    <div className="p-2">
        <h2 className="mt-1 text-l transition-all duration-100 ease-in-out font-bold group-hover:font-extrabold text-clip max-w-xs">
            {course?.title}
            {' - '}
            {course?.instructor}
        </h2>
         <p className="truncate max-w-md">
            {course?.headline}
         </p>
        <div className="flex items-center opacity-0 group-hover:opacity-100 text-clip max-w-xs">
            {moment(course?.updatedAt).format('yyyy-MM-DD')}
            {' • '}
            <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      course.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                      'flex-shrink-0 h-5 w-5',
                    )}
                    aria-hidden="true"
                  />
                ))}
            </div>
        </div>
    </div>
    </div>

)

export default MainCourseComponent
