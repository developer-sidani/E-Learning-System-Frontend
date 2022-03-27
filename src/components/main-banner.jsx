import React from 'react'
import { useRouter } from 'next/router'

const MainBanner = ({
  title = 'Learn+',
  description = 'Skills for your present (and your future). Get started with us.',
  button = { title: 'View Courses', link: '/courses' },
  image = 'https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/db24b94e-d190-4d5a-b1dd-958f702cc8f5.jpg',
}) => {
  const router = useRouter()
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={image}
              alt="learn+"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-200 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">{title}</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              {description}
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                {button && (
                  <button
                    onClick={() => router.push(button.link)}
                    type="button"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                  >
                    {button?.title}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
