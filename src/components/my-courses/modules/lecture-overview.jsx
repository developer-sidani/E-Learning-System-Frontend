import React, {
  Fragment, useCallback, useEffect, useMemo, useRef, useState,
} from 'react'
import ReactPlayer from 'react-player'
import { Tab } from '@headlessui/react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import {
  AcademicCapIcon,
  DeviceMobileIcon,
  LockOpenIcon,
  PencilAltIcon, StarIcon, UserGroupIcon, VideoCameraIcon,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { reviews } from '../../get-course/data'
import AddQuestion from '../add-question'
// eslint-disable-next-line import/no-cycle
import GetQuestions from '../get-questions'

import { setLastWatched } from '../../../api'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// const data = {
//
//   id: '6263e5c1ece06f001d01998e',
//   instructorId: {
//     id: '62597718224a1e001c46fb4f',
//     info: {
//       id: '62597718224a1e001c46fb4f',
//       fullName: 'Ahmad Sidani',
//       username: 'developersidani137',
//       email: 'developer.sidani@gmail.com',
//       password: '$2a$10$TDtwwBLZvdi8u/bXQJjSmOiTxIElX2TEyrhugjLctQJIp5nCBRNdq',
//       language: '621424ccf1545d230c4e8623',
//       phone: '+96176940820',
//       birthday: '2001-02-14T00:00:00.000Z',
//       country: 'Lebanon',
//       gender: 'male',
//       address: 'Mar Elias',
//       type: 'Instructor',
//       photoUrl: 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fusers%2Finstructors%2F7faaed1-482e-acec-817e-0dc1ed63c7-Photo%20-%20Ahmad%20Sidani.jpg?alt=media&token=1096b583-c180-49ca-ac7a-19c80061204d',
//       isNotified: false,
//       isVerified: true,
//       verifiedPhone: false,
//       keepMeUpdated: false,
//       isActive: true,
//     },
//     instructorDetails: {
//       biography: 'I am a Proffesional Photographer from Lebanon',
//       coursesIds: [],
//       requestStatus: 'Approved',
//       resume: 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/documents%2FHadiIbrahim_CV.pdf?alt=media&token=8eab1b6b-87c4-4349-80e1-c36098f55fa9',
//       salary: 1200,
//       coursesCount: 5,
//       reviewsCount: 2,
//       studentsCount: 3,
//     },
//   },
//   learningOutcomes: [
//     'Understand the goals, structures, and procedures',
//     'Learn basics of programming with a modern programming language, Java.',
//     'Learn and uses the basics of algorithm analysis, including big-O notation.',
//     'Learn and understand the array standard data structure. Know the standard interface for an Array.',
//     'learn and implement the Tree standard data structure.',
//   ],
//   title: 'Introduction to Java',
//   headline: 'Learn to program using the Java programming language',
//   image_125_H: 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fcourses%2F7c0ab4-4780-b0b-a5-8043ebff36a-JavaClass.jpeg?alt=media&token=17204888-607c-44be-8fef-e119544ef84a',
//   image_240x135: 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fcourses%2F7c0ab4-4780-b0b-a5-8043ebff36a-JavaClass.jpeg?alt=media&token=17204888-607c-44be-8fef-e119544ef84a',
//   image_480x270: 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/images%2Fcourses%2F7c0ab4-4780-b0b-a5-8043ebff36a-JavaClass.jpeg?alt=media&token=17204888-607c-44be-8fef-e119544ef84a',
//   topicId: {
//     id: '623e7a61e401c2065c11d853',
//     name: 'Programming Languages',
//     categoryId: '623e622e079cc03328b019d6',
//   },
//   levelId: {
//     id: '6242d903e0ee8338e835c144',
//     type: 'level',
//     title: 'Beginner',
//   },
//   language: {
//     id: '621424ccf1545d230c4e8623',
//     language: 'English',
//     slug: 'en',
//   },
//   requirements: [
//     'Requirement 1',
//     'Requirement 2',
//     'Requirement 3',
//   ],
//   is_paid: false,
//   price: 'Free',
//   description: 'Learn to program in the Java programming language. This course assumes no prior programming knowledge, just a desire to learn to program.',
//   duration: '00:30:20',
//   rating: 5,
//   previewVideoUrl: 'https://firebasestorage.googleapis.com/v0/b/learn-plus-fyp.appspot.com/o/lectures%2FIntroduction.webm?alt=media&token=4c5e8a85-01d0-4065-9782-484e92aacd8e',
//   isActive: true,
//   percentage: 0,
//
// }
const LectureOverview = ({ selectedLecture, data }) => {
  // console.log(selectedLecture)
  const router = useRouter()
  const profile = useSelector(({ profile }) => profile)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState('00:00')
  const ref = useRef()
  const duration = useMemo(() => selectedLecture?.timeWatched, [selectedLecture?.timeWatched])
  const setStudentLearningCallback = useCallback(async (lectureId, timeWatched, token) => {
    try {
      const response = await setLastWatched(lectureId, timeWatched, token)
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }, [])
  const updateTime = useCallback((time) => {
    ref.current?.seekTo(moment(time, 'mm:ss')
      .diff(moment()
        .startOf('day'), 'seconds'))
  }, [])
  useEffect(
    () => {
      if (isPaused && profile?.token && selectedLecture?.id) {
        setStudentLearningCallback(selectedLecture?.id, progress, profile?.token)
      }
    },
    [isPaused, progress, profile, selectedLecture],
  )
  useEffect(() => {
    if (duration) {
      updateTime(duration)
    }
  }, [duration])
  return (
    <div className=" flex flex-col">
      <div className="mb-10">
        <p className=" text-primary font-bold text-2xl my-10">{selectedLecture?.title}</p>
        <div className="w-full">
          <ReactPlayer
            playing={duration?.length > 0}
            ref={ref}
            height="100%"
            width="100%"
            onProgress={(progress) => {
              setIsPaused(false)
              setProgress(moment.utc(progress.playedSeconds * 1000).format('mm:ss'))
            }}
            onPause={() => setIsPaused(true)}
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
                <GetQuestions lectureId={selectedLecture?.id} />
              <AddQuestion lectureId={selectedLecture?.id} />
            </div>
          </Tab.Panel>
          <Tab.Panel className="pt-10">
            {/* <div className="mb-10 "> */}
            {/*  <h3 className="sr-only">Reviews</h3> */}

            {/*  {reviews.featured.map((review, reviewIdx) => ( */}
            {/*    <div key={review.id} className="flex text-sm text-gray-500 space-x-4"> */}
            {/*      <div className="flex-none py-10"> */}
            {/*        <img src={review.avatarSrc} alt="" className="w-10 h-10 bg-gray-100 rounded-full" /> */}
            {/*      </div> */}
            {/*      <div className={classNames(reviewIdx === 0 ? '' : 'border-y border-gray-200', 'flex-1 py-10')}> */}
            {/*        <h3 className="font-medium text-gray-900">{review.author}</h3> */}
            {/*        <p> */}
            {/*          <time dateTime={review.datetime}>{review.date}</time> */}
            {/*        </p> */}

            {/*        <div */}
            {/*          className="mt-4 prose prose-sm max-w-none text-gray-500" */}
            {/*          // eslint-disable-next-line react/no-danger */}
            {/*          dangerouslySetInnerHTML={{ __html: review.content }} */}
            {/*        /> */}
            {/*      </div> */}
            {/*    </div> */}
            {/*  ))} */}
            {/*  <AddQuestion /> */}
            {/* </div> */}
            {/* course details */}
            <div
              className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3"
            >
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{data?.title}</h1>

                  <h2 id="information-heading" className="sr-only">
                    Course information
                  </h2>
                  <p className="text-sm text-gray-500 mt-2" />
                </div>

                <div>
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating, index) => (
                      <StarIcon
                        key={index}
                        className={classNames(
                          data?.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                          'h-5 w-5 flex-shrink-0',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">
                    {data?.rating}
                    {' '}
                    out of 5 stars
                  </p>
                </div>
              </div>

              <p className="text-gray-500 mt-6">{data?.description}</p>
              <p className="text-md my-4 text-gray-600">{`Level: ${data?.levelId?.title}`}</p>
              <p className="text-md text-gray-600">{`${data?.price}`}</p>

            </div>
             <div key={data?.instructorId?.info?.id} className="flex-col text-sm text-gray-500 mx-auto">
              <div className="flex-1 pt-12">
                <button
                  type="button"
                  onClick={() => router.push(`/instructors/${data?.instructorId?.info?.id}`)}
                >
                  <h2 className="text-xl font-medium text-gray-900 hover:text-secondary">{ data?.instructorId?.info?.fullName}</h2>

                </button>
              </div>
              <div className="flex flex-row py-2">

                <div w-auto>
                  <img src={data?.instructorId?.info?.photoUrl} alt="" className="w-24 h-24 bg-gray-100 rounded-full" />
                </div>

                <div className="mx-8 mt-4 flex flex-col text-base">

                  <div className="flex flex-row">
                    <PencilAltIcon className="h-5 w-5 text-black-500 mr-2" />
                    { data?.instructorId?.instructorDetails?.reviewsCount}
                    {' '}
                    Reviews
                  </div>

                  <div className="flex flex-row">
                    <UserGroupIcon className="h-5 w-5 text-black-500 mr-2" />
                    { data?.instructorId?.instructorDetails?.studentsCount}
                    {' '}
                    Students
                  </div>

                  <div className="flex flex-row">
                    <VideoCameraIcon className="h-5 w-5 text-black-500 mr-2" />
                    { data?.instructorId?.instructorDetails?.coursesCount}
                    {' '}
                    Courses
                  </div>

                </div>

              </div>

              <div className="flex-none py-2">
                    { data?.instructorId?.instructorDetails?.biography}
              </div>

               {/* <div className="border-t border-gray-200 mt-10 pt-10"> */}
               {/*  <h3 className="text-base font-medium text-gray-900">Course Requirements</h3> */}
               {/*  <div className="mt-4 prose prose-sm text-gray-500"> */}
               {/*    <ul role="list"> */}
               {/*      {data?.requirements?.map((requirement, index) => ( */}
               {/*        <li key={index}>{requirement}</li> */}
               {/*      ))} */}
               {/*    </ul> */}
               {/*  </div> */}
               {/* </div> */}

               <div className=" flex flex-col mt-10 text-base">

                 <div className="flex flex-row mb-3">
                   <VideoCameraIcon className="h-5 w-5 text-black-500 mr-10" />
                   {data?.duration}
                   {' '}
                   hours on-demand video
                 </div>

                 <div className="flex flex-row my-3 ">
                   <LockOpenIcon className="h-5 w-5 text-black-500 mr-10" />
                   Full lifetime access
                 </div>

                 <div className="flex flex-row my-3 ">
                   <DeviceMobileIcon className="h-5 w-5 text-black-500 mr-10" />
                   Access on mobile and TV
                 </div>

                 <div className="flex flex-row my-3 ">
                   <AcademicCapIcon className="h-5 w-5 text-black-500 mr-10" />
                   Certification of completion
                 </div>
               </div>

             </div>

          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default LectureOverview
