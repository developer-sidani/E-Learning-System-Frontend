import React, { useCallback, useEffect, useState } from 'react'
import { FaqComponent, PageHeader } from '../components'
import { MainLayout } from '../layouts'
import { getFaqs } from '../api'
import { SplashScreen } from '../screens'

const FaqsPage = () => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(false)
  const getFaqsCallback = useCallback(
    async () => {
      setLoading(true)
      try {
        const res = await getFaqs()
        setFaqs(res?.res?.data) // added .reverse() to fix order
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  useEffect(() => {
    getFaqsCallback()
    return () => {
      setFaqs([])
    }
  }, [])

  return loading ? (<SplashScreen />) : (
    <>
      <PageHeader
        title="Learn+ | FAQS"
      />

      <FaqComponent faqs={faqs} />
    </>
  )
}
FaqsPage.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)
export default FaqsPage
