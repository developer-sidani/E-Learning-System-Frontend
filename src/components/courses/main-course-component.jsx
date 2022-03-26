import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { OnHoverComponent } from '../index'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const MainCourseComponent = ({ course, loading }) => (
  <OnHoverComponent onHover={<h1>Hello</h1>}>
    <div className="my-6 mx-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
      <div key={course._id} className="group">
        <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
          <img src={course.image_480x270} alt="course" className="w-full h-full object-center object-cover group-hover:opacity-80" />
          {/* <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true"> */}
          {/*   <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center"> */}
          {/*     View Course */}
          {/*   </div> */}
          {/* </div> */}
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
          <div className="mt-3 flex flex-col items-start">
            <h3>
              <a href="#">
                <span aria-hidden="true" className="inset-0" />
                {course.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-700">{course.instructor.toUpperCase()}</p>
          </div>
          <p>{`$${course.price}`}</p>
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
          <p className="mt-1 text-xs text-gray-500">{course.category}</p>
          <p className="sr-only">
            {`${course.rating} out of 5 stars`}
          </p>
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
  </OnHoverComponent>
)

export default MainCourseComponent
