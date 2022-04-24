import React from 'react'
import { useRouter } from 'next/router'
import {
  PageHeader,
  SearchComponent, Component5,
} from '../components'
import { AuthGuard } from '../guards'
import { MainLayout } from '../layouts'
import MyAccountPage from './my-account'

const search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { keyword } = router.query
  if (keyword) console.log(keyword)
  return (
    <>

      <PageHeader title="Learn+ | Search" />
      {/* <SearchComponent /> */}
      <Component5 />
    </>

  )
}
search.getLayout = (page) => (
    <MainLayout>
      {page}
    </MainLayout>
)

export default search
