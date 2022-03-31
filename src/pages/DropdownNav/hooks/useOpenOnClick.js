import { useCallback } from 'react'

export default (setOpen) => useCallback(() => {
  setOpen((prev) => !prev)
  const overlay = document.createElement('div')
  overlay.style.zIndex = 99998
  overlay.style.position = 'absolute'
  overlay.style.top = 0
  overlay.style.bottom = 0
  overlay.style.left = 0
  overlay.style.right = 0

  overlay.addEventListener('click', () => {
    setOpen((prev) => !prev)
    overlay.remove()
  })
  document.getElementById('main-container').appendChild(overlay)
}, [])
