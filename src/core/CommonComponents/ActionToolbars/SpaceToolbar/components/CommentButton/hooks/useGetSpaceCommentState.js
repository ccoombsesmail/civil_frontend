import { useMemo } from 'react'

import { useGetSpaceQuery } from '../../../../../../../api/services/spaces.ts'
import { useGetGeneralDiscussionIdQuery } from '../../../../../../../api/services/discussions.ts'

import useGetCurrentUser from '../../../../../../App/hooks/useGetCurrentUser'

export default (spaceId) => {
  const { currentUser } = useGetCurrentUser()

  const { data: space, isLoading: isSpaceLoading, isUninitialized: isSpaceUninit } = useGetSpaceQuery(spaceId, {
    skip: !spaceId || !currentUser,
  })

  const { data: genDiscussionId, isLoading: isIdLoading, isUninitialized: isIdUninit } = useGetGeneralDiscussionIdQuery(spaceId, {
    skip: !spaceId || !currentUser,
  })

  return useMemo(() => {
    if (isSpaceLoading || isSpaceUninit || isIdLoading || isIdUninit) return null
    return {
      discussionId: genDiscussionId.id,
      spaceId,
      contentId: genDiscussionId.id,
      createdByUserData: space?.createdByUserData,
      username: currentUser?.username,
      time: space?.createdAt,
      lexicalRawContent: space?.editorState,
      parentId: null,
      rootId: null,
    }
  }, [space, currentUser, isSpaceLoading, isSpaceUninit, isIdLoading, isIdUninit, genDiscussionId])
}
