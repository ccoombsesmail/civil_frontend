import { useCallback } from 'react'

export default (updateSpaceLikes, space, user) => useCallback(() => {
  if (!space || !user) return // Some somrt of error here maybe
  updateSpaceLikes({
    id: space.id,
    userId: user.id,
    increment: !space.liked,
  })
}, [space])
