import { useCallback } from 'react'
import { useHistory } from 'react-router'

export default () => {
  const history = useHistory()
  return useCallback(() => {
    history.push('/dashboard')
  }, [])
}
