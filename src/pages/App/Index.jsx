import React, {
  memo,
  useCallback,
  Suspense,
  useMemo,
} from 'react'
import {
  Routes, Route, Navigate, useNavigate,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ToastContainer, cssTransition } from 'react-toastify'
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-react'

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import GlobalStyle from '../../theme/styles'
import uiActionCreators from '../../redux/actions/ui'

import Header from './Header/Index'
import Modal from './Modal/Index'
import LoadingSpinner from './LoadingSpinner/Index'
import { MainContainer, Content, Wrapper } from './Style'
import LoadingBridgeWithSpinner from './LoadingBridge/Index'
import LoadingPage from '../CommonComponents/LoadingPage/Index'
import { CIVIC_USER } from '../../enums/session_type'
import { UserContext } from './UserContext/Index'

const Dashboard = React.lazy(() => import('../Dashboard/Index'))

const Tribunal = React.lazy(() => import('../Tribunal/Index'))

const UserProfile = React.lazy(() => import('../UserProfile/Index'))

const AuthFlow = React.lazy(() => import('../AuthFlow/Index'))

const MainContent = React.lazy(() => import('../MainContent/Index'))

const frontendApi = 'clerk.genuine.leech-38.lcl.dev'

const elitpicIn = cssTransition({
  enter: 'slide-in-elliptic-top-fwd',
  exit: 'slide-out-elliptic-bottom-bck',
})

const App = () => {
  const navigate = useNavigate()
  const memoNavigate = useCallback((to) => navigate(to))
  const showLoadingPage = useSelector((s) => s.ui.showLoadingPage)
  const dispatch = useDispatch()
  const { closeModal } = bindActionCreators(uiActionCreators, dispatch)
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  if (!localStorage.getItem('previousSignInMethod')) {
    localStorage.setItem('previousSignInMethod', CIVIC_USER)
  }
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    [network],
  )
  return (
    <ClerkProvider frontendApi={frontendApi} navigate={memoNavigate}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider
          wallets={wallets}
          autoConnect={
            localStorage.getItem('previousSignInMethod') === CIVIC_USER
          }
        >
          <WalletModalProvider>
            <GlobalStyle />
            <Wrapper id="main-container">
              <LoadingSpinner />
              <ClerkLoaded>
                <LoadingBridgeWithSpinner>
                  {({ userId }) => (
                    <UserContext.Provider value={userId}>
                      <Header />
                      <MainContainer>
                        { showLoadingPage ? <LoadingPage /> : null}
                        <Content>

                          <Routes>
                            <Route
                              path="/dashboard"
                              element={(
                                <Suspense fallback={<LoadingPage />}>
                                  <Dashboard />
                                </Suspense>
                          )}
                            />
                            <Route
                              path="/authenticate/*"
                              element={(
                                <Suspense fallback={<LoadingPage />}>
                                  <AuthFlow />
                                </Suspense>
                          )}
                            />
                            <Route
                              path="/user/:userId"
                              element={(
                                <Suspense fallback={<LoadingPage />}>
                                  <UserProfile />
                                </Suspense>
                          )}
                            />
                            <Route
                              path="/tribunal/:contentType/:contentId"
                              element={(
                                <Suspense fallback={<LoadingPage />}>
                                  <Tribunal />
                                </Suspense>
                          )}
                            />
                            <Route
                              path="/home/*"
                              element={(
                                <Suspense fallback={<LoadingPage />}>
                                  <MainContent userId={userId} />
                                </Suspense>
                          )}
                            />
                            <Route
                              path="/"
                              element={<Navigate replace to="/home/topics" />}
                            />
                          </Routes>
                          <Modal closeModal={closeModal} />
                        </Content>

                        <ToastContainer
                          autoClose={2000}
                          className="toasty"
                          transition={elitpicIn}
                        />
                      </MainContainer>
                    </UserContext.Provider>
                  )}
                </LoadingBridgeWithSpinner>
              </ClerkLoaded>
            </Wrapper>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ClerkProvider>
  )
}

export default memo(App)
