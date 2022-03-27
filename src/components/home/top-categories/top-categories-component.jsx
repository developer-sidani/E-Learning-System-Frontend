import React from 'react'
// eslint-disable-next-line import/no-cycle
import { CategoryContainer } from './index'

// eslint-disable-next-line no-unsafe-optional-chaining
const renderAccordingToIndex = (index, data) => index + 1 > ((data?.length) / 2) ? 'fade-up' : 'fade-down'
const TopCategoriesComponent = ({ categories }) => (
  <div className="mx-1 my-3 p-4 grid sm:gap-4 grid-cols-1 md:grid-cols-3">
    {categories?.map((category, index, data) => (
      <div data-aos={renderAccordingToIndex(index, data)} key={index}>
        <CategoryContainer category={category} />
      </div>
    ))}
  </div>
)

export default TopCategoriesComponent
