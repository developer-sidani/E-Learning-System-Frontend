import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Stars = ({ value }) => (
    <div className="flex items-center">
    {[0, 1, 2, 3, 4].map((rating) => (
      <StarIcon
        key={rating}
        className={classNames(
          parseFloat(value) > rating ? 'text-yellow-400' : 'text-gray-200',
          'flex-shrink-0 h-5 w-5',
        )}
        aria-hidden="true"
      />
    ))}
    </div>
)

export default Stars
