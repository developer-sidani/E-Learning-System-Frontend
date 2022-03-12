import React from 'react'
import { Navbar, Footer } from '../components'

const MainLayout = ({ children, withFooter = true, withNav = true }) => (
    <>
      {withNav && <Navbar />}
      {children}
      {withFooter && <Footer />}
    </>

)

export default MainLayout
