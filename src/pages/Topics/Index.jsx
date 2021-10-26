import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import usePermission from '../hooks/usePermission'
import useBindDispatch from '../hooks/useBindDispatch'
import uiActionCreators from '../../redux/actions/ui'
import topicActionCreators from '../../redux/actions/topics'

import TopicItem from './components/TopicItem/Index'
import ThemeButton from '../CommonComponents/Button/Index'
import QuoteBox from '../CommonComponents/QuoteBox/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'
import { CREATE_TOPIC } from '../App/Modal/Index'
import { CardContainer, Container, BorderContainer } from './Style'

const Topics = () => {
  const { loggedIn } = usePermission()
  const { openModal, getAllTopics } = useBindDispatch(uiActionCreators, topicActionCreators)
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
              Hello
              {' '}
              <b>{`${user?.username}`}</b>
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
        <WavyBackground color="#EF5D45" top="100%" />
      </Container>
    </>
  )
}

export default Topics
