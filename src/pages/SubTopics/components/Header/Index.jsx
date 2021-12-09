import React from 'react'

import EmbededTweet from '../../../CommonComponents/TopicCards/TweetCard/Index'

import { Container } from './Style/index'
import VideoShowPage from '../../../VideoShowPage/Index'
import ExternalContentCard from '../../../CommonComponents/TopicCards/ExternalContentCard/Index'

const Header = ({ topic, user }) => {
  let content = null
  if (topic?.tweetHtml) content = <EmbededTweet topic={topic} user={user} showLinks />
  else if (topic?.ytUrl) content = <VideoShowPage topic={topic} user={user} showLinks src={topic.ytUrl.replace('watch?v=', 'embed/')} />
  else content = <ExternalContentCard topic={topic} user={user} showLinks />

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
