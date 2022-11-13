import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import useBindDispatch from '../hooks/redux/useBindDispatch'
import uiActionCreators from '../../redux/actions/ui'
import topicActionCreators from '../../redux/actions/topics'

import TopicItem from './components/TopicItem/Index'
import Header from './components/Header/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'
import { CardContainer, Container, BorderContainer } from './Style'

const Topics = () => {
  const { openModal, getAllTopics } = useBindDispatch(uiActionCreators, topicActionCreators)
  const topics = useSelector((s) => s.topics.list) || []
  const user = useSelector((s) => s.session.currentUser)
  useEffect(() => {
    setTimeout(() => {
      if (user) {
        getAllTopics()
      }
    }, 0)
  }, [user])

  return (
    <>
      <Container>
        <BorderContainer>
          <Header user={user} openModal={openModal} />
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
