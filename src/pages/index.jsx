import React from 'react'
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
const Home = () => (
  <>
    <PageHeader
      title="Learn+"
    />
    <p className="text-3xl font-extrabold mb-2 ml-1">
      Courses:
    </p>
    <div className="px-5 py-2 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      <MainCourseComponent course={course} />
      <MainCourseComponent course={course} />
      <CourseLoading />
    </div>
  </>
)
Home.getLayout = (page) => (
  <MainLayout>
        {page}
  </MainLayout>
)
export default Home
