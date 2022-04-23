import React from 'react'

const Pagination = () => (

    <nav
      aria-label="Pagination"
      className="max-w-7xl mx-auto w-screen px-4 mt-6 mb-14 flex justify-between text-sm font-medium text-gray-700 sm:px-6 lg:px-8"
    >
    <div className="min-w-0 flex-1">
      <a
        href="#"
        className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        Previous
      </a>
    </div>
    <div className="hidden space-x-2 sm:flex">
      {/* Current: "border-indigo-600 ring-1 ring-indigo-600", Default: "border-gray-300" */}
      <a
        href="#"
        className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        1
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        2
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 h-10 border border-indigo-600 ring-1 ring-indigo-600 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        3
      </a>
      <span className="inline-flex items-center text-gray-500 px-1.5 h-10">...</span>
      <a
        href="#"
        className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        8
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        9
      </a>
      <a
        href="#"
        className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        10
      </a>
    </div>
    <div className="min-w-0 flex-1 flex justify-end">
      <a
        href="#"
        className="inline-flex items-center px-4 h-10 border border-gray-300 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-offset-indigo-600 focus:ring-indigo-600 focus:ring-opacity-25"
      >
        Next
      </a>
    </div>
    </nav>
)

export default Pagination
