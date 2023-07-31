import React, { useRef } from 'react'

import Card from '../../PostCard/Index'
// import LinkMetaData from '../../../SpaceForm/components/LinkMetaData/Index'
import CardDetails from '../../PostCard/components/CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToDiscussion from '../../../hooks/routing/useGoToDiscussions'

import LinkMetaData from '../../../Forms/components/LinkMetaData/Index'

function ExternalContentCard({
  space, user, showLinks,
}) {
  if (!space) return null
  const descRef = useRef(null)

  const goToDiscussion = useGoToDiscussion(space?.id)
  useSetInnerHtml(descRef, space?.editorState)

  return (
    <Card
      onClick={goToDiscussion}
      space={space}
    >
      <LinkMetaData space={space} />
      <CardDetails
        showLinks={showLinks}
        space={space}
        user={user}
      />
    </Card>
  )
}

export default ExternalContentCard
