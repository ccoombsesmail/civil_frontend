import { useCallback, useState } from 'react'

export default () => {
  const [contentUrl, setContentUrl] = useState(null)
  const getContentUrlOnBlur = useCallback((e) => {
    setContentUrl(e.currentTarget.value)
  }, [])

  return { contentUrl, getContentUrlOnBlur }
}
