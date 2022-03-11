import React from 'react'
import { Footer } from '../components'

const MainLayout = ({ children }) => (

    <>

    {/* Children as props */}
      {children}
      {/* Show Footer Component */}
      <Footer />
    </>

)

export default MainLayout
