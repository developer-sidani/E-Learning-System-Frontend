import React, {
  memo, useCallback, useEffect, useState,
} from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { Box, LinearProgress, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Tab } from '@headlessui/react'
import { Pagination } from './pagination'
import { getCoursesForStudent } from '../../api'

const Courses = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

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
  const router = useRouter()
  const [courses, setCourses] = useState([])
  const profile = useSelector(state => state.profile)
  const [loading, setLoading] = useState(false)
  const [paginationData, setPaginationData] = useState({})
  const userId = profile?.user?.id
  const getCoursesForStudentCallback = useCallback(async (page) => {
    await userId
    if (userId) {
      setLoading(true)
      try {
        const response = await getCoursesForStudent(userId, 10, page)
        setPaginationData(response?.data)
        setCourses(response?.courses)
        console.log(courses)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
  }, [userId])
  useEffect(() => {
    getCoursesForStudentCallback(1)
  }, [])

  return (
    <Tab.Panel className="mb-10">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">My Courses</h2>
          {loading ? (<Loader />) : (
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {courses?.map((course, index) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  key={index}
                  onClick={() => router.push(`/courses/${course?.id}`)}
                  className="rounded-lg overflow-hidden shadow-lg group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 max-w-xs w-[270] sm:w-[160]"
                >
                  <img
                    src={course?.image_480x270}
                    className="w-full"
                    alt="ok"
                  />
                  <div className={classNames('p-2 w-full', course?.flag?.length === 0 && 'mb-4')}>
                    <h2 className="text-md h-10 mb-2 transition-all duration-100 ease-in-out font-[500] group-hover:font-bold text-clip max-w-xs">
                      {course?.title}
                    </h2>
                    <p className="max-w-md font-extralight text-sm">
                      {course?.instructorId?.info?.fullName}
                    </p>
                    <div className="flex items-center text-clip max-w-xs gap-3">
                      {course?.rating !== -1
                        ? (
                          <p className="font-[500] text-sm">
                            {Math.round(course?.rating * 100) / 100}
                          </p>
                        )
                        : (
                          <p className="font-[500] text-sm">

                            N/A
                          </p>

                        )}
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
                      {course?.price}
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
              ))}
            </div>
          )}
          {!loading && (
            <Pagination
              paginationData={paginationData}
              getCoursesForStudentCallback={getCoursesForStudentCallback}
            />
          )}
        </div>

    </Tab.Panel>
  )
}

export { Courses }
