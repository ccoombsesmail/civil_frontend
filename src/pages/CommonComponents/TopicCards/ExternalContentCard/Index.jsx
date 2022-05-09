import React, { useRef } from 'react'

import Card from '../../Card/Index'
// import LinkMetaData from '../../../TopicForm/components/LinkMetaData/Index'
import CardDetails from '../CardDetails/Index'

import useSetInnerHtml from '../../../hooks/useSetInnerHtml'
import useGoToSubTopic from '../../../hooks/routing/useGoToSubTopics'

import LinkMetaData from '../../../TopicForm/components/LinkMetaData/Index'

const ExternalContentCard = ({
  topic, user, showLinks,
}) => {
  if (!topic) return null
  const descRef = useRef(null)

  const goToSubTopic = useGoToSubTopic(topic?.id)
  useSetInnerHtml(descRef, topic?.description)

  return (
    <Card
      onClick={goToSubTopic}
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
