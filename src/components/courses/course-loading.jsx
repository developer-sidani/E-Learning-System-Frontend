import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

const CourseLoading = () => (
  <div
    className="animate-pulse rounded-lg overflow-hidden shadow-lg group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 max-w-xs w-[270] sm:w-[160]"
  >
    <div
      className="w-full h-40 bg-slate-700 space-y-6"
    />
    <div className="p-2 w-full flex-1 space-y-6 py-1 my-2">
      <p className="h-3 w-1/2 bg-slate-700 rounded" />
      <p className="h-2 w-1/4 bg-slate-700 rounded" />
      <div className="flex items-center text-clip max-w-xs gap-3">
        <p className="h-2 w-1/12 bg-slate-700 rounded" />
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className="flex-shrink-0 h-5 w-5"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <p className="h-2 w-1/4 bg-slate-700 rounded" />
    </div>
  </div>

)

export default CourseLoading
