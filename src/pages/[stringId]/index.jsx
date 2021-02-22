// @flow
import React, { Fragment } from 'react'

import { useRouter } from 'next/router'

const StringPreview = () => {
  const router = useRouter()
  const { stringId } = router.query

  return (
    <>
      {/* <Header /> */}
      <h1>String: {stringId}</h1>

    </>
  )
}

export default StringPreview
