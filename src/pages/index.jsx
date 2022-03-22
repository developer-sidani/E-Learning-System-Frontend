import React from 'react'
import { MainCourseComponent, PageHeader } from '../components'
import { MainLayout } from '../layouts'

const course = {
  title: 'Intro to web',
  img: '',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, obcaecati, officiis. Aperiam asperiores corporis dicta dolor dolorem excepturi inventore odio perspiciatis rerum temporibus, totam velit. Blanditiis culpa quibusdam saepe! Animi!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, obcaecati, officiis. Aperiam asperiores corporis dicta dolor dolorem excepturi inventore odio perspiciatis rerum temporibus, totam velit. Blanditiis culpa quibusdam saepe! Animi!',
  instructor: 'test test',
  price: 49.99,
  rating: 4.3,
  postDate: new Date(),
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
