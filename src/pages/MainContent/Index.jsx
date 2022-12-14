import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingPage from '../CommonComponents/LoadingPage/Index'

const SubTopicsPage = React.lazy(() => import('./components/SubTopicsPage/Index'))
const NotificationsPage = React.lazy(() => import('./components/NotificationsPage/Index'))
const TribunalNotificationsPage = React.lazy(() => import('./components/TribunalNotificationsPage/Index'))
const HomePage = React.lazy(() => import('./components/HomePage/Index'))


const MainContent = () => {

return (
  <>
    <Routes>
      <Route
        path="/topics/:topicId/subtopics/*"
        element={(
          <Suspense fallback={<LoadingPage />}>
            <SubTopicsPage />
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
      <Route path="/topics" element={(
          <Suspense fallback={<LoadingPage />}>
            <HomePage />
          </Suspense>
        )} />
    </Routes>
  </>
)
      }

export default MainContent
