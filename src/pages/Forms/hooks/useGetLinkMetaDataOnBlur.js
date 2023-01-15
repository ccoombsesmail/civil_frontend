import { useCallback, useState } from 'react'

export default () => {
  const [externalContentUrl, setContentUrl] = useState(null)
  const getContentUrlOnBlur = useCallback((e) => {
    setContentUrl(e.currentTarget.value)
  }, [])

  return { externalContentUrl, getContentUrlOnBlur, setContentUrl }
}
