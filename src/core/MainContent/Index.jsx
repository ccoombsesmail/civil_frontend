import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from '../CommonComponents/LoadingPage/Index'

const DiscussionsPage = React.lazy(() => import('../pages/DiscussionsPage/Index'))
const NotificationsPage = React.lazy(() => import('../pages/NotificationsPage/Index'))
const TribunalNotificationsPage = React.lazy(() => import('../pages/TribunalNotificationsPage/Index'))
const HomePage = React.lazy(() => import('../pages/HomePage/Index'))

function MainContent() {
  return (
    <Routes>
      <Route
        path="/topics/:topicId/discussions/*"
        element={(
          <Suspense fallback={<LoadingPage />}>
            <DiscussionsPage />
          </Suspense>
          )}
      />
      <Route
        path="/notifications"
        element={(
          <Suspense fallback={<LoadingPage />}>
            <NotificationsPage />
          </Suspense>
      )}
      />
      <Route
        path="/notifications-tribunal"
        element={(
          <Suspense fallback={<LoadingPage />}>
            <TribunalNotificationsPage />
          </Suspense>
        )}
      />
      <Route
        path="/topics"
        element={(
          <Suspense fallback={<LoadingPage />}>
            <HomePage />
          </Suspense>
        )}
      />
    </Routes>
  )
}

export default MainContent
