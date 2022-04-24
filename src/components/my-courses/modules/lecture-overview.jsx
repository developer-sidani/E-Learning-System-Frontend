import React, { Fragment, useRef } from 'react'
import ReactPlayer from 'react-player'
import { Tab } from '@headlessui/react'
import moment from 'moment'
import { reviews } from '../../get-course/data'
import AddQuestion from '../add-question'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const LectureOverview = ({ selectedLecture }) => {
  const ref = useRef()
  const duration = selectedLecture?.duration
  ref.current?.seekTo(moment(duration, 'mm:ss').diff(moment().startOf('day'), 'seconds'))
  console.log(selectedLecture?.duration)
  return (
    <div className=" flex flex-col">
      <div className="mb-10">
        <p className="text-base text-primary font-bold text-xl my-10">{selectedLecture?.title}</p>
        <div className=" md:mx-[20%]">
          <ReactPlayer
            ref={ref}
            height="100%"
            width="100%"
            // className="relative top-0 left-0"
            controls
            config={{ file: { attributes: { controlsList: selectedLecture?.isDownloadable ? 'download' : 'nodownload' /* controlsList: 'nodownload' || 'download' */ } } }}
            url={selectedLecture?.videoUrl || 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/lectures%2Fvideoplayback%20(1).mp4?alt=media&token=792ffaf3-6a22-4730-940b-7598005ae636'}
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
            <div className="mb-10 ">
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
            <div className="mb-10 ">
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
  )
}

export default LectureOverview
