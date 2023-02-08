import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Tab } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ThemeTab } from '../../../../../CommonComponents/Tabs/Style'
import { TabContainer } from './Style'
import recsActionCreators from '../../../../../../redux/actions/recs/index'
import oppRecsActionCreators from '../../../../../../redux/actions/opposing_recs/index'

import useBindDispatch from '../../../../../hooks/redux/useBindDispatch'
import RecommendationsList from '../../../../../RecommendationsList/Index'

const Recommendations = () => {
  const [key, setKey] = useState('recs')
  const { topicId } = useParams()
  const { getAllRecs, getAllOpposingRecs } = useBindDispatch(
    recsActionCreators,
    oppRecsActionCreators,
  )
  useEffect(() => {
    getAllOpposingRecs(topicId)
    getAllRecs(topicId)
  }, [topicId])

  const recs = useSelector((s) => s.recommendations.recs)
  const opposingRecs = useSelector((s) => s.recommendations.opposingRecs)
  return (
    <TabContainer>
      <ThemeTab
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="recs" title="Similar Content">
          <RecommendationsList recs={recs} />
        </Tab>
        <Tab eventKey="opposingRecs" title="Opposing Views">
          <RecommendationsList recs={opposingRecs} />
        </Tab>
      </ThemeTab>

    </TabContainer>
  )
}

export default Recommendations
