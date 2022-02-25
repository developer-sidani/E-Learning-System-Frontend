import React from 'react'
import Head from 'next/head'

const PageHeader = ({ title, children }) => (
    <Head>
        <title>
            {title}
        </title>
        {children}
    </Head>
)

export { PageHeader }
