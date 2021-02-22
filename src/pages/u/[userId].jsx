import { useRouter } from 'next/router'

const ProfilePreview = () => {
  const router = useRouter()
  const { userId } = router.query

  return (
    <>
      {/* <Header /> */}
      <h1>User: {userId}</h1>

    </>
  )
}

export default ProfilePreview
