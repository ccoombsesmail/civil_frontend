import React, { useRef } from 'react'

import Card from '../../TopicCard/Index'
// import LinkMetaData from '../../../TopicForm/components/LinkMetaData/Index'
import CardDetails from '../../TopicCard/components/CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToDiscussion from '../../../hooks/routing/useGoToDiscussions'

import LinkMetaData from '../../../Forms/components/LinkMetaData/Index'

const ExternalContentCard = ({
  topic, user, showLinks,
}) => {
  if (!topic) return null
  const descRef = useRef(null)

  const goToDiscussion = useGoToDiscussion(topic?.id)
  useSetInnerHtml(descRef, topic?.description)

  return (
    <Card
      onClick={goToDiscussion}
      topic={topic}
    >
      <LinkMetaData topic={topic} />
      <CardDetails
        showLinks={showLinks}
        topic={topic}
        user={user}
      />
    </Card>
  )
}

export default ExternalContentCard
