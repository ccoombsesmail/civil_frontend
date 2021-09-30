import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import usePermission from '../hooks/usePermission'
import uiActionCreators from '../../redux/actions/ui'
import topicActionCreators from '../../redux/actions/topics'
import Card from '../CommonComponents/TweetCard/Index'

import TopicItem from './components/TopicItem/Index'
import ThemeButton from '../CommonComponents/Button/Index'
import QuoteBox from '../CommonComponents/QuoteBox/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'
import { CREATE_TOPIC } from '../App/Modal/Index'
import { CardContainer, Container, BorderContainer } from './Style'
const Topics = () => {
  const [html, setHtml] = useState(null)
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
        <BorderContainer>

        <QuoteBox>
          <QuoteBox.QuoteText>
            Hello <b>{`${user?.username}`}</b>
            <br />
            Explore Some Topics or Create Your Own...
          </QuoteBox.QuoteText>

          <ThemeButton type="button" onClick={() => openModal(CREATE_TOPIC)}>
            Create Topic +
          </ThemeButton>
        </QuoteBox>
        <CardContainer>
          {
            topics.map((topic) => <TopicItem key={topic.id} topic={topic} user={user} />)
          }
        </CardContainer>
        </BorderContainer>
        <WavyBackground color="blue" top="100%" />
      </Container>
    </>
  )
}

export default Topics
