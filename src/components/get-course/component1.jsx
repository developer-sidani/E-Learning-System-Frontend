import React, { Fragment, useState } from 'react'

import {
  Dialog, Popover, Tab, Transition,
  Combobox,
} from '@headlessui/react'
import {
  MenuIcon, SearchIcon, ShoppingBagIcon, XIcon,
} from '@heroicons/react/outline'
import {
  StarIcon, ArrowLeftIcon, ChevronRightIcon, BeakerIcon,
} from '@heroicons/react/solid'
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel'

import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { MainCourseComponent, PageHeader, CourseLoading } from '..'
import { Sections } from './sections'
import {
  course, instructor, product, reviews, CourseContent, courseOutcomes,
} from './data'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Component1 = () => {
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.up('sm'))
  const [open, setOpen] = useState(false)

  return (
        <div className="bg-white">

          <main className="mx-auto pt-14 pb-24 px-4 sm:pt-16 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* Product */}
            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
              {/* Product image */}
              <div className="lg:row-end-1 lg:col-span-4">
                <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                  <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                </div>
              </div>

              {/* Product details */}
              <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                <div className="flex flex-col-reverse">
                  <div className="mt-4">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>

                    <h2 id="information-heading" className="sr-only">
                      Product information
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

                <p className="text-gray-500 mt-6">{product.description}</p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  <button
                    type="button"
                    className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                  >
                    Add to Cart
                  </button>

                </div>

                      <div key={instructor.id} className="flex-col text-sm text-gray-500 ">
                          <div className="border-t border-gray-200 flex-1 pt-12">
                            <h2 className="text-xl font-medium text-gray-900">{instructor.fullName}</h2>
                          </div>
                          <div className="flex flex-row py-2">

                          <div w-auto>
                            <img src={instructor.photoURL} alt="" className="w-24 h-24 bg-gray-100 rounded-full" />
                          </div>

                              <div className="mx-8 flex flex-col text-base">

                                <div className="flex flex-row">
                                <BeakerIcon className="h-5 w-5 text-blue-500" />
                                { instructor.rating }
                                        {' '}
                                Instructor Rating
                                </div>

                                <div className="flex flex-row">
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                          { instructor.reviews }
                                  {' '}
                                  Reviews
                                </div>

                                <div className="flex flex-row">
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                        { instructor.students }
                                {' '}
                                Students
                                </div>

                                <div className="flex flex-row">
                        <BeakerIcon className="h-5 w-5 text-blue-500" />
                        { instructor.courses }
                                {' '}
                                Courses
                                </div>

                              </div>

                          </div>

                          <div className="flex-none py-2">
                            <p>{instructor.bio}</p>
                          </div>

                      </div>

                <div className="border-t border-gray-200 mt-10 pt-10">
                  <h3 className="text-sm font-medium text-gray-900">Course Requirements</h3>
                  <div className="mt-4 prose prose-sm text-gray-500">
                    <ul role="list">
                      {product.requiremnets.map((requiremnet) => (
                        <li key={requiremnet}>{requiremnet}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-10 pt-10">
                  <h3 className="text-sm font-medium text-gray-900">Course Outcomes</h3>
                  <p className="mt-4 text-sm text-gray-500">
                    {courseOutcomes.summary}
{' '}
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
                        What you will learn
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>

                    {/* Course content */}
                    <Tab.Panel as="dl" className="text-sm text-gray-500">
                      {/* <h3 className="sr-only">Frequently Asked Questions</h3>

                      {CourseContent.map((CourseContent) => (
                        <Fragment key={CourseContent.question}>
                          <dt className="mt-10 font-medium text-gray-900">{CourseContent.question}</dt>
                          <dd className="mt-2 prose prose-sm max-w-none text-gray-500">
                            <p>{CourseContent.answer}</p>
                          </dd>
                        </Fragment>
                      ))} */}
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
                        dangerouslySetInnerHTML={{ __html: courseOutcomes.content }}
                      />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>

            {/* Related products */}
            <div className="flex items-center justify-between space-x-4 mt-28">
                <h2 className="text-lg font-medium text-gray-900">Frequently Bought Together</h2>
                <a href="#" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all
<span aria-hidden="true"> &rarr;</span>
                </a>
            </div>

      <CarouselProvider id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel" naturalSlideWidth={50} isIntrinsicHeight totalSlides={5} visibleSlides={mobileDevice ? 3 : 1} step={mobileDevice ? 3 : 1}>
      <ButtonBack
        className="mr-2 carousel-control-next absolute top-1/2 bottom-1/2 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-2 z-50"
        type="button"
      >
        <svg className="text-white w-10 h-10 bg-primary rounded-full p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <ArrowLeftIcon />
        </svg>
      </ButtonBack>
      <Slider className="p-3 my-2">
        <Slide index={0} tabIndex="null">
          <MainCourseComponent course={course} />
        </Slide>
        <Slide index={1} tabIndex="null">
          <MainCourseComponent course={course} />
        </Slide>
        <Slide index={2} tabIndex="null">
          <MainCourseComponent course={course} />
        </Slide>
        <Slide index={3} tabIndex="null">
          <MainCourseComponent course={course} />
        </Slide>
        <Slide index={4} tabIndex="null">
          <CourseLoading />
        </Slide>
      </Slider>
      <ButtonNext
        className="mr-2 carousel-control-next absolute top-1/2 bottom-1/2 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-2 z-50"
        type="button"
      >
        <svg className="text-white w-10 h-10 bg-primary rounded-full p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </ButtonNext>
      </CarouselProvider>

            {/* <div className="max-w-2xl mx-auto mt-24 sm:mt-32 lg:max-w-none">
              <div className="flex items-center justify-between space-x-4">
                <h2 className="text-lg font-medium text-gray-900">Students also bought</h2>
                <a href="#" className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="relative group">
                    <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                      <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                      <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                        <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                          View Product
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
                      <h3>
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p>{product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </main>

        </div>

  )
}

export { Component1 }
