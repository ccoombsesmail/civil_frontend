import React, {
  memo,
  Suspense,
  useMemo,
  useState,
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
  UnsafeBurnerWalletAdapter
} from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { Dialog } from 'primereact/dialog'
import GlobalStyle from '../../theme/styles'

import Header from './Header/Index'
import LoadingSpinner from './LoadingSpinner/Index'
import { MainContainer, Content, Wrapper } from './Style'
import LoadingBridgeWithSpinner from './LoadingBridge/Index'
import LoadingPage from '../CommonComponents/LoadingPage/Index'
import { UserContext } from './UserContext/Index'
import { BgImage } from '../pages/Style'
import ErrorBoundary from '../CommonComponents/ErrorBoundry/Index'
import LoginForm from '../Forms/LoginForm/LoginForm'
import { LoginFormVisibleStateContext } from '../../LoginFormVisibleStateContext'

const Dashboard = React.lazy(() => import('../pages/DashboardPage/Index'))

const Tribunal = React.lazy(() => import('../Tribunal/Index'))

const UserProfile = React.lazy(() => import('../pages/UserProfile/Index'))

const AuthFlow = React.lazy(() => import('../AuthFlow/Index'))

const MainContent = React.lazy(() => import('../MainContent/Index'))

const elitpicIn = cssTransition({
  enter: 'slide-in-elliptic-top-fwd',
  exit: 'slide-out-elliptic-bottom-bck',
})

function App() {
  const { pathname } = useLocation()
  const [loginFormVisible, setLoginFormVisible] = useState(false)

  const loginStateProviderValue = useMemo(() => ({
    setLoginFormVisible,
  }), [])

  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network, false), [network])
  const wallets = useMemo(
    () => [
      new TorusWalletAdapter(),
      // new GlowWalletAdapter(),
      // new UnsafeBurnerWalletAdapter()
    ],
    [network],
  )
  console.log(wallets)
  const dontShowBgImage = pathname.includes('user') || pathname.includes('dashboard') || pathname.includes('authenticate')
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
                  <LoginFormVisibleStateContext.Provider value={loginStateProviderValue}>
                    <Header />
                    <Dialog header="You Must Be Logged In To Do That" visible={loginFormVisible} onHide={() => setLoginFormVisible(false)}>
                      <LoginForm closeModal={() => setLoginFormVisible(false)} />
                    </Dialog>
                    <MainContainer>
                      <ErrorBoundary>
                        <Content id="main-scroll">
                          { dontShowBgImage ? null : <BgImage /> }
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
                  </LoginFormVisibleStateContext.Provider>

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
