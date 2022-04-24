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
  const userId = profile?.user?.id
  // console.log(token)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { keyword } = router.query
  // if (keyword) console.log(keyword)

  const [search, setSearch] = useState()
  const [loading, setLoading] = useState(true)

  const SearchDataCallBack = useCallback(async ({ keyword, userId }) => {
    try {
      const response = await searchData({ term: keyword, userId })
      return response
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(async () => {
    await userId
    if (keyword) {
      SearchDataCallBack({ keyword, userId }).then(r => {
        setSearch(r?.data)
      })
    }
  }, [keyword, userId])
  console.log(search)
  return (
    <>

      <PageHeader title="Learn+ | Search" />
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
