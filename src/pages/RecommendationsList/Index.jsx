import React from 'react'
import RecItem from './components/RecItem/Index'

import { RecListContainer } from './Style'

const RecommendationsList = ({ recs }) => (
  <RecListContainer>
    {
        recs.map((rec, idx) => <RecItem key={String(idx)} rec={rec} />)
      }
  </RecListContainer>
)

export default RecommendationsList
