import React, { useCallback, useEffect, useState } from 'react'
import { PageHeader, TermsOfUseComponent } from '../components'
import { MainLayout } from '../layouts'
import { getTerms } from '../api'

const TermsOfUsePage = () => {
  const [terms, setTerms] = useState({
    overview: 'Learn+’s mission is to improve lives through learning. We enable anyone anywhere to create and share educational content (instructors) and to access that educational content to learn (students). We consider our marketplace model the best way to offer valuable educational content to our users. We need rules to keep our platform and services safe for you, us, and our student and get-user community. These Terms apply to all your activities on the Learn+ website, the Learn+ mobile applications, our TV applications, our APIs, and other related services (“Services”). If you publish a course on the Learn+ platform, you must also agree to the Instructor Terms. We also provide details regarding our processing of personal data of our students and instructors in our Privacy Policy. If you are using Learn+ as part of your employer’s Learn+ Business learning and development program, you can consult our Learn+ Business Privacy Statement. If you live in the United States or Canada, by agreeing to these Terms, you agree to resolve disputes with Learn+ through binding arbitration (with very limited exceptions, not in court), and you waive certain rights to participate in class actions, as detailed in the Dispute Resolution section.',
    sections: [],
  })
  const [loading, setLoading] = useState(true)
  const getTermsCallback = useCallback(
    async () => {
      setLoading(true)
      try {
        const res = await getTerms()
        console.log(res?.res?.data)
        setTerms(prevState => ({ ...prevState, sections: res?.res?.data }))
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    },
    [],
  )
  useEffect(() => {
    getTermsCallback()
    return () => {
      setTerms({
        overview: 'Learn+’s mission is to improve lives through learning. We enable anyone anywhere to create and share educational content (instructors) and to access that educational content to learn (students). We consider our marketplace model the best way to offer valuable educational content to our users. We need rules to keep our platform and services safe for you, us, and our student and get-user community. These Terms apply to all your activities on the Learn+ website, the Learn+ mobile applications, our TV applications, our APIs, and other related services (“Services”). If you publish a course on the Learn+ platform, you must also agree to the Instructor Terms. We also provide details regarding our processing of personal data of our students and instructors in our Privacy Policy. If you are using Learn+ as part of your employer’s Learn+ Business learning and development program, you can consult our Learn+ Business Privacy Statement. If you live in the United States or Canada, by agreeing to these Terms, you agree to resolve disputes with Learn+ through binding arbitration (with very limited exceptions, not in court), and you waive certain rights to participate in class actions, as detailed in the Dispute Resolution section.',
        sections: [],
      })
    }
  }, [])
  return (
  <>
    <PageHeader title="Learn+ | Terms of Use" />
    <TermsOfUseComponent data={terms} />
  </>
  )
}
TermsOfUsePage.getLayout = (page) => (
  <MainLayout>
    {page}
  </MainLayout>
)
export default TermsOfUsePage
