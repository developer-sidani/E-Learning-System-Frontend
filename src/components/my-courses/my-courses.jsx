import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/solid'
import { Box, LinearProgress, Typography } from '@mui/material'
import { Pagination } from '.'
import { instructor, course } from './data'
// import { Pagination } from '.'

const MyCoursesComponent = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
  // <Tab.Panels as={Fragment}>
  // <Tab.Panel className="mb-

    <div className="my-10">
      <h2 className="text-center mb-10  text-3xl font-extrabold text-[#0A033C] sm:text-4xl">My Courses</h2>

      {/* <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> */}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {course.map((course) => (
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
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1, color: '#0A003C' }}>
                  <LinearProgress variant="determinate" color="inherit" value={course?.progress} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.primary">
                    {`${Math.round(
                      course?.progress,
                    )}%`}
                  </Typography>
                </Box>
              </Box>
            </div>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default MyCoursesComponent
