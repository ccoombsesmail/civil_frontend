import React, { useRef } from 'react'

import Card from '../../SpaceCard/Index'
import CardDetails from '../../SpaceCard/components/CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToDiscussion from '../../../hooks/routing/useGoToDiscussions'

import DisplayMedia from '../../../Forms/components/DisplayMedia/Index'

function UserProvidedMediaCard({
  space, user, showLinks,
}) {
  const descRef = useRef(null)

  const goToDiscussion = useGoToDiscussion(space?.id)

  useSetInnerHtml(descRef, space?.editorState)

  return (
    <Card
      onClick={goToDiscussion}
      space={space}
    >
      <DisplayMedia
        videoFile={space.vodUrl}
        imgFile={space.imageUrl}
        metaData={null}
      />
      <CardDetails
        space={space}
        user={user}
        showLinks={showLinks}
      />

    </Card>
  )
}

export default UserProvidedMediaCard
