import React, { Suspense } from 'react'
import {
  Route, Routes,
} from 'react-router-dom'

const Recommendations = React.lazy(() => import('./components/Recommendations/Index'))

function RightSection() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <Suspense fallback={<div>Loading...</div>}>
            <Recommendations />
          </Suspense>
      )}
      />
    </Routes>
  )
}

export default RightSection
