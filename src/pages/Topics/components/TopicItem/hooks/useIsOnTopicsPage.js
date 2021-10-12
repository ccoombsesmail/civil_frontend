import { useMemo } from "react"
import { useLocation } from "react-router"
import { uuidRegEx } from "../../../../../generic/regex/uuid"

export default () => {
  const { pathname } = useLocation()
  return useMemo(() => {
    return !pathname.match(uuidRegEx)
  }, [pathname])
}