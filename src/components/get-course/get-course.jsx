import React, {
  Fragment, useCallback, useEffect, useState,
} from 'react'
import { Tab } from '@headlessui/react'
import {
  StarIcon, LockOpenIcon, VideoCameraIcon, AcademicCapIcon, DeviceMobileIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
import { Sections } from './sections'
// eslint-disable-next-line import/no-cycle
import { InstructorComponent, AddReview } from '.'
import ReviewsComponent from './reviews'
import {
  courseOutcomes, course,
} from './data'
import { CoursesContainer } from '../home'
import { addCart } from '../../slices/cart'
import { getCoursesForStudent } from '../../api'

function classNames(...classes) {
  return classes.filter(Boolean)
    .join(' ')
}

const GetCourseComponent = ({
  courseBelongsToCart,
  courseId,
  data,
}) => {
  const [courseExist, setCourseExist] = useState(false)
  const profile = useSelector(state => state.profile)
  const userId = profile?.user?.id
  const router = useRouter()
  const dispatch = useDispatch()
  const getCoursesForStudentCallback = useCallback(async (user) => {
    try {
      const response = await getCoursesForStudent(user, 1000, 1)
      return response.courses?.filter(({ id }) => id === courseId)?.length > 0
    } catch (e) {
      console.error(e)
    }
  }, [courseId])
  useEffect(() => {
    if (userId) {
      getCoursesForStudentCallback(userId)
        .then(r => {
          setCourseExist(r)
        })
    }
  }, [getCoursesForStudentCallback, userId])
  return (
    <div className="bg-white">

      <main className="mx-auto pt-14 pb-24 px-4 sm:pt-16 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Course */}
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Course Video */}
          <div className="lg:row-end-1 lg:col-span-4">
            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
              {/* <img src={course.imageSrc} alt={course.imageAlt} className="object-center object-cover" /> */}
              <ReactPlayer
                width="inherit"
                height="inherit"
                controls
                config={{ file: { attributes: { controlsList: 'download' } } }}
                // url="https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/lectures%2Fvideoplayback%20(1).mp4?alt=media&token=792ffaf3-6a22-4730-940b-7598005ae636"
                url={course.videoSrc}
              />
            </div>
          </div>

          {/* course details */}
          <div
            className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3"
          >
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{data?.title}</h1>

                <h2 id="information-heading" className="sr-only">
                  Course information
                </h2>
                <p className="text-sm text-gray-500 mt-2" />
              </div>

              <div>
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        data?.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">
                  {data?.rating}
                  {' '}
                  out of 5 stars
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-6">{data?.description}</p>
            <p className="text-md my-4 text-gray-600">{`Level: ${data?.levelId?.title}`}</p>
            <p className="text-md text-gray-600">{`${data?.price}`}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 mb-2">
              {courseExist ? (
                <button
                  onClick={() => router.push(`/my-courses/${courseId}`)}
                  type="button"
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  Go To Course
                </button>
              ) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {courseBelongsToCart ? (
                    <button
                      onClick={() => router.push('/cart')}
                      type="button"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      View Cart
                    </button>
                  ) : (
                    /* TODO fix add cart */
                    <button
                      onClick={() => dispatch(addCart(course))}
                      type="button"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Add to Cart
                    </button>
                  )}
                </>
              )}

            </div>
            {/* get-user */}
            <InstructorComponent instructor={data?.instructorId?.info} />
            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Course Requirements</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  {data?.requirements?.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <div className="border-t border-gray-200 mt-10 pt-10"> */}
            {/*  <h3 className="text-sm font-medium text-gray-900">Course Outcomes</h3> */}
            {/*  <p className="mt-4 text-sm text-gray-500"> */}
            {/*    {courseOutcomes.summary} */}
            {/*    <a href={courseOutcomes.href} className="font-medium text-indigo-600 hover:text-indigo-500"> */}
            {/*      Read full course outcomes */}
            {/*    </a> */}
            {/*  </p> */}
            {/* </div> */}

          </div>

          <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">

            {/* <Sections /> */}
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex flex-col space-x-0 sm:space-x-8 sm:flex sm:flex-row">

                  <Tab
                    className={({ selected }) => classNames(
                      selected
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                    )}
                  >
                    Course Content
                  </Tab>
                  <Tab
                    className={({ selected }) => classNames(
                      selected
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                    )}
                  >
                    Student Reviews
                  </Tab>
                  <Tab
                    className={({ selected }) => classNames(
                      selected
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                    )}
                  >
                    Learning Outcomes
                  </Tab>
                  <Tab
                    className={({ selected }) => classNames(
                      selected
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                      'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                    )}
                  >
                    This Course Includes
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>

                {/* Course content */}
                <Tab.Panel as="dl" className="text-sm text-gray-500">

                  <Sections courseId={data?.id} />
                </Tab.Panel>
                <Tab.Panel className="-mb-10">
                  <ReviewsComponent courseId={courseId} />
                  <AddReview courseId={courseId} />

                </Tab.Panel>

                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">learningOutcomes</h3>

                  <div
                    className="prose prose-sm max-w-none text-gray-500"
                    // eslint-disable-next-line react/no-danger
                    // dangerouslySetInnerHTML={{ __html: courseOutcomes.content }}
                  >
                    <div className="mt-4 prose prose-sm text-gray-500">
                      <ul role="list">
                        {data?.learningOutcomes?.map((requirement) => (
                          <li key={requirement}>{requirement}</li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </Tab.Panel>
                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">courseOutcomes</h3>

                  <div
                    className="prose prose-sm max-w-none text-gray-500"
                  >
                    <div className=" flex flex-col text-base">

                      <div className="flex flex-row mb-3">
                        <VideoCameraIcon className="h-5 w-5 text-black-500 mr-10" />
                        {data?.duration}
                        {' '}
                        hours on-demand video
                      </div>

                      <div className="flex flex-row my-3 ">
                        <LockOpenIcon className="h-5 w-5 text-black-500 mr-10" />
                        Full lifetime access
                      </div>

                      <div className="flex flex-row my-3 ">
                        <DeviceMobileIcon className="h-5 w-5 text-black-500 mr-10" />
                        Access on mobile and TV
                      </div>

                      <div className="flex flex-row my-3 ">
                        <AcademicCapIcon className="h-5 w-5 text-black-500 mr-10" />
                        Certification of completion
                      </div>
                    </div>

                  </div>

                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>

        {/* Related courses */}
        <div className="flex items-center justify-between space-x-4 mt-28">
          <h2 className="text-lg font-medium text-gray-900">Frequently Bought Together</h2>
          <a href="#" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View all
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        {/* TODO add courses slider  */}
        <CoursesContainer courses={[]} loading />

      </main>

    </div>
  )
}

export default GetCourseComponent
