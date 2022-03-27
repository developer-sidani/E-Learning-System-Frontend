import React from 'react'
import {
  PageHeader, MainBanner, CoursesContainer, CoursesSlider,
} from '../components'
import { MainLayout } from '../layouts'

const courses = [
  {
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
  },
  {
    _id: '621d2f5bbe6a14d70ae04c549',
    title: 'Advanced web',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
  {
    _id: '621d2f5bbe6a14d70ae014c59',
    title: 'Become a senior web developer',
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
  },
]
const Home = () => (
  <>
    <PageHeader
      title="Learn+"
    />
    <MainBanner />
    <div className="ml-2 my-3 ">
      <p className="text-3xl font-serif">
        A broad selection of courses
      </p>
      <p className="mt-2 text-l font-serif">
        Choose from 183,000 online video courses with new additions published every month
      </p>
    </div>
    <CoursesContainer
      courses={courses}
      loading
      title="Python"
      description="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that wi..."
    />
  </>
)
Home.getLayout = (page) => (
  <MainLayout>
        {page}
  </MainLayout>
)
export default Home
