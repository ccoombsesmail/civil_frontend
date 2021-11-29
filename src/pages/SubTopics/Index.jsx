import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import topicActionCreators from '../../redux/actions/topics'
import subTopicActionCreators from '../../redux/actions/subtopics'
import usePermission from '../hooks/usePermission'

import useBindDispatch from '../hooks/redux/useBindDispatch'
import { Container, Line } from './Style'
import Header from './components/Header/Index'
import SubTopicsRouter from './components/SubTopicsRouter/Index'

const SubTopics = () => {
  const { topicId } = useParams()
  const { loggedIn } = usePermission()
  const { getAllSubTopics, getTopic } = useBindDispatch(subTopicActionCreators, topicActionCreators)

  const topic = useSelector((s) => s.topics.list)?.find((t) => t.id === topicId)
  const user = useSelector((s) => s.session.currentUser)

  useEffect(() => {
    if (loggedIn) {
      getTopic(topicId, user?.id)
      getAllSubTopics(topicId)
    }
  }, [loggedIn])

  return (
    <Container>
      <Header topic={topic} user={user} />
      <Line />
      <SubTopicsRouter />
    </Container>

  )
}

export default SubTopics
