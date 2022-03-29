import React from 'react'
import { useRouter } from 'next/router'

const SearchByKey = () => {
  const router = useRouter()
  const { key } = router.query
  return (
    <div>
        {key}
    </div>
  )
}

export default SearchByKey
