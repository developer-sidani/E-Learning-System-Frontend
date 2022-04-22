import React, { useCallback, useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { getSectionsWithLectures } from '../../../api'
// TODO delete this page
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const CourseSections = ({ courseId, setSelectedLecture }) => {
  const [selectedSection, setSelectedSection] = useState()
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const getSectionsForCourse = useCallback(async (courseId) => {
    try {
      return await getSectionsWithLectures(courseId)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])
  useEffect(() => {
    if (courseId) {
      getSectionsForCourse(courseId).then((r) => setSections(r.data))
    }
  }, [courseId])
  useEffect(() => {
    if (sections) {
      setSelectedSection(sections?.[0]?.id)
      setSelectedLecture(sections?.[0]?.lectures?.[0])
    }
    return () => {
      setSelectedSection(null)
    }
  }, [sections])
  console.log(sections)
  return (
    <div className="mt-5 flex-grow flex flex-col">
      <nav className="flex-1 px-2 space-y-1 bg-white" aria-label="Sidebar">
        {sections?.map((item, index) => !item?.lectures ? (
          <div key={index}>
            <button
              onClick={() => setSelectedSection(item?.id)}
              type="button"
              className={classNames(
                item?.id === selectedSection?.id
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group w-full flex items-center pl-7 pr-2 py-2 text-sm font-medium rounded-md',
              )}
            >
              {item?.title}
            </button>
          </div>
        ) : (
          <Disclosure as="div" key={item?.title} className="space-y-1">
            {() => (
              <>
                <Disclosure.Button
                  className={classNames(
                    item?.id === selectedSection?.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group w-full flex items-center pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500',
                  )}
                >
                  <svg
                    className={classNames(
                      item?.id === selectedSection?.id ? 'text-gray-400 rotate-90' : 'text-gray-300',
                      'mr-2 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150',
                    )}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                  </svg>
                  {item.title}
                </Disclosure.Button>
                <Disclosure.Panel className="space-y-1">
                  {item?.lectures?.map((lecture, lectureIndex) => (
                    <button
                      key={lectureIndex}
                      type="button"
                      onClick={() => setSelectedLecture(lecture)}
                      className="group w-full flex items-center pl-10 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      {lecture?.title}
                    </button>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </nav>
    </div>
  )
}

export default CourseSections
