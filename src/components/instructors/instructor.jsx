import React, { Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'

import { MailIcon, GlobeAltIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { profile } from './data'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const InstructorComponent = () => {
  const [showMore, setShowMore] = useState(false)
  const text = profile.about
  const router = useRouter()
  return (
    <>
    {/*
      This example requires updating your template:
      ```
      <html class="h-full bg-white">
      <body class="h-full overflow-hidden">
      ```
    */}
    <div className="h-full flex">

        <div className="flex-1 relative z-0 mb-12 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">

            <article>
              {/* Profile header */}
              <div>
                <div>
                  <img className="h-32 w-full object-cover lg:h-48" src={profile.coverImageUrl} alt="" />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      <img
                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={profile.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
                      </div>
                      <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                        >
                          <MailIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Message</span>
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => router.push(`${profile.Website}`)}
                        >
                          <GlobeAltIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                          <span>Website</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">{profile.name}</h1>
                  </div>
                </div>
              </div>

              {/* Tabs */}

              <Tab.Group as="div">
              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    <Tab.List className="-mb-px flex space-x-8">

                        <Tab
                          className={({ selected }) => classNames(
                            selected
                              ? 'border-indigo-600 text-indigo-600'
                              : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                          )}
                        >
                        Profile
                        </Tab>

                            <Tab
                              className={({ selected }) => classNames(
                                selected
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                              )}
                            >
                            Courses
                            </Tab>

                    </Tab.List>
                    </nav>
                  </div>
                </div>
              </div>
                  <Tab.Panels as={Fragment}>

                    {/* Course content */}
                    <Tab.Panel as="dl" className="text-sm text-gray-500">
                    <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Title</dt>
                      <dd className="mt-1 text-sm text-gray-900">{profile.Title}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Email</dt>
                      <dd className="mt-1 text-sm text-gray-900">{profile.Email}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Reviews</dt>
                      <dd className="mt-1 text-sm text-gray-900">{profile.Reviews}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Students</dt>
                      <dd className="mt-1 text-sm text-gray-900">{profile.Students}</dd>
                    </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd
                      className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                    //   dangerouslySetInnerHTML={{ __html: profile.about }}
                    />
                   {/* {profile.about} */}
                   <h6>
                    {showMore ? text : `${text.substring(0, 400)}`}
                    <button type="button" className="btn text-indigo-700" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>

                   </h6>

                  </div>
                </dl>
                    </div>

                    </Tab.Panel>

                    {/* second tab */}
                    <Tab.Panel className="mb-10">
                      <h3 className="sr-only">Courses</h3>

                    </Tab.Panel>

                  </Tab.Panels>
              </Tab.Group>
            </article>
          </main>

        </div>
    </div>

    </>
  )
}

export default InstructorComponent
