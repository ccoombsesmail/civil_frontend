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
import WelcomeModal from '../TutorialModals/WelcomeModal/WelcomeModal'

import LoginForm from '../Forms/LoginForm/LoginForm'
import { LoginFormVisibleStateContext } from '../../LoginFormVisibleStateContext'
import Footer from './Footer/Footer'
import SearchBar from '../SearchBar/Index'

const Dashboard = React.lazy(() => import('../pages/DashboardPage/Index'))

const Tribunal = React.lazy(() => import('../Tribunal/Index'))

const UserProfile = React.lazy(() => import('../pages/UserProfile/Index'))

const AuthFlow = React.lazy(() => import('../AuthFlow/Index'))

const MainContent = React.lazy(() => import('../MainContent/Index'))
const CreateTagModal = React.lazy(() => import('../Forms/CreateTagForm/Index'))


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
      // new UnsafeBurnerWalletAdapter()
    ],
    [network],
  )

  const screenWidth = window.screen.width

  const dontShowBgImage = pathname.includes('user') || pathname.includes('dashboard') || pathname.includes('authenticate')
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect={true}
      >
        <WalletModalProvider>
          <GlobalStyle />
          <Wrapper id="main-container">
            <WelcomeModal />
            <LoadingSpinner />
            <LoadingBridgeWithSpinner>
              {({ userId }) => (
                <UserContext.Provider value={userId}>
                  <LoginFormVisibleStateContext.Provider value={loginStateProviderValue}>
                    { screenWidth < 1250 ?   <><SearchBar /> <Footer /> </> : <Header /> }
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
                    
                    <CreateTagModal />
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
