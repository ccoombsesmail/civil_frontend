import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import usePermission from '../hooks/usePermission'
import uiActionCreators from '../../redux/actions/ui'
import subTopicActionCreators from '../../redux/actions/subtopics'
import topicActionCreators from '../../redux/actions/topics'

import { CREATE_SUB_TOPIC } from '../App/Modal/Index'

import QuoteBox from '../CommonComponents/QuoteBox/Index'
import AgGrid from '../CommonComponents/AgGrid/Index'
import ThemeButton from '../CommonComponents/Button/Index'
import { Container, CardContainer } from './Style'
import { subTopicDefs } from './utils/tableDefs'
import WavyBackground from '../CommonComponents/WavyBackground/Index'

const SubTopics = () => {
  const { topicId } = useParams()
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { openModal, getAllSubTopics, getTopic } = bindActionCreators({
    ...uiActionCreators, ...subTopicActionCreators, ...topicActionCreators,
  }, dispatch)

  const subtopics = useSelector((s) => s.subtopics.list) || []
  const topicTitle = useSelector((s) => s.topics.list)?.find((topic) => topic.id === topicId)?.title

  useEffect(() => {
    if (loggedIn) {
      getTopic(topicId)
      getAllSubTopics(topicId)
    }
  }, [loggedIn])

  return (
    <Container>
      <QuoteBox>
        <QuoteBox.QuoteText>
          Browse Some <b>Sub-Topics</b> regarding the discussion about <b>{topicTitle}</b> or Create Your Own...
        </QuoteBox.QuoteText>
        <ThemeButton type="button" onClick={() => openModal(CREATE_SUB_TOPIC)}>
          Create Sub Topic +
        </ThemeButton>
      </QuoteBox>
      <CardContainer>
        <AgGrid
          rowData={subtopics}
          columnDefs={subTopicDefs}
          defaultColDef={{
            sortable: true,
            resizable: true,
          }}
        />
      </CardContainer>
      <WavyBackground color="green" top="65%" />
    </Container>

  )
}

export default SubTopics
