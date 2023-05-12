import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (spaceId, discussionId) => {
  const navigate = useNavigate()
  return useCallback(() => {
    navigate(`/home/spaces/${spaceId}/discussions/${discussionId}`)
  }, [])
}
