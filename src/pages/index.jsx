import React from 'react'
import { MainCourseComponent, PageHeader } from '../components'
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
  rating: 4.3,
  updatedAt: new Date(),
  bestSeller: false,
  category: 'Web Development',
}
const Home = () => (
    <>
      <PageHeader title="Learn+" />
      <h1>Courses:</h1>
      <MainCourseComponent course={course} />
    </>
)
Home.getLayout = (page) => (
  <MainLayout>
        {page}
  </MainLayout>
)
export default Home
