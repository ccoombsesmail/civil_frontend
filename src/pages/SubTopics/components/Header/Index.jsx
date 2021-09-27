import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmbededTweet from '../../../EmbededTweet/Index'
import IconButton from '../../../CommonComponents/IconButton/Index'
import {BiLike, BiComment} from 'react-icons/bi'
import { Container, ActionsContainer } from './Style/index'
import uiActionCreators from '../../../../redux/actions/ui'
import { REPLY } from '../../../App/Modal/Index'

const Header = ({ topic, user }) => {
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators({ ...uiActionCreators }, dispatch)
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
      <ActionsContainer>
        <IconButton 
          icon={<BiComment size={25} />}
          onClick={() => openModal(REPLY)}
        />
      </ActionsContainer>
    </Container>

  )

}


export default Header