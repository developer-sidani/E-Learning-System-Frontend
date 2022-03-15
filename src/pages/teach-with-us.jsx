import React from 'react'
import { useRouter } from 'next/router'
import { PageHeader, TeachWithUsComponent } from '../components'
import { MainLayout } from '../layouts'

const TeachWithUs = () => (
    <>
        <PageHeader title="Learn+ | Teach With Learn+" />
        <MainLayout><TeachWithUsComponent/></MainLayout>
        
    </>
)
    

export default TeachWithUs
