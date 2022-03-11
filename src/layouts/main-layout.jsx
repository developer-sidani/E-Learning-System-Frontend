import React from 'react'
import { Navbar, Footer } from '../components'

const MainLayout = ({ children }) => (

    <>
     {/* Show Navbar Component */}
      <Navbar />
    {/* Children as props */}
      {children}
      {/* Show Footer Component */}
      <Footer />
    </>

)

export default MainLayout
