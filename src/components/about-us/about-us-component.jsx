import React from 'react'
import hadiImage from '../../assets/Hadi-Ibrahim.jpeg'
import ahmadImage from '../../assets/Ahmad-Sidani.jpeg'
import aliImage from '../../assets/Ali-Yassine.jpeg'
import hasanImage from '../../assets/Hasan-Itani.jpeg'
import moeImage from '../../assets/Mohammad-Itani.jpeg'

const people = [
  {
    name: 'Ahmad Sidani',
    role: 'Full Stack Developer',
    imageUrl: ahmadImage.src,
    bio: 'One of my most productive days was throwing away 1000 lines of code.',
    linkedinUrl: 'https://www.linkedin.com/in/dev-sidani/',
  },
  {
    name: 'Ali Yassine',
    role: 'Software Engineer',
    imageUrl:
    aliImage.src,
    bio: 'Code never lies, comments sometimes do.',
    linkedinUrl: 'https://www.linkedin.com/in/yassine2k/',
  },
  {
    name: 'Hadi Ibrahim',
    role: 'Full Stack Developer',
    imageUrl:
    hadiImage.src,
    bio: 'A code is like love, it has been created with clear intentions at the beginning, but it can get complicated.',
    linkedinUrl: 'https://www.linkedin.com/in/hadi-ibrah/',
  },
  {
    name: 'Hasan Itani',
    role: 'Front-end Developer',
    imageUrl:
    hasanImage.src,
    bio: 'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.',
    linkedinUrl: 'https://www.linkedin.com/in/hasan-itani/',
  },
  {
    name: 'Mohammad Itani',
    role: 'Front-end Developer',
    imageUrl:
    moeImage.src,
    bio: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
    linkedinUrl: 'https://www.linkedin.com/in/mohammad-itani-815314225',
  },
]
const AboutUsComponent = () => (
    <div className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 ">
      <div className="space-y-12 lg:grid lg:grid-cols-3  lg:space-y-0">
      <div className="lg:col-span-5">
      <div className="space-y-5 sm:space-y-4 ">
          <h2 className="text-3xl font-extrabold tracking-tight grid place-content-center md:place-content-center sm:text-4xl text-[#0A003C]">About Us</h2>
          <p className="text-xl text-gray-500">
            A group of highly motivated individuals with the urge to create a highly anticipated e-learning platform like no other. As a top-tier eLearning platform, we offer a plethora of sophisticated, online courses and visuals to universities to empower and help them achieve professionalism.
          </p>
      </div>
        <div className="space-y-5 sm:space-y-4 py-10">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl grid place-content-center md:place-content-center py-10 text-[#0A003C]">Meet The Team</h2>
        </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-5 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 "
          >
            {people.map((person) => (
              <li className="text-[#0A003C]" key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                  </div>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>{person.name}</h3>
                    <p className="text-[#9C4DF4]">{person.role}</p>
                  </div>
                  <div className="text-lg">
                    <p className="text-gray-500">{person.bio}</p>
                  </div>

                  <ul role="list" className="flex space-x-5">
                    <li>
                      <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
      </div>
      </div>
      <div className="lg:col-span-2 py-6">
        <div className="space-y-5 sm:space-y-4  py-10">
          <h2 className="text-3xl font-extrabold tracking-tight grid place-content-center md:place-content-center sm:text-4xl text-[#0A003C]">Who We Are!</h2>
          <p className="text-xl text-gray-500">
          We’re firm believers in the power of Learning and Development and the power of sharing. We are now proud to say that more than a thousand college students will be visitng our platform on a daily basis. As we continue to evolve, we strive to help our community with that same integrity and passion. Our focus is to improve the way our content is published and distributed. Our goal is to become even more efficient and user-friendly for our ever-growing community of college faculty and students.
          </p>
        </div>
        <div className="space-y-5 sm:space-y-4  py-10">
          <h2 className="text-3xl font-extrabold tracking-tight grid place-content-center md:place-content-center sm:text-4xl text-[#0A003C]">Our Purpose</h2>
          <p className="text-xl text-gray-500">
          Our purpose is to create a platform that serves thousands of individuals, and teams with a dual purpose. As an e-Learning  platform, we offer college courses that empower students and help them grow. What we do best is connect the dots between helping the students find the ideal courses for their major with guidance to match their needs. To accomplish this, we are offering you the ability to buy courses while communicating with your instructors. We strive to cultivate and grow the e-Learning community with one key drive: sharing valuable e-Learning content.
          </p>
        </div>
      </div>
    </div>
    </div>
)

export { AboutUsComponent }
