import React, {useCallback} from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import EmbededTweet from '../../../EmbededTweet/Index'
import uiActionCreators from '../../../../redux/actions/ui'
import topicActionCreators from '../../../../redux/actions/topics'

import { Container } from './Style/index'
import EmbededYouTube from '../../../EmbededYouTube/Index'

const Header = ({ topic, user }) => {
  let content = null
  if (topic?.tweetHtml) content = <EmbededTweet topic={topic} user={user} showLinks={true} />
  if (topic?.ytUrl) content = <EmbededYouTube topic={topic} user={user} showLinks={true} src={topic.ytUrl.replace('watch?v=', 'embed/')} />

  return (
    <Container>
      <h1> We're Talking About...</h1> 
      {content}
    </Container>

  )

}


export default Header