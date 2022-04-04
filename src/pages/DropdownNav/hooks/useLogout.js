import { useCallback } from 'react'
import useDeleteStore from '../../DID/useDeleteStore'
import useBindDispatch from '../../hooks/redux/useBindDispatch'
import sessionActions from '../../../redux/actions/session/index'

export default (setOpen) => {
  const deleteStore = useDeleteStore()
  const { logout } = useBindDispatch(sessionActions)
  return useCallback(async () => {
    await deleteStore()
    logout()
    setOpen((prev) => !prev)
    document.getElementById('dropdown-menu-overlay').remove()
  }, [])
}
