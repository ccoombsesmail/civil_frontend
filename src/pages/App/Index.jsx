import React, {
  memo, useCallback, Suspense, useState, useEffect, useMemo,
} from 'react'
import {
  Routes, Route, Navigate, useNavigate,
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ToastContainer, cssTransition } from 'react-toastify'
import {
  ClerkLoaded, ClerkProvider,
} from '@clerk/clerk-react'

// import { connectivity } from '@elastosfoundation/elastos-connectivity-sdk-js'
// import { EssentialsConnector } from '@elastosfoundation/essentials-connector-client-browser'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import useFetchAppData from './hooks/useFetchAppData'
import GlobalStyle from '../../theme/styles'
import uiActionCreators from '../../redux/actions/ui'

import AuthFlow from '../AuthFlow/Index'
import Header from './Header/Index'
import Modal from './Modal/Index'
import LoadingSpinner from './LoadingSpinner/Index'
import { MainContainer, Content } from './Style'
import UserProfile from '../UserProfile/Index'
import useSessionType from '../hooks/permissions/useSessionType'
import IsLoadingHOC from '../../hocs/IsLoadingHOC'
import useInitUserSession from '../hooks/auth/useInitUserSession'
import MainContent from '../MainContent/Index'
import useSetupInterceptorsEffect from '../hooks/auth/useSetupInterceptorsEffect'

const Dashboard = React.lazy(() => import(
  /* webpackChunkName: "dashboard" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ '../Dashboard/Index'
))

const Tribunal = React.lazy(() => import(
  /* webpackChunkName: "tribunal" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  /* webpackPreload: true */ '../Tribunal/Index'
))

// const frontendApi = 'clerk.legible.tortoise-0.lcl.dev'
const frontendApi = 'clerk.genuine.leech-38.lcl.dev'

const LoadingBridge = ({ children, setIsLoading }) => {
  const [isUserDataPending, setIsUserDataPending] = useState(true)
  const sessionType = useSessionType()
  useSetupInterceptorsEffect()

  useInitUserSession()
  useFetchAppData()
  useEffect(() => {
    setIsLoading(true)
    const get = async () => {
      const { signedInViaClerk, signedInViaDID } = sessionType
      if (signedInViaClerk === undefined || signedInViaDID === undefined) {
        setIsUserDataPending(true)
        return
      }
      setIsUserDataPending(false)
      setIsLoading(false)
    }
    get()
  }, [sessionType])

  return (
    <>
      {!isUserDataPending && children }
    </>
  )
}

const LoadingBridgeWithSpinner = IsLoadingHOC(LoadingBridge, '300px', true)

const elitpicIn = cssTransition({
  enter: 'slide-in-elliptic-top-fwd',
  exit: 'slide-out-elliptic-bottom-bck',
})

const App = () => {
  // const essentialsConnector = new EssentialsConnector()
  // connectivity.registerConnector(essentialsConnector)
  const navigate = useNavigate()
  const memoNavigate = useCallback((to) => navigate(to))
  const dispatch = useDispatch()
  const { closeModal } = bindActionCreators(uiActionCreators, dispatch)
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new SolletWalletAdapter({ network }),
    ],
    [network],
  )

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={memoNavigate}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>

            <GlobalStyle />
            <div
              id="main-container"
              style={{
                width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              }}
            >
              <LoadingSpinner />
              <ClerkLoaded>
                <Header />
                <LoadingBridgeWithSpinner>

                  <MainContainer>

                    <Content>
                      <Routes>
                        <Route
                          path="/dashboard"
                          element={(
                            <Suspense fallback={<div>Loading...</div>}>
                              <Dashboard />
                            </Suspense>
                        )}
                        />
                        <Route path="/authenticate/*" element={<AuthFlow />} />
                        <Route
                          path="/user/:userId"
                          element={(
                            <>
                              <UserProfile />
                            </>
                      )}
                        />
                        <Route
                          path="/tribunal/:contentType/:contentId"
                          element={(
                            <Suspense fallback={<div>Loading...</div>}>
                              <Tribunal />
                            </Suspense>
                  )}
                        />
                        <Route path="/home/*" element={<MainContent />} />
                        <Route path="/" element={<Navigate replace to="/home/topics" />} />
                      </Routes>
                    </Content>

                    <Modal closeModal={closeModal} />
                    <ToastContainer autoClose={2000} className="toasty" transition={elitpicIn} />
                  </MainContainer>
                </LoadingBridgeWithSpinner>

              </ClerkLoaded>
            </div>
          </WalletModalProvider>

        </WalletProvider>
      </ConnectionProvider>
    </ClerkProvider>
  )
}

export default memo(App)
