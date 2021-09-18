import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import AgGrid from '../../../CommonComponents/AgGrid/Index'

import QuoteBox from '../../../CommonComponents/QuoteBox/Index'
import ThemeButton from '../../../CommonComponents/Button/Index'
import { CardContainer } from './Style'
import { RiArrowDropRightFill } from 'react-icons/ri'

import { CREATE_SUB_TOPIC } from '../../../App/Modal/Index'
import useGoToSubTopic from '../../hooks/useGoToSubTopic'
import subTopicDefs from '../../utils/tableDefs'
import uiActionCreators from '../../../../redux/actions/ui'



const SubTopicsTable = () => {

  const subtopics = useSelector(s => s.subtopics.list)
  const dispatch = useDispatch()
  const { openModal } = bindActionCreators(uiActionCreators, dispatch)
  const genSubTopic = subtopics?.find(({title}) => title === "General")
  const goToSubTopic = useGoToSubTopic(genSubTopic?.id)
  const tableDefs = subTopicDefs()

  return (
    <>
       <QuoteBox>
        <QuoteBox.QuoteText>
          Browse Some <b>Sub-Topics</b> or Create Your Own...
        </QuoteBox.QuoteText>
        <div style={{display: 'flex'}}>
          <ThemeButton type="button" onClick={() => openModal(CREATE_SUB_TOPIC)}>
            Create Sub Topic +
          </ThemeButton>
          <ThemeButton type="button" onClick={goToSubTopic}>
            General Discussion <RiArrowDropRightFill size={50} />
          </ThemeButton>
        </div>
      </QuoteBox>
      <CardContainer>
        <AgGrid
          rowData={subtopics}
          columnDefs={tableDefs}
          defaultColDef={{
            sortable: true,
            resizable: true,
          }}
        />
      </CardContainer>
    </>
  )
}


export default SubTopicsTable