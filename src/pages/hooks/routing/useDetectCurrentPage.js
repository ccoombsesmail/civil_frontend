import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default () => {
  const { pathname } = useLocation()
  return useMemo(() => ({
    isOnTribunalPage: pathname.includes('tribunal'),
    isOnDiscussionsPage: pathname.includes('discussion'),
  }), [pathname])
}
