import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

import { RiArrowDropRightFill } from 'react-icons/ri'
import QuoteBox from '../../../CommonComponents/QuoteBox/Index'
import ThemeButton from '../../../CommonComponents/Button/Index'

import { CREATE_SUB_TOPIC } from '../../../App/Modal/Index'
import useGoToSubTopic from '../../hooks/useGoToSubTopic'
import uiActionCreators from '../../../../redux/actions/ui'

const SubTopicsTable = () => {
  const subtopics = useSelector((s) => s.subtopics.list)
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  const genSubTopic = subtopics?.find(({ title }) => title === 'General')
  const goToSubTopic = useGoToSubTopic(genSubTopic?.id)

  return (
    <>
      <QuoteBox>
        <QuoteBox.QuoteText>
          Browse Some
          {' '}
          <b>Sub-Topics</b>
          {' '}
          or Create Your Own...
        </QuoteBox.QuoteText>
        <div style={{ display: 'flex' }}>
          <ThemeButton type="button" onClick={() => openModal(CREATE_SUB_TOPIC)}>
            Create Sub Topic +
          </ThemeButton>
          <ThemeButton type="button" onClick={goToSubTopic}>
            General Discussion
            {' '}
            <RiArrowDropRightFill size={50} />
          </ThemeButton>
        </div>
      </QuoteBox>
    </>
  )
}

export default SubTopicsTable
