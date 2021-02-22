import { useRouter } from 'next/router'

const StringPreview = () => {
  const router = useRouter()
  const { stringId } = router.query

  return (
    <>
      {/* <Header /> */}
      <h1>BU for String: {stringId}</h1>

    </>
  )
}

export default StringPreview
