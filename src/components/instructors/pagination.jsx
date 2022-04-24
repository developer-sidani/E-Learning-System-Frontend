import React from 'react'
import {
  ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon,
} from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Pagination = ({ instructorId, paginationData, getCoursesForInstructorCallback }) => (
    <div className="bg-white mt-12 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          type="button"
          disabled={!paginationData?.hasPrevPage}
          onClick={() => getCoursesForInstructorCallback(instructorId, paginationData?.prevPage)}
          className={classNames(
            'ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700',
            paginationData?.hasPrevPage ? 'bg-white hover:bg-gray-50' : 'bg-gray-400',
          )}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => getCoursesForInstructorCallback(instructorId, paginationData?.nextPage)}
          disabled={!paginationData?.hasNextPage}
          className={classNames(
            'ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700',
            paginationData?.hasNextPage ? 'bg-white hover:bg-gray-50' : 'bg-gray-400',
          )}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
              <span className="font-medium">{`${paginationData?.totalDocs} results`}</span>
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              type="button"
              disabled={paginationData?.page === 1}
              onClick={() => getCoursesForInstructorCallback(instructorId, 1)}
              className={classNames(
                'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500',
                paginationData?.page !== 1 ? 'bg-white hover:bg-gray-50' : 'bg-gray-400',
              )}
            >
              <span className="sr-only">First</span>
              <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              disabled={!paginationData?.hasPrevPage}
              onClick={() => getCoursesForInstructorCallback(instructorId, paginationData?.prevPage)}
              className={classNames(
                'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500',
                paginationData?.hasPrevPage ? 'bg-white hover:bg-gray-50' : 'bg-gray-400',
              )}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {paginationData?.hasPrevPage && (
              <button
                type="button"
                onClick={() => getCoursesForInstructorCallback(instructorId, paginationData?.prevPage)}
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                {paginationData?.prevPage}
              </button>
            )}
            <button
              type="button"
              disabled
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {paginationData?.page}
            </button>
            {paginationData?.hasNextPage && (
              <button
                type="button"
                onClick={() => getCoursesForInstructorCallback(instructorId, paginationData?.nextPage)}
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                {paginationData?.nextPage}
              </button>
            )}
            <button
              type="button"
              onClick={() => getCoursesForInstructorCallback(instructorId, paginationData?.nextPage)}
              disabled={!paginationData?.hasNextPage}
              className={classNames(
                'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500',
                paginationData?.hasNextPage ? 'bg-white hover:bg-gray-50' : 'bg-gray-400',
              )}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => getCoursesForInstructorCallback(instructorId, paginationData?.totalPages)}
              disabled={paginationData?.page === paginationData?.totalPages}
              className={classNames(
                'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500',
                paginationData?.page !== paginationData?.totalPages ? 'bg-white hover:bg-gray-50' : 'bg-gray-400',
              )}
            >
              <span className="sr-only">Last</span>
              <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
)

export { Pagination }
