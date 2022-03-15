import React from 'react'
import {IncentivesComponent, BannerComponent, StatsComponent, SupportComponent, CallToActionComponent, TestimonialsComponent} from '.'
const testimonial_array = [
    {
      image:'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Dream Come True',
      content:
        '“Learn+ has changed my life. It’s allowed me to follow my passion and become a teacher I love to see my students succeed and hear them say they’ve learned more, quicker, from my courses than they did in college. It’s so humbling.”',
      name: 'Paulo Dichone',
      job: 'Developer (Android Speciality)',
    
   },
    {
      image:'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'Source of Pride',
      content:
        '“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”',
      name: 'Frank Kane',
      job: 'Data Science & IT Certifications',
    },
    {
      image:'https://i.ibb.co/4g1D9cv/imgslider1.png',
      title: 'Stability and Fulfilment',
      content:
        '“Teaching on Udemy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”',
      name: 'Deborah Grayson',
      job: 'Leadership, Communication',
    },
   
  ]
const TeachWithUsComponent = () => (
  <>
      
      <BannerComponent/>    
      <IncentivesComponent/>
      <StatsComponent/>
      <TestimonialsComponent testimonial_array={testimonial_array}/>
      <SupportComponent/>
      <CallToActionComponent/>
      

  </>
  )


export { TeachWithUsComponent } 