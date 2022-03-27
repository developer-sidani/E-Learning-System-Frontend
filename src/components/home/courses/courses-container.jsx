import React from 'react'
import { useRouter } from 'next/router'
// eslint-disable-next-line import/no-cycle
import { CoursesSlider } from './index'

const CoursesContainer = ({
  title,
  description,
  courses,
  loading,
  route,
}) => {
  const router = useRouter()
  return (
    <div className="rounded-lg shadow-lg bg-white mx-1 my-3">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-extrabold text-gray-900">{title?.toUpperCase()}</h3>
      </div>
      <div className="px-4 py-5 mx-2">
        <p className="text-l font-serif text-clip">{description}</p>
        <button
          onClick={() => router.push(route)}
          type="button"
          className="my-3 flex items-center justify-center px-4 py-3 border border-gray-500 text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
        >
          Explore More
        </button>
      </div>
      <CoursesSlider courses={courses} loading={loading} />
    </div>
  )
}

export default CoursesContainer
