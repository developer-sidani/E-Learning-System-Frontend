import React from 'react'
import {
  PageHeader, MainBanner, CoursesContainer, TopCategoriesComponent, CallToActionComponent,
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
    flag: '',
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
const topCategories = [
  {
    title: 'Development',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-development-2x-v2.jpg 2x',
    route: '/categories/development',
  },
  {
    title: 'Personal Development',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-2x-v2.jpg 2x',
    route: '/categories/personal-development',
  },
  {
    title: 'Design',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-design-2x-v2.jpg 2x',
    route: '/categories/design',
  },
  {
    title: 'Business',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-business-2x-v2.jpg 2x',
    route: '/categories/design',
  },
  {
    title: 'IT & Software',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-2x-v2.jpg 2x',
    route: '/categories/it-and-software',
  },
  {
    title: 'Photography & Video',
    img: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg',
    imgSet: 'https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg 1x, https://s.udemycdn.com/home/top-categories/lohp-category-photography-2x-v2.jpg 2x',
    route: '/categories/photography-and-video',
  },
]
const Home = () => (
  <>
    <PageHeader
      title="Learn+"
    />
    <MainBanner />
    <div className="ml-2 my-3 px-5">
      <p className="text-3xl font-serif">
        A broad selection of courses
      </p>
      <p className="mt-2 text-l font-serif">
        Choose from 183,000 online video courses with new additions published every month
      </p>
    </div>
    <CoursesContainer
      courses={courses}
      loading={false}
      title="Grow your software development skills with JavaScript"
      description="JavaScript is a text-based computer programming language used to make dynamic web pages. A must-learn for aspiring web developers or programmers, JavaScript can be used for features like image carousels, displaying countdowns and timers, and playing media on a webpage. "
    />
    <div className="ml-2 my-3 px-5">
      <p className="text-3xl font-serif">
        Top Categories
      </p>
      <TopCategoriesComponent categories={topCategories} />
    </div>
    <CallToActionComponent />
  </>
)
Home.getLayout = (page) => (
  <MainLayout>
        {page}
  </MainLayout>
)
export default Home
