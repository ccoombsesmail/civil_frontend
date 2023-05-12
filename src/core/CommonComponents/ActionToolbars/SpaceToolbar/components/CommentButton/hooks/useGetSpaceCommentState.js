import { useCallback } from 'react'

import { useGetSpaceQuery } from '../../../../../../../api/services/spaces.ts'
import { useGetGeneralDiscussionIdQuery } from '../../../../../../../api/services/discussions.ts'

import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser.js'

export default (spaceId) => {
  const { currentUser } = useGetCurrentUser()

  const { data: space, isLoading: isSpaceLoading, isUninitialized: isSpaceUninit } = useGetSpaceQuery(spaceId, {
    skip: !spaceId || !currentUser,
  })

  const { data: genDiscussionId, isLoading: isIdLoading, isUninitialized: isIdUninit } = useGetGeneralDiscussionIdQuery(spaceId, {
    skip: !spaceId || !currentUser,
  })

  return useCallback(() => {
    if (isSpaceLoading || isSpaceUninit || isIdLoading || isIdUninit) return null
    return {
      discussionId: genDiscussionId.id,
      spaceId,
      contentId: genDiscussionId.id,
      createdByIconSrc: space?.createdByIconSrc,
      username: currentUser?.username,
      createdByUsername: space?.createdByUsername,
      time: space?.createdAt,
      lexicalRawContent: space?.editorState,
      parentId: null,
      rootId: null,
    }
  }, [space, currentUser, isSpaceLoading, isSpaceUninit, isIdLoading, isIdUninit, genDiscussionId])
}
