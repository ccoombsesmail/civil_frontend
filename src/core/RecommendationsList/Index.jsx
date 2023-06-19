/* eslint-disable react/no-array-index-key */
import React from 'react'

import { RecListContainer } from './Style'

function RecommendationsList({ recs, RecItem }) {
  return (
    <RecListContainer>
      {
      recs?.length === 0 ? <h3>Nothing Here</h3> : null
      }
      {
        recs?.map((rec, idx) => <RecItem key={String(idx)} rec={rec} />)
      }
    </RecListContainer>
  )
}

export default RecommendationsList
