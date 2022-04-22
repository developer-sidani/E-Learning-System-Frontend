import React, { useState } from 'react'
import { CourseSections, LectureOverview } from './modules'

// TODO delete this page

const PurchasedCourse = ({ course }) => {
  const [selectedLecture, setSelectedLecture] = useState()
  return (
    <div>
      <div className="flex flex-row flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
        <div className="flex flex-col bg-slate-200 w-1/3">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src={course?.image_125_H}
              alt="Workflow"
            />
            <p className="text-primary font-bold italic text-xl text-clip">{course?.title}</p>
          </div>
          <CourseSections courseId={course?.id} setSelectedLecture={setSelectedLecture} />
        </div>
        <LectureOverview selectedLecture={selectedLecture} />
      </div>
    </div>
  )
}

export default PurchasedCourse
