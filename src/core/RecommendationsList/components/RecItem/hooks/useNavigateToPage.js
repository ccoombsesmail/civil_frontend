import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default (rec) => {
  const { space, subSpace } = rec
  const navigate = useNavigate()
  return useCallback(() => {
    if (rec.externalRecommendedContent) {
      window.open(rec.externalRecommendedContent, '_blank')
      return
    }
    if (space) navigate(`/home/spaces/${space.id}/discussions/`)
    else navigate(`/home/spaces/${subSpace.spaceId}/discussions/${subSpace.id}`)
  }, [rec])
}
