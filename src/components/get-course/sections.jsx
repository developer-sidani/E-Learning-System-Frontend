import React, {
  Fragment, memo, useCallback, useEffect, useState,
} from 'react'

import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline'
import { course } from './data'
import { getSectionsWithLectures } from '../../api'

function classNames(...classes) {
  return classes.filter(Boolean)
    .join(' ')
}

const Sections = ({ courseId }) => {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)

  const Loader = memo(() => {
    const circleCommonClasses = 'h-5 w-5 bg-primary rounded-full'

    return (
      <div className="flex h-96">
        <div className="m-auto flex">
          <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
          <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
          <div className={`${circleCommonClasses} animate-bounce400`} />
        </div>
      </div>
    )
  })

  const sectionsLecturesCallBack = useCallback(async (courseId) => {
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
      sectionsLecturesCallBack(courseId).then((r) => setSections(r.data))
    }
  }, [courseId])

  return loading ? <Loader /> : (

    <div className="border-t divide-y divide-gray-200">
      {sections?.map((detail, index) => (
        <Disclosure as="div" key={index}>
          {({ open }) => (
            <>
              <h3>
                <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                <span
                  className={classNames(
                    open ? 'text-indigo-600' : 'text-gray-900',
                    'text-sm font-medium',
                  )}
                >
                  {detail?.title}
                </span>
                  <span className="ml-6 flex items-center">
                  {open ? (
                    <MinusSmIcon
                      className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <PlusSmIcon
                      className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel as="div" className="pb-6 prose prose-sm">
                <ul role="list">
                  {detail?.lectures?.map((item) => (
                    <li key={item?.id}>{item?.title}</li>
                  ))}
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}

export { Sections }
