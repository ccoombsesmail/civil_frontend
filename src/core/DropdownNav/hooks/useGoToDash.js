import { useCallback } from 'react'
import useGoToDashboard from '../../hooks/useGoToDashboard'

export default (setOpen) => {
  const goToDashboard = useGoToDashboard()
  return useCallback(async () => {
    goToDashboard()
    setOpen((prev) => !prev)
    document.getElementById('dropdown-menu-overlay').remove()
  }, [])
}
