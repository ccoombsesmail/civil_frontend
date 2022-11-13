import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/Index'

const SubTopicsPage = React.lazy(() => import(
  /* webpackChunkName: "tribunal" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ './components/SubTopicsPage/Index'
))

const NotificationsPage = React.lazy(() => import(
  /* webpackChunkName: "tribunal" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ './components/NotificationsPage/Index'
))

const TribunalNotificationsPage = React.lazy(() => import(
  /* webpackChunkName: "tribunal" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ './components/TribunalNotificationsPage/Index'
))

const MainContent = () => (
  <>
    <Routes>
      <Route
        path="/topics/:topicId/subtopics/*"
        element={(
          <Suspense fallback={<div>Loading...</div>}>
            <SubTopicsPage />
          </Suspense>
          )}
      />
      <Route
        path="/notifications"
        element={(
          <Suspense fallback={<div>Loading...</div>}>
            <NotificationsPage />
          </Suspense>
      )}
      />
      <Route
        path="/notifications-tribunal"
        element={(
          <Suspense fallback={<div>Loading...</div>}>
            <TribunalNotificationsPage />
          </Suspense>
        )}
      />
      <Route path="/topics" element={<HomePage />} />
    </Routes>
  </>
)

export default MainContent
