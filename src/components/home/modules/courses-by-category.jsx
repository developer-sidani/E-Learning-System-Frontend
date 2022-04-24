import React, { useCallback, useEffect, useState } from 'react'
import { CoursesContainer } from '../courses'
import { getCoursesForCategory } from '../../../api'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// todo fetch courses for category and change text according to the category selection
const CoursesByCategory = ({ categories }) => {
  const [courses, setCourses] = useState()
  const [loading, setLoading] = useState(true)
  const fetchCoursesByCategory = useCallback(async (category) => {
    try {
      const response = await getCoursesForCategory(category, 1, 10)
      setCourses(response.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  const [selectedTab, setSelectedTab] = useState(categories[0])
  console.log(selectedTab)
  useEffect(() => {
    fetchCoursesByCategory(selectedTab.id)
  }, [selectedTab])
  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="border-2 border-black block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={selectedTab.title}
            onChange={(e) => setSelectedTab(e.target.value)}
          >
            {categories.map(({ id, title }) => (
              <option key={id}>{title}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 mx-3" aria-label="Tabs">
              {categories.map((x) => (
                <button
                  key={x.id}
                  onClick={() => setSelectedTab(x)}
                  type="button"
                  className={classNames(
                    x.id === selectedTab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                  )}
                  aria-current="page"
                >
                  {x.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <CoursesContainer
        courses={courses}
        loading={loading}
        route={selectedTab?.route}
        title={selectedTab?.name}
        description={selectedTab?.description}

        // title="Grow your software development skills with JavaScript"
        // description="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. "
      />
    </>
  )
}

export default CoursesByCategory
