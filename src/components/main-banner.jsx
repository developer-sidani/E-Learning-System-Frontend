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
    <div className="bg-white">
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">{title}</h1>
          <p className="mt-4 text-xl text-white">
            {description}
          </p>
          {button && (
            <button
              onClick={() => router.push(button.link)}
              type="button"
              className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
            >
              {button?.title}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainBanner
