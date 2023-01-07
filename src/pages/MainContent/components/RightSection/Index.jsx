import React, { Suspense } from 'react'
import {
  Route, Routes, useLocation, useParams,
} from 'react-router-dom'

const Recommendations = React.lazy(() => import(
  /* webpackChunkName: "tribunal" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ './components/Recommendations/Index'
))

const RightSection = () => (
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

export default RightSection
