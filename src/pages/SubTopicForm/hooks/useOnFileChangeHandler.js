import { useCallback } from 'react'

export default () => useCallback((e, setFieldValue, setStateValue) => {
  setFieldValue(e.target.dataset.filetype, e.currentTarget.files[0])
  const reader = new FileReader()
  const currFile = e.target.files[0]
  reader.onloadend = () => {
    setStateValue(reader.result)
  }
  reader.readAsDataURL(currFile)
}, [])
