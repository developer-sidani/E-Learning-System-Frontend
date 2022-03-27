import React from 'react'
import { useRouter } from 'next/router'

const CategoryContainer = ({ category }) => {
  const router = useRouter()
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={() => router.push(category?.route)}
      className="p-2 rounded-lg shadow-lg group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 max-w-xs w-[300]"
    >
      <img
        className="bg-cover"
        src={category.img}
        srcSet={category.imgSet}
        // height={280}
        // width={280}
        alt="bg"
      />
      <p
        className="m-2 font-semibold"
      >
        {category?.title}
      </p>
    </div>
  )
}

export default CategoryContainer
