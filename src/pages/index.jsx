import React, { useEffect } from 'react'
import axios from 'axios'
import log from 'tailwindcss/lib/util/log'
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
  rating: 2,
  updatedAt: new Date(),
  bestSeller: false,
  category: 'Web Development',
}
const Home = () => {
  useEffect(() => {
    fetch('https://geolocation-db.com/json/2d7a1090-a7e0-11ec-bb96-d99740183a81')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])
  return (
  <>
    <PageHeader
      title="Learn+"
    />
    <p className="text-3xl font-extrabold mb-2 ml-1">
      Courses:
    </p>
    <MainCourseComponent course={course} />
  </>
  )
}
Home.getLayout = (page) => (
  <MainLayout>
        {page}
  </MainLayout>
)
export default Home
