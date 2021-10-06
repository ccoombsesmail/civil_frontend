import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import uiActionCreators from '../../redux/actions/ui'
import topicActionCreators from '../../redux/actions/topics'
import subTopicActionCreators from '../../redux/actions/subtopics'


import usePermission from '../hooks/usePermission'


import { Container, Line } from './Style'
import Header from './components/Header/Index'
import SubTopicsRouter from './components/SubTopicsRouter/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'

const SubTopics = () => {

  const { topicId } = useParams()
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { openModal, getAllSubTopics, getTopic } = bindActionCreators({
    ...uiActionCreators, ...subTopicActionCreators, ...topicActionCreators,
  }, dispatch)

  const topic = useSelector((s) => s.topics.list)?.find((topic) => topic.id === topicId)
  const user = useSelector((s) => s.session.currentUser)


  useEffect(() => {
    console.log(topicId)
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
      {/* <WavyBackground color="green" top="115%" /> */}
    </Container>

  )
}

export default SubTopics
