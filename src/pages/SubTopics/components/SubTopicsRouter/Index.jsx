import React from 'react'

import { Route, Routes } from 'react-router-dom'
import SubTopicThread from '../../../SubTopicThread/Index'
import SubTopicsTable from '../SubTopicsList/Index'
import WavyBackground from '../../../CommonComponents/WavyBackground/Index'

export default () => (
  <Routes>
    <Route
      path=":subTopicId"
      element={(
        <>
          <WavyBackground color="green" top="115%" />
          <SubTopicThread />
        </>
      )}
    />
    <Route path="/" element={<SubTopicsTable />} />
  </Routes>
)
