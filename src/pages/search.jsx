import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import {
  PageHeader,
  SearchComponent, Component5,
} from '../components'
import { AuthGuard } from '../guards'
import { MainLayout } from '../layouts'
import MyAccountPage from './my-account'
import { searchData } from '../api'

const Search = () => {
  const profile = useSelector(({ profile }) => profile)
  const token = profile?.token
  // console.log(token)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { keyword } = router.query
  // if (keyword) console.log(keyword)

  const [search, setSearch] = useState()
  const [loading, setLoading] = useState(true)

  const SearchDataCallBack = useCallback(async ({ keyword, token }) => {
    try {
      const response = await searchData({ term: keyword, token })
      return response
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (token && keyword) {
      SearchDataCallBack({ keyword, token }).then(r => {
        setSearch(r)
      })
    }
  }, [keyword, token])
  console.log(search)
  return (
    <>

      <PageHeader title="Learn+ | Search" />
      {/* <SearchComponent /> */}
      <Component5 keyword={keyword} search={search?.data} />
    </>

  )
}
Search.getLayout = (page) => (
    <MainLayout>
      {page}
    </MainLayout>
)

export default Search
