import React from 'react'
import { PageHeader, ContactUsComponent } from '../components'
import { MainLayout } from '../layouts'
import FaqsPage from './faqs'

const offices = [
  { id: 1, city: 'Los Angeles', address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'] },
  { id: 2, city: 'New York', address: ['886 Walter Streets', 'New York, NY 12345'] },
  { id: 3, city: 'Toronto', address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'] },
  { id: 4, city: 'London', address: ['114 Cobble Lane', 'London N1 2EF'] },
]
const ContactUs = () => (
    <>
        <PageHeader title="Learn+ | Contact Us" />
        <ContactUsComponent offices={offices} />
    </>
)
ContactUs.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)

export default ContactUs
