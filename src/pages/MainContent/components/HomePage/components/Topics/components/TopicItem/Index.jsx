/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'

import ExternalContentCard from '../../../../../../../CommonComponents/TopicCards/ExternalContentCard/Index'
import { VideoPlayer } from './Style'
import { TweetComponent } from '../../../../../../../CommonComponents/Lexical/nodes/TweetNode.tsx'
import UserProvidedMediaCard from '../../../../../../../CommonComponents/TopicCards/UserProvidedMediaCard/Index'
import { Twitter, Web, YouTube } from '../../../../../../../../enums/link_type'
import Card from '../../../../../../../CommonComponents/TopicCard/Index'

import { CircleLoading } from '../../../../../../../../svgs/spinners/CircleLoading'
import useGoToSubTopics from '../../../../../../../hooks/routing/useGoToSubTopics'

const TopicItem = ({ topic, user }) => {
  const goToSubTopic = useGoToSubTopics(topic?.id)

  const commonProps = useMemo(
    () => ({
      topic,
      user,
      showLinks: false,
      hideReplyIcon: true,
      onClick: goToSubTopic,
    }),
    [topic, user],
  )

  const linkType = topic.externalContentData?.linkType

  let cardbody = null

  if (linkType === YouTube) {
    cardbody = (
      <VideoPlayer
        loading="lazy"
        src={`https://www.youtube.com/embed/${topic.externalContentData?.embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      />
    )
  } else if (linkType === Twitter) {
    cardbody = (
      <TweetComponent
        tweetID={topic.externalContentData?.embedId}
        format=""
        className={{
          base: '',
          focus: '',
        }}
        loadingComponent={<CircleLoading size={20} />}
      />
    )
  } else if (linkType === Web) {
    return <ExternalContentCard {...commonProps} />
  } else if (topic.createdByVodUrl || topic.createdByImageUrl) {
    return <UserProvidedMediaCard {...commonProps} />
  }

  return <Card {...commonProps}>{cardbody}</Card>
}

export default TopicItem
