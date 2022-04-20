import React, { Fragment } from 'react'
import { Disclosure, Tab } from '@headlessui/react'
import ReactPlayer from 'react-player'
import { StarIcon } from '@heroicons/react/solid'
import { reviews } from '../get-course/data'
import AddQuestion from './add-question'
// import { sections } from './data'

// console.log(sections)

const sections = [
  // { name: 'Dashboard', href: '#', current: true },
  {
    name: 'Section 1',
    current: false,
    children: [
      { id: '1', name: 'Lecture 1', href: '#' },
      { name: 'Lecture 2', href: '#' },
      { name: 'Lecture 3', href: '#' },
      { name: 'Lecture 4', href: '#' },
    ],
  },
  {
    name: 'Section 2',
    current: false,
    children: [
      { name: 'Lecture 1', href: '#' },
      { name: 'Lecture 2', href: '#' },
      { name: 'Lecture 3', href: '#' },
      { name: 'Lecture 4', href: '#' },
    ],
  },
  {
    name: 'Section 3',
    current: false,
    children: [
      { name: 'Lecture 1', href: '#' },
      { name: 'Lecture 2', href: '#' },
      { name: 'Lecture 3', href: '#' },
      { name: 'Lecture 4', href: '#' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PurchasedCourse = () => (
  <div>
    <div className="flex flex-row flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
      <div className="flex flex-col bg-slate-200 w-1/3">
        <div className="flex items-center flex-shrink-0 px-4">
          {/* <img */}
          {/*  className="h-8 w-auto" */}
          {/*  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" */}
          {/*  alt="Workflow" */}
          {/* /> */}
          <p className="text-primary font-bold italic text-xl">Course Name</p>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
            {sections.map((item) => !item.children ? (
              <div key={item.name}>
                <a
                  // href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md',
                  )}
                >
                  {/* {item.name} */}
                  Course Name
                </a>
              </div>
            ) : (
              <Disclosure as="div" key={item.name} className="space-y-1">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500',
                      )}
                    >
                      <svg
                        className={classNames(
                          open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                          'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                        )}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                      </svg>
                      {item.name}
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-1">
                      {item.children.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as="a"
                          onClick={console.log(subItem.id)}
                          // href={subItem.href}
                          className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mb-10">
          <p className="text-base text-primary font-bold text-xl my-10">Lecture Title</p>
          <div className=" mx-[20%]">
            <ReactPlayer
              // className="relative top-0 left-0"
              controls
              config={{ file: { attributes: { controlsList: 'download' /* controlsList: 'nodownload' || 'download' */ } } }}
              url="https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/lectures%2Fvideoplayback%20(1).mp4?alt=media&token=792ffaf3-6a22-4730-940b-7598005ae636"
            />
          </div>

        </div>
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
                Questions and Answers
              </Tab>
              <Tab
                className={({ selected }) => classNames(
                  selected
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                  'whitespace-nowrap py-6 border-b-2 font-medium text-sm',
                )}
              >
                Course Overview
              </Tab>

            </Tab.List>
          </div>
          <Tab.Panels as={Fragment}>
            <Tab.Panel className="pt-10">
              <div className="mb-10 px-10">
                <h3 className="sr-only">Reviews</h3>

                {reviews.featured.map((review, reviewIdx) => (
                  <div key={review.id} className="flex text-sm text-gray-500 space-x-4">
                    <div className="flex-none py-10">
                      <img src={review.avatarSrc} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                    </div>
                    <div className={classNames(reviewIdx === 0 ? '' : 'border-y border-gray-200', 'flex-1 py-10')}>
                      <h3 className="font-medium text-gray-900">{review.author}</h3>
                      <p>
                        <time dateTime={review.datetime}>{review.date}</time>
                      </p>

                      <div
                        className="mt-4 prose prose-sm max-w-none text-gray-500"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  </div>
                ))}
                <AddQuestion />
              </div>
            </Tab.Panel>
            <Tab.Panel className="pt-10">
              <div className="mb-10 px-10">
                <h3 className="sr-only">Reviews</h3>

                {reviews.featured.map((review, reviewIdx) => (
                  <div key={review.id} className="flex text-sm text-gray-500 space-x-4">
                    <div className="flex-none py-10">
                      <img src={review.avatarSrc} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                    </div>
                    <div className={classNames(reviewIdx === 0 ? '' : 'border-y border-gray-200', 'flex-1 py-10')}>
                      <h3 className="font-medium text-gray-900">{review.author}</h3>
                      <p>
                        <time dateTime={review.datetime}>{review.date}</time>
                      </p>

                      <div
                        className="mt-4 prose prose-sm max-w-none text-gray-500"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  </div>
                ))}
                <AddQuestion />
              </div>
            </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>
        {/* <div> */}
        {/*  <p className="text-base text-primary font-bold text-xl my-10">Questions and Answers</p> */}

        {/* </div> */}
      </div>
    </div>
  </div>
)

export default PurchasedCourse
