import React from 'react'
import EmbededTweet from '../../../EmbededTweet/Index'

import { Container } from './Style/index'

const Header = ({ topic, user }) => {

  return (
    <Container>
      <h1> We're Talking About...</h1>
      {
        topic?.tweetHtml ? (
          <EmbededTweet topic={topic} user={user} />
          ) : (
          <span>{topic?.title}</span>
        )
      }
    </Container>

  )

}


export default Header