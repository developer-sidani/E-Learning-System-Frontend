import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

const Details = ({ instructor }) => {
  const text = instructor.about
  const [showMore, setShowMore] = useState(false)
  return (
    <Tab.Panel as="dl" className="text-sm text-gray-500">
    <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">Title</dt>
      <dd className="mt-1 text-sm text-gray-900">{instructor.title}</dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">Email</dt>
      <dd className="mt-1 text-sm text-gray-900">{instructor.email}</dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">Reviews</dt>
      <dd className="mt-1 text-sm text-gray-900">{instructor.reviews}</dd>
    </div>
    <div className="sm:col-span-1">
      <dt className="text-sm font-medium text-gray-500">Students</dt>
      <dd className="mt-1 text-sm text-gray-900">{instructor.students}</dd>
    </div>
  <div className="sm:col-span-2">
    <dt className="text-sm font-medium text-gray-500">About</dt>
    <dd
      className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
    //   dangerouslySetInnerHTML={{ __html: instructor.about }}
    />
   {/* {instructor.about} */}
   <h6>
    {showMore ? text : `${text.substring(0, 400)}`}
    <button type="button" className="btn text-indigo-700" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button>

   </h6>

  </div>
</dl>
    </div>

    </Tab.Panel>
  )
}

export { Details }
