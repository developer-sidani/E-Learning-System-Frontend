import React from 'react'
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
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

    <CarouselProvider naturalSlideWidth={300} isIntrinsicHeight totalSlides={5} visibleSlides={mobileDevice ? 3 : 1} step={mobileDevice ? 3 : 1}>
      <ButtonBack>Back</ButtonBack>
      <Slider className="py-3">
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
      <ButtonNext>Forward</ButtonNext>
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
