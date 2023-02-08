import { useCallback } from 'react'

export default (setOpen) => useCallback(() => {
  setOpen((prev) => !prev)
  document.getElementById('dropdown-menu-overlay').remove()
}, [])
