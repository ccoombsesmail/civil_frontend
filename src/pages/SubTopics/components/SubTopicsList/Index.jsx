import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { RiArrowDropRightFill } from 'react-icons/ri'
import { RightTriangleArrowFillSvg } from '../../../../svgs/svgs'
import useGoToSubTopic from '../../hooks/useGoToSubTopic'

import ThemeButton from '../../../CommonComponents/Button/Index'
import SubTopicsTable from '../SubTopicsTable/Index'

import uiActionCreators from '../../../../redux/actions/ui'
import { CREATE_SUB_TOPIC } from '../../../App/Modal/Index'
import { Container } from './Style/index'

const SubTopicsList = () => {
  const subtopics = useSelector((s) => s.subtopics)
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  const genSubTopic = Object.values(subtopics)?.find(({ title }) => title === 'General')
  const goToSubTopic = useGoToSubTopic(genSubTopic?.id)

  return (
    <Container>
      <h1>
        Browse Some
        {' '}
        <b>Sub-Topics</b>
        {' '}
        or Create Your Own...
      </h1>

      <div style={{ display: 'flex' }}>
        <ThemeButton type="button" onClick={() => openModal(CREATE_SUB_TOPIC)}>
          Create Sub Topic +
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
