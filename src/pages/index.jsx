import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import {
  PageHeader, MainBanner, TopCategoriesComponent, CallToActionComponent, IncentivesComponent,
} from '../components'
import { MainLayout } from '../layouts'
import CoursesByCategory from '../components/home/modules/courses-by-category'
import RecommendedCourses from '../components/home/modules/recommended-courses'
import PersonalizedSearchCourses from '../components/home/modules/personalized-search-courses'
import TrendingCourses from '../components/home/modules/trending-courses'
import StudentsAreViewingCourses from '../components/home/modules/students-are-viewing-courses'
import AlsoBoughtCourses from '../components/home/modules/also-bought-courses'

const topCategories = [
  {
    id: '623e622e079cc03328b019d6',
    title: 'Development',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg 2x',
    route: '/categories/623e622e079cc03328b019d6',
  },
  {
    id: '623e646d079cc03328b019de',
    title: 'Personal Development',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg 2x',
    route: '/categories/623e646d079cc03328b019de',
  },
  {
    id: '623e648a079cc03328b019e4',
    title: 'Design',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg 2x',
    route: '/categories/623e648a079cc03328b019e4',
  },
  {
    id: '623e6448079cc03328b019db',
    title: 'Business',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg 2x',
    route: '/categories/623e6448079cc03328b019db',
  },
  {
    id: '623e647b079cc03328b019e1',
    title: 'IT & Software',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg 2x',
    route: '/categories/623e647b079cc03328b019e1',
  },
  {
    id: '623e649a079cc03328b019e8',
    title: 'Photography & Video',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-photography-2x-v2.jpg 2x',
    route: '/categories/623e649a079cc03328b019e8',
  },
]
const Home = () => {
  const profile = useSelector(({ profile }) => profile)
  const router = useRouter()
  // eslint-disable-next-line react/no-unstable-nested-components
  const IsLoggedIn = ({ children }) => profile?.token ? (
  // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
          {children}
      </>
  ) : null
  // eslint-disable-next-line react/no-unstable-nested-components
  const IsGuest = ({ children }) => profile?.token ? null : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  )

  return (
    <>
      <PageHeader
        title="Learn+"
      />
      <MainBanner />
      <div className="px-[7%]">
      <div className="ml-2 mt-5 px-5">
        <p className="text-3xl font-serif">
          A broad selection of courses
        </p>
        <p className="mt-2 text-l font-serif">
          Choose from 1,126 online video courses with new additions published every month
        </p>
      </div>
      <CoursesByCategory categories={topCategories} />

      </div>
      <IsLoggedIn>
        <div className="bg-white py-2">
          <div className="relative bg-gray-900">
            {/* Decorative image and overlay */}
            <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

            <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">Enrolled Courses</h1>
              <p className="mt-4 text-xl text-white">
                View the courses that you are already enrolled in
              </p>
              <button
                type="button"
                onClick={() => router.push('/my-courses')}
                className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Show More
              </button>
            </div>
          </div>
        </div>
        <div className="px-[7%]">
        <RecommendedCourses />
        </div>
      </IsLoggedIn>
      <div className="px-[7%]">

      <div className="ml-2 my-3 px-5">
        <p className="text-3xl font-serif">
          Top Categories
        </p>
        <TopCategoriesComponent categories={topCategories} />
      </div>
      <IsLoggedIn>
        <PersonalizedSearchCourses />
        <TrendingCourses />
      </IsLoggedIn>
        <IsGuest>
          <StudentsAreViewingCourses />
        </IsGuest>
      </div>

      <CallToActionComponent />
      <IsLoggedIn>
        <div className="px-[7%]">
        <AlsoBoughtCourses />
        </div>
      </IsLoggedIn>
      <IncentivesComponent />
    </>
  )
}
Home.getLayout = (page) => (
  <MainLayout>
        {page}
  </MainLayout>
)
export default Home
