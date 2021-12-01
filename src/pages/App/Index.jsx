import React, { memo, useCallback } from 'react'
import {
  Routes, Route, Navigate, useNavigate,
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ToastContainer } from 'react-toastify'
import {
  ClerkProvider, useUser,
} from '@clerk/clerk-react'

import useFetchAppData from './hooks/useFetchAppData'
import GlobalStyle from '../../theme/styles'
import uiActionCreators from '../../redux/actions/ui'

import { SignInComponent, SignUpComponent } from '../SignIn/Index'
import Header from './Header/Index'
import Modal from './Modal/Index'
import Topics from '../Topics/Index'
import SubTopics from '../SubTopics/Index'
import Sidebar from './Sidebar/Index'
import Dashboard from '../Dashboard/Index'
import LoadingSpinner from './LoadingSpinner/Index'
import { MainContainer, Content } from './Style'

const frontendApi = 'clerk.bjuk3.m71w1.lcl.dev'

const LoadDataComponent = () => {
  useFetchAppData()
  return (
    <>
    </>
  )
}

const LoadingBridge = ({ children }) => {
  const { user, isLoading } = useUser({ withAssertions: true })
  return (
    <>
      {
      isLoading(user) ? null : (
        <>
          <LoadDataComponent />
          {children}
        </>
      )
      }
    </>
  )
}

const App = () => {
  const navigate = useNavigate()
  const memoNavigate = useCallback((to) => navigate(to))
  const dispatch = useDispatch()
  const { closeModal } = bindActionCreators(uiActionCreators, dispatch)
  return (
    <ClerkProvider frontendApi={frontendApi} navigate={memoNavigate}>
      <GlobalStyle />
      <LoadingBridge>

        <div id="main-container" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
          <LoadingSpinner />
          <Header />
          <MainContainer>
            <Sidebar />
            <Content>
              <Routes>
                <Route path="/topics/:topicId/subtopics/*" element={<SubTopics />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signin" element={<SignInComponent />} />
                <Route path="/signup" element={<SignUpComponent />} />
                <Route path="/topics/*" element={<Topics />} />
                <Route path="/" element={<Navigate replace to="/topics" />} />
              </Routes>
            </Content>
            <Modal closeModal={closeModal} />
            <ToastContainer autoClose={2000} className="toasty" limit={1} />
          </MainContainer>
        </div>
      </LoadingBridge>

    </ClerkProvider>
  )
}

export default memo(App)
