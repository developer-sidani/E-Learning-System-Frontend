import React from 'react'
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import { MainCourseComponent, PageHeader, CourseLoading } from '../components'
import { MainLayout } from '../layouts'

const course = {
  _id: '621d2f5bbe6a14d70ae04c59',
  title: 'Intro to web',
  image_125_H: 'https://img-c.udemycdn.com/course/125_H/1331946_ed41_4.jpg',
  image_240x135: 'https://img-c.udemycdn.com/course/240x135/1331946_ed41_4.jpg',
  image_480x270: 'https://img-c.udemycdn.com/course/480x270/1331946_ed41_4.jpg',
  headline: 'Beginners, Zero to Hero. AWS EC2 web server, NodeJS Server, AWS RDS database server, S3, SES & CloudWatch.',
  instructor: 'test test',
  price: 49.99,
  currency: '$',
  rating: '4.0',
  updatedAt: new Date(),
  bestSeller: false,
  category: 'Web Development',
  flag: 'Bestseller',
}
const Home = () => {
  const theme = useTheme()
  const mobileDevice = useMediaQuery(theme.breakpoints.up('sm'))
  return (
  <>
    <PageHeader
      title="Learn+"
    />
    <p className="text-3xl font-extrabold mb-2 ml-1">
      Courses:
    </p>

    <CarouselProvider id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel" naturalSlideWidth={50} isIntrinsicHeight totalSlides={5} visibleSlides={mobileDevice ? 3 : 1} step={mobileDevice ? 3 : 1}>
      <ButtonBack
        className="mr-2 carousel-control-next absolute top-1/2 bottom-1/2 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-2 z-50"
        type="button"
      >
        <svg className="text-white w-10 h-10 bg-primary rounded-full p-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <ArrowLeftIcon />
        </svg>
      </ButtonBack>
      <Slider className="p-3 my-2">
        <Slide index={0} tabIndex="null">
          <MainCourseComponent course={course} />
        </Slide>
        <Slide index={1} tabIndex="null">
          <MainCourseComponent course={course} />
        </Slide>
        <Slide index={2} tabIndex="null">
          <MainCourseComponent course={course} />
        </Slide>
        <Slide index={3} tabIndex="null">
          <MainCourseComponent course={course} />
        </Slide>
        <Slide index={4} tabIndex="null">
          <CourseLoading />
        </Slide>
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
  </>
  )
}
Home.getLayout = (page) => (
  <MainLayout>
        {page}
  </MainLayout>
)
export default Home
