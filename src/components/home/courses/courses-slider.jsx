import React, { useMemo } from 'react'
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel'
import { createTheme, useMediaQuery } from '@mui/material'
import { CourseLoading, MainCourseComponent } from '../../courses'

const CoursesSlider = ({ loading, courses }) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        tab: 800,
        md: 900,
        lg: 1200,
      },
    },
  })
  const mobileDevice = useMediaQuery(theme.breakpoints.up('sm'))
  const tabDevice = useMediaQuery(theme.breakpoints.up('tab'))
  const largeDevice = useMediaQuery(theme.breakpoints.up('lg'))
  const getSettingsForCarousel = useMemo(() => {
    if (mobileDevice) {
      return { visibleSlides: 3, step: 3 }
    } if (tabDevice) {
      return { visibleSlides: 2, step: 1 }
    } if (largeDevice) {
      return { visibleSlides: 4, step: 4 }
    }
    return { visibleSlides: 1, step: 1 }
  }, [largeDevice, mobileDevice, tabDevice])
  return (
    <CarouselProvider infinite id="carouselExampleSlidesOnly" className="mx-2 carousel slide relative" data-bs-ride="carousel" naturalSlideWidth={300} isIntrinsicHeight totalSlides={loading ? 10 : courses.length} visibleSlides={getSettingsForCarousel.visibleSlides} step={getSettingsForCarousel.step}>
      <ButtonBack
        className="mr-1 carousel-control-next absolute top-1/2 bottom-1/2 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-2 z-50"
        type="button"
      >
        <svg className="text-white w-10 h-10 bg-primary rounded-full p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
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
        <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-10 h-10 bg-primary rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </ButtonNext>
    </CarouselProvider>

  )
}
export default CoursesSlider
