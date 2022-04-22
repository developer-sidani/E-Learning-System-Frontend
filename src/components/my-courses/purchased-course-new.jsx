import React, { Fragment, useState } from 'react'

import {
  Dialog, Transition,
} from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { VideoCameraIcon } from '@heroicons/react/solid'
import { CourseSections, LectureOverview } from './modules'
import MobileCourseSections from './modules/mobile-course-sections'
import DesktopCourseSections from './modules/desktop-course-sections'

const PurchasedCourseNew = ({ course }) => {
  const [selectedLecture, setSelectedLecture] = useState()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <div className="bg-white">

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto"
              >
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Sections</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}

                <MobileCourseSections setMobileFiltersOpen={setMobileFiltersOpen} courseId={course?.id} setSelectedLecture={setSelectedLecture} />

              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{course?.title}</h1>

            <div className="flex items-center">

              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Sections</span>
                <VideoCameraIcon className="w-8 h-8" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Filters */}

              <DesktopCourseSections courseId={course?.id} setSelectedLecture={setSelectedLecture} />

              <div className=" gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
              <LectureOverview selectedLecture={selectedLecture} />
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  )
}
export default PurchasedCourseNew
