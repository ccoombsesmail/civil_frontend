import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { RiArrowDropRightFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
import { RightTriangleArrowFillSvg } from '../../../../../../svgs/svgs'
import useGoToSubTopic from '../../hooks/useGoToSubTopic'

import ThemeButton from '../../../../../CommonComponents/Button/Index'
import SubTopicsTable from '../SubTopicsTable/Index'

import uiActionCreators from '../../../../../../redux/actions/ui'
import { CREATE_SUB_TOPIC } from '../../../../../App/Modal/Index'
import { Container } from './Style/index'
import { useGetAllSubTopicsQuery } from '../../../../../../api/services/subtopics.ts'
import useGetCurrentUser from '../../../../../App/hooks/useGetCurrentUser'

const SubTopicsList = () => {
  const dispatch = useDispatch()
  const { topicId } = useParams()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  const { currentUser } = useGetCurrentUser()
  const { data: subtopics } = useGetAllSubTopicsQuery(topicId, {
    skip: !currentUser,
  })
  const genSubTopic = subtopics?.find(({ title }) => title === 'General')
  const goToSubTopic = useGoToSubTopic(genSubTopic?.id)

  return (
    <Container>
      <h1>
        Browse Some
        {' '}
        <b>Discussions</b>
        {' '}
        or Start Your Own...
      </h1>

      <div style={{ display: 'flex', margin: '2em 0' }}>
        <ThemeButton type="button" onClick={() => openModal(CREATE_SUB_TOPIC)}>
          Start A Discussion +
        </ThemeButton>
        <ThemeButton type="button" onClick={goToSubTopic}>
          General Discussion
          {' '}
          <RightTriangleArrowFillSvg size={50} />
        </ThemeButton>
      </div>
      <SubTopicsTable />
    </Container>
  )
}

export default SubTopicsList
