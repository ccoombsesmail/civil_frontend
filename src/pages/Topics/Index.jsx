import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import usePermission from '../hooks/usePermission'
import uiActionCreators from '../../redux/actions/ui'
import topicActionCreators from '../../redux/actions/topics'

import { CREATE_TOPIC } from '../App/Modal/Index'
import TopicItem from './components/TopicItem/Index'
import ThemeButton from '../CommonComponents/Button/Index'
import { CardContainer, Container } from './Style'
import QuoteBox from '../CommonComponents/QuoteBox/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'

const Topics = () => {
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { openModal, getAllTopics } = bindActionCreators({ ...uiActionCreators, ...topicActionCreators }, dispatch)
  const topics = useSelector((s) => s.topics.list) || []
  const user = useSelector((s) => s.session.currentUser)

  useEffect(() => {
    if (loggedIn) getAllTopics()
  }, [loggedIn])

  if (!loggedIn) return null
  return (
    <>
      <Container>
        <QuoteBox>
          <QuoteBox.QuoteText>
            <b>{`Hello ${user?.username}`}</b>
            {'\n'}
            Explore Some Topics or Create Your Own...
          </QuoteBox.QuoteText>

          <ThemeButton type="button" onClick={() => openModal(CREATE_TOPIC)}>
            Create Topic +
          </ThemeButton>
        </QuoteBox>
        <CardContainer>
          {
            topics.map((topic) => <TopicItem key={topic.id} topic={topic} />)
          }
        </CardContainer>
        <WavyBackground color="blue" />
      </Container>
    </>
  )
}

export default Topics
