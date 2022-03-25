import React from 'react'
import { Testimonials, PageHeader } from '../components'
import { MainLayout } from '../layouts'

const testimonial_array = [
  {
    image:'',
    content:
      '“Learn+ has changed my life. It’s allowed me to follow my passion and become a teacher I love to see my students succeed and hear them say they’ve learned more, quicker, from my courses than they did in college. It’s so humbling.”',
    name: 'Paulo Dichone',
    job: 'Developer (Android Speciality)',
  
 },
  {
    image:'',
    content:
      '“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”',
    name: 'Frank Kane',
    job: 'Data Science & IT Certifications',
  },
  {
    image:'',
    content:
      '“Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”',
    name: 'Deborah Grayson',
    job: 'Leadership, Communication',
  },
 
]
const Testimonials = () => (
  <>

    <Testimonials testimonial_array={testimonial_array} />
  </>
)
// FaqsPage.getLayout = (page) => (
//   <MainLayout>
//     {page}
//   </MainLayout>
// )
export default Testimonials