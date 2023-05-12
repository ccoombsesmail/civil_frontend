import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

interface DetectCurrentPageValue {
  isOnTribunalPage: boolean;
  isOnDiscussionsPage: boolean
}

export default (): DetectCurrentPageValue => {
  const { pathname } = useLocation()
  return useMemo<DetectCurrentPageValue>(() => ({
    isOnTribunalPage: pathname.includes('tribunal'),
    isOnDiscussionsPage: pathname.includes('discussion'),
  }), [pathname])
}