import { useCallback } from 'react'
import { useRouter } from 'next/router'

const usePath = () => {
  const { pathname } = useRouter()

  const checkPath = useCallback(
    (route: string) => {
      return route === pathname
    },
    [pathname],
  )

  return {
    checkPath,
  }
}

export default usePath
