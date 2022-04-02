import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const MainCourseComponent = ({ course }) => (
    <div
      className="rounded-lg overflow-hidden shadow-lg group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 max-w-xs w-[270] sm:w-[160]"
    >
        <img
          src={course?.image_480x270}
          className="w-full"
          alt="ok"
        />
        <div className={classNames('p-2 w-full', course?.flag?.length === 0 && 'mb-4')}>
            <h2 className="text-md transition-all duration-100 ease-in-out font-[500] group-hover:font-bold text-clip max-w-xs">
                {course?.title}
            </h2>
             <p className="max-w-md font-extralight text-sm">
                 {course?.instructor}
             </p>
            <div className="flex items-center text-clip max-w-xs gap-3">
                <p className="font-[500] text-sm">
                  {course?.rating?.toString()}
                </p>
                <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          parseFloat(course?.rating) > rating ? 'text-yellow-400' : 'text-gray-200',
                          'flex-shrink-0 h-5 w-5',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                </div>
            </div>
            <p className="font-bold text-sm p-0">
                {`${course?.currency} ${course?.price}`}
            </p>
            {course?.flag?.length > 0 ? (
              <div className="w-1/4 bg-yellow-300 px-3 py-1 mt-1 object-contain">
                  <p
                    className="text-xs font-[500]"
                  >
                      {course?.flag}
                  </p>
              </div>
            ) : (
              <div className="px-3 py-1 mt-1"><p /></div>
            )}
        </div>
    </div>

)

export default MainCourseComponent
