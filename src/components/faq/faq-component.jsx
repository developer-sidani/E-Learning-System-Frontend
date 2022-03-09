import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: 'What is Learn+ ?',
    answer:
      'Learn+ is a top quality, user-friendly e-learning platform that includes chatting systems between students and instructors, and it combines the university’s SIS and Moodle in Upskill where courses are viewed alongside assignments, grades, quizzes, and more',
  },
  {
    question: 'Who Can Benefit?',
    answer:
      '-Online programs can meet the needs of many types of students, depending on their educational and professional needs. Some examples of students who might benefit from e-learning programs include the following:  -On-campus students looking for scheduling flexibility -Off-campus students who do not live near a college or university -Adult students with family and/or work obligations -Working professionals seeking to boost or change their careers',
  },
  {
    question: 'How Do Online Programs Work?',
    answer:
      "Some programs are a combination of on-campus and online study, while other programs are offered totally online. Often students are allowed to create their own study schedules using class materials, such as taped lectures and slide show presentations, which are accessible 24-7 through an Internet-based portal. Through this platform, students can also find their assignments, upload homework, participate in class discussions and contact their instructors.In some instances, students may be required to log into class at the same time to attend events, such as live webcasts or online chat sessions. In addition, students usually have access to the school library's online databases, where they can view study materials, such as the online editions of academic journals and periodicals. Students in distance-learning programs may be required to complete exams under the supervision of a proctor. Communication between students and instructors can occur through a variety of media, including: -Video chats -Web conferencing -Instant messaging -Message boards -Discussion forums",
  },
  {
    question: 'What about in-person requirements?',
    answer:
      "Some online programs may integrate practical components. For instance, students in online programs that prepare them for jobs in the health industry may need to complete laboratory courses or clinical internships. Sometimes, these experiences can be set up in approved locations in the student's area. In these cases, students may need to keep a journal of their experience or a video record of their work to submit to their instructors for review. There are also online programs that require students to attend on-campus classes on weekends or complete one or more residency periods at the college.",
  },
  {
    question: 'How do I choose a program?',
    answer:
      "One of the major concerns surrounding the choice of an online education program is determining if the program offers a legitimate degree or college credits that are accepted by other schools, employers and institutions that provide student aid funding. Schools recognized by a national or regional accreditation agency offer programs that meet the same standards as a school's on-campus offerings. Most schools list their accreditation on their website, and the Council for Higher Education Accreditation maintains an accreditation directory. Also, the U.S. Department of Education has a database of accredited secondary and post secondary schools, as well as a list of accreditation agencies.",
  },
  {
    question: 'What Kind of Technology will i need?',
    answer:
      'Technology requirements vary according to the program, but schools generally require students to meet basic hardware and software requirements which typically include a computer with the following features: -Recent Windows, Mac or Linux operating system  -High-speed internet access  -Minimum RAM requirements  -Office software, such as word processing, spreadsheet and slide presentation programs  -Web camera  -Headset with microphone -CD/DVD drive',
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const FaqComponent = () => (
  <div className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-[#0A033C] sm:text-4xl">Frequently asked questions</h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  </div>
)

export { FaqComponent }
