import React from 'react'
import { PageHeader, TermsOfUseComponent } from '../../components'

const data = {
  overview: 'fdjsljfhsdljfkldsjfds',
  sections: [
    {
      title: 'title',
      overview: 'dlfhjdskljfhdskjfhdsk',
      subsections: [
        {},
      ],
    },
  ],
}
const TermsOfUse = () => (
    <>
      <PageHeader title="Learn+ | Terms Of Use" />
      <TermsOfUseComponent
        data={data}
      />
    </>
)

export default TermsOfUse
