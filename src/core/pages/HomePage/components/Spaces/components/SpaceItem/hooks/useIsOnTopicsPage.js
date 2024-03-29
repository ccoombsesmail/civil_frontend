import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { uuidRegEx } from '../../../../../../../../generic/regex/uuid'

export default () => {
  const { pathname } = useLocation()
  return useMemo(() => !pathname.match(uuidRegEx), [pathname])
}
