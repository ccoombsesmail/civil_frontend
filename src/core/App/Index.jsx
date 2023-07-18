import React, {
  memo,
  Suspense,
  useMemo,
} from 'react'
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom'
import { ToastContainer, cssTransition } from 'react-toastify'

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

import Header from './Header/Index'
import LoadingSpinner from './LoadingSpinner/Index'
import { MainContainer, Content, Wrapper } from './Style'
import LoadingBridgeWithSpinner from './LoadingBridge/Index'
import LoadingPage from '../CommonComponents/LoadingPage/Index'
import { UserContext } from './UserContext/Index'
import { BgImage } from '../pages/Style'
import ErrorBoundary from '../CommonComponents/ErrorBoundry/Index'

const Dashboard = React.lazy(() => import('../pages/DashboardPage/Index'))

const Tribunal = React.lazy(() => import('../Tribunal/Index'))

const UserProfile = React.lazy(() => import('../UserProfile/Index'))

const AuthFlow = React.lazy(() => import('../AuthFlow/Index'))

const MainContent = React.lazy(() => import('../MainContent/Index'))

const elitpicIn = cssTransition({
  enter: 'slide-in-elliptic-top-fwd',
  exit: 'slide-out-elliptic-bottom-bck',
})

function App() {
  const { pathname } = useLocation()
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network, false), [network])
  const wallets = useMemo(
    () => [
      new TorusWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
    ],
    [network],
  )
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect={false}
      >
        <WalletModalProvider>
          <GlobalStyle />
          <Wrapper id="main-container">
            <LoadingSpinner />
            <LoadingBridgeWithSpinner>
              {({ userId }) => (
                <UserContext.Provider value={userId}>
                  <Header />
                  <MainContainer>
                    <ErrorBoundary>
                      <Content id="main-scroll">
                        { pathname.includes('user') || pathname.includes('dashboard') || pathname.includes('authenticate') ? null : <BgImage /> }
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
                            element={<Navigate replace to="/home/spaces" />}
                          />
                        </Routes>
                      </Content>

                      <ToastContainer
                        autoClose={2000}
                        className="toasty"
                        transition={elitpicIn}
                        limit={2}
                      />
                    </ErrorBoundary>

                  </MainContainer>

                </UserContext.Provider>
              )}
            </LoadingBridgeWithSpinner>

          </Wrapper>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default memo(App)
