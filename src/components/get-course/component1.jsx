import React, {
  Fragment, useCallback, useEffect, useState,
} from 'react'
import { Tab } from '@headlessui/react'
import {
  PencilAltIcon, StarIcon, LockOpenIcon, VideoCameraIcon, AcademicCapIcon, DeviceMobileIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
import { Sections } from './sections'
// eslint-disable-next-line import/no-cycle
import { InstructorComponent } from '.'
import {
  instructor, reviews, courseOutcomes, course,
} from './data'
import { CoursesContainer } from '../home'
import { addCart } from '../../slices/cart'
import { getCoursesForStudent } from '../../api'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Component1 = ({ courseBelongsToCart, courseId }) => {
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
      getCoursesForStudentCallback(userId).then(r => {
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
          <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{course.name}</h1>

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
                        reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">
                  {reviews.average}
                  {' '}
                  out of 5 stars
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-6">{course.description}</p>

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
                    <button
                      onClick={() => dispatch(addCart({
                        id: courseId,
                        title: 'Become a senior web developer',
                        image_125_H: 'https://img-c.udemycdn.com/course/125_H/1331946_ed41_4.jpg',
                        image_240x135: 'https://img-c.udemycdn.com/course/240x135/1331946_ed41_4.jpg',
                        image_480x270: 'https://img-c.udemycdn.com/course/480x270/1331946_ed41_4.jpg',
                        headline: 'Beginners, Zero to Hero. AWS EC2 web server, NodeJS Server, AWS RDS database server, S3, SES & CloudWatch.',
                        instructor: {
                          id: '123',
                          name: 'test test',
                        },
                        price: 49.99,
                        currency: '$',
                        rating: '4.0',
                        updatedAt: new Date(),
                        bestSeller: false,
                        category: 'Web Development',
                        flag: 'Bestseller',
                      }))}
                      type="button"
                      className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                    >
                      Add to Cart
                    </button>
                  )}
                </>
              )}

            </div>
            {/* instructor */}
            <InstructorComponent instructor={instructor} />
            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Course Requirements</h3>
              <div className="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  {course.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Course Outcomes</h3>
              <p className="mt-4 text-sm text-gray-500">
                {courseOutcomes.summary}
                <a href={courseOutcomes.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Read full course outcomes
                </a>
              </p>
            </div>

          </div>

          <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">

            {/* <Sections /> */}
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8">

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
                    What You Will Learn
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

                  <Sections />
                </Tab.Panel>
                <Tab.Panel className="-mb-10">
                  <h3 className="sr-only">Reviews</h3>

                  {reviews.featured.map((review, reviewIdx) => (
                    <div key={review.id} className="flex text-sm text-gray-500 space-x-4">
                      <div className="flex-none py-10">
                        <img src={review.avatarSrc} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                      </div>
                      <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                        <h3 className="font-medium text-gray-900">{review.author}</h3>
                        <p>
                          <time dateTime={review.datetime}>{review.date}</time>
                        </p>

                        <div className="flex items-center mt-4">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0',
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {review.rating}
                          {' '}
                          out of 5 stars
                        </p>

                        <div
                          className="mt-4 prose prose-sm max-w-none text-gray-500"
                          // eslint-disable-next-line react/no-danger
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    </div>
                  ))}
                </Tab.Panel>

                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">courseOutcomes</h3>

                  <div
                    className="prose prose-sm max-w-none text-gray-500"
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: courseOutcomes.content }}
                  />
                </Tab.Panel>
                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">courseOutcomes</h3>

                  <div
                    className="prose prose-sm max-w-none text-gray-500"
                  >
                    <div className=" flex flex-col text-base">

                      <div className="flex flex-row mb-3">
                        <VideoCameraIcon className="h-5 w-5 text-black-500 mr-10" />
                        { course?.duration }
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

export default Component1
