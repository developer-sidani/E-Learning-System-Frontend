import React from 'react'
import {
  StarIcon, VideoCameraIcon, UserGroupIcon, PencilAltIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const InstructorComponent = ({ instructor }) => {
  const router = useRouter()
  console.log(instructor)
  return (
    <div key={instructor?.id} className="flex-col text-sm text-gray-500 ">
      <div className="border-t border-gray-200 flex-1 pt-12">
        <button
          type="button"
          onClick={() => router.push(`/instructors/${instructor?.id}`)}
        >
          <h2 className="text-xl font-medium text-gray-900 hover:text-secondary">{instructor?.info?.fullName}</h2>

        </button>
      </div>
      <div className="flex flex-row py-2">

        <div w-auto>
          <img src={instructor?.info?.photoUrl} alt="" className="w-24 h-24 bg-gray-100 rounded-full" />
        </div>

        <div className="mx-8 mt-4 flex flex-col text-base">

          {/* <div className="flex flex-row"> */}
          {/*  <StarIcon className="h-5 w-5 text-black-500 mr-2" /> */}
          {/*  {instructor?.rating} */}
          {/*  {' '} */}
          {/*  Instructor Rating */}
          {/* </div> */}

          <div className="flex flex-row">
            <PencilAltIcon className="h-5 w-5 text-black-500 mr-2" />
            {instructor?.instructorDetails?.reviewsCount}
            {' '}
            Reviews
          </div>

          <div className="flex flex-row">
            <UserGroupIcon className="h-5 w-5 text-black-500 mr-2" />
            {instructor?.instructorDetails?.studentsCount}
            {' '}
            Students
          </div>

          <div className="flex flex-row">
            <VideoCameraIcon className="h-5 w-5 text-black-500 mr-2" />
            {instructor?.instructorDetails?.coursesCount}
            {' '}
            Courses
          </div>

        </div>

      </div>

      <div className="flex-none py-2">
        <p>{instructor?.bio}</p>
      </div>

    </div>
  )
}

export { InstructorComponent }
