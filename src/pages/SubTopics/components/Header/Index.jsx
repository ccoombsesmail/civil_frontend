/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react'

import EmbededTweet from '../../../CommonComponents/TopicCards/TweetCard/Index'

import { Container } from './Style/index'
import VideoShowPage from '../../../VideoShowPage/Index'
import ExternalContentCard from '../../../CommonComponents/TopicCards/ExternalContentCard/Index'
import UserProvidedMediaCard from '../../../CommonComponents/TopicCards/UserProvidedMediaCard/Index'

const Header = ({ topic, user }) => {
  let content = null
  const commonProps = useMemo(() => ({
    topic, user, showLinks: true,
  }), [topic, user])

  if (topic?.tweetHtml) content = <EmbededTweet{...commonProps} />
  else if (topic?.ytUrl) content = <VideoShowPage {...commonProps} src={topic.ytUrl.replace('watch?v=', 'embed/')} />
  else if (topic?.vodUrl || topic?.imageUrl) content = <UserProvidedMediaCard {...commonProps} />
  else content = <ExternalContentCard {...commonProps} />

  return (
    <Container>
      <h1 className="text-focus-in">
        {' '}
        {'We\'re Talking About...'}
      </h1>
      {content}
    </Container>

  )
}

export default Header
