import React from 'react'
import { Navbar, Footer } from '../components'

const MainLayout = ({ children }) => (

    <>

      <Navbar />

      {children}

      <Footer />
    </>

)

export default MainLayout
