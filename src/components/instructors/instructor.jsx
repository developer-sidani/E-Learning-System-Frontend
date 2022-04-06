import React, { Fragment, useState } from 'react'

import { Dialog, Transition, Tab } from '@headlessui/react'
import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  ChevronLeftIcon, FilterIcon, MailIcon, PhoneIcon, SearchIcon, GlobeAltIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import {
  user, tabs, profile, team,
} from './data'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const course = {
  _id: '621d2f5bbe6a14d70ae04c59',
  title: 'Intro to web',
  image_125_H: 'https://img-c.udemycdn.com/course/125_H/1331946_ed41_4.jpg',
  image_240x135: 'https://img-c.udemycdn.com/course/240x135/1331946_ed41_4.jpg',
  image_480x270: 'https://img-c.udemycdn.com/course/480x270/1331946_ed41_4.jpg',
  headline: 'Beginners, Zero to Hero. AWS EC2 web server, NodeJS Server, AWS RDS database server, S3, SES & CloudWatch.',
  instructor: 'test test',
  price: 49.99,
  currency: '$',
  rating: '4.0',
  updatedAt: new Date(),
  bestSeller: false,
  category: 'Web Development',
  flag: 'Bestseller',
  section: [
    {
      name: 'Intro to Course and Python',
      items: [
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    {
      name: 'Setup',
      items: [
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
      ],
    },
    {
      name: 'Learning Numpy',
      items: [
        'Multiple strap configurations',
      ],
    },
    {
      name: 'Intro to Pandas',
      items: [
        'Double stitched construction',
        'Water-resistant',
      ],
    },
  ],
}

const instructor = {
  id: 123,
  fullName: 'Avinash Jain',
  photoURL: 'https://img-b.udemycdn.com/user/200_H/10260436_946b_6.jpg',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  rating: 4.3,
  reviews: 123,
  students: 80000,
  courses: 14,
}

const product = {
  name: 'Course Name',
  description:
          '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  requiremnets: [
    'Lorem ipsum dolor sit amet',
    'Ut his wisi aliquando',
    'Mel no corpora inciderint',
  ],
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg',
  imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
}
const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
              <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
            `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
              'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
              <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
            `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },

  ],
}
const CourseContent = [
  {
    question: 'Lorem ipsum dolor sit amet',
    answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet',
    answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

const courseOutcomes = {
  href: '#',
  summary:
          'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
  content: `
          <h4>Overview</h4>
          
          <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
          
          <ul role="list">
          <li>You're allowed to use the icons in unlimited projects.</li>
          <li>Attribution is not required to use the icons.</li>
          </ul>
          
          <h4>What you can do with it</h4>
          
          <ul role="list">
          <li>Use them freely in your personal and professional work.</li>
          <li>Make them your own. Change the colors to suit your project or brand.</li>
          </ul>
          
          <h4>What you can't do with it</h4>
          
          <ul role="list">
          <li>Don't be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
          <li>Don't be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
          </ul>
        `,
}
const relatedProducts = [
  {
    id: 1,
    name: 'Fusion',
    category: 'UI Kit',
    href: '#',
    price: '$49',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
    imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
  },
  // More products...
]

const InstructorComponent = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
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
            {/* Breadcrumb */}
            {/* <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
              <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Directory</span>
              </a>
            </nav> */}

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
              {/* Team member list */}
              {/* <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
                <h2 className="text-sm font-medium text-gray-500">Team members</h2>
                <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {team.map((person) => (
                    <div
                      key={person.handle}
                      className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                    >
                      <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <a href="#" className="focus:outline-none">
                          <span className="absolute inset-0" aria-hidden="true" />
                          <p className="text-sm font-medium text-gray-900">{person.name}</p>
                          <p className="text-sm text-gray-500 truncate">{person.role}</p>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </article>
          </main>

        </div>
    </div>

    </>
  )
}

export default InstructorComponent
