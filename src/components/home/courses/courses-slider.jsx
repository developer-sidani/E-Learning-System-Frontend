import React from 'react'
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { CourseLoading, MainCourseComponent } from '../../courses'

const CoursesSlider = ({ loading, courses }) => {
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <CarouselProvider infinite id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel" naturalSlideWidth={300} isIntrinsicHeight totalSlides={loading ? 10 : courses.length} visibleSlides={mobileDevice ? 3 : 1} step={mobileDevice ? 3 : 1}>
      <ButtonBack
        className="mr-2 carousel-control-next absolute top-1/2 bottom-1/2 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-2 z-50"
        type="button"
      >
        <svg className="text-white w-10 h-10 bg-primary rounded-full p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <ArrowLeftIcon />
        </svg>
      </ButtonBack>
      <Slider className="p-3 my-2">
        {loading && (
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => (
            <Slide index={x} tabIndex="null" key={x}>
              <CourseLoading />
            </Slide>
          ))
        )}
        {!loading && (
          courses?.map((course, index) => (
            <Slide index={index} tabIndex="null" key={index}>
              <MainCourseComponent course={course} />
            </Slide>
          ))
        )}
      </Slider>
      <ButtonNext
        className="mr-2 carousel-control-next absolute top-1/2 bottom-1/2 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-2 z-50"
        type="button"
      >
        <svg className="text-white w-10 h-10 bg-primary rounded-full p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </ButtonNext>
    </CarouselProvider>

  )
}
export default CoursesSlider
