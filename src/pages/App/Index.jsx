import React, {
  memo,
  useCallback,
  Suspense,
  useMemo,
} from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastContainer, cssTransition } from "react-toastify";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-react";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import {
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import GlobalStyle from "../../theme/styles";
import uiActionCreators from "../../redux/actions/ui";

import Header from "./Header/Index";
import Modal from "./Modal/Index";
import LoadingSpinner from "./LoadingSpinner/Index";
import { MainContainer, Content } from "./Style";
import LoadingBridgeWithSpinner from "./LoadingBridge/Index";
import "@solana/wallet-adapter-react-ui"
import LoadingPage from "../CommonComponents/LoadingPage/Index";

const Dashboard = React.lazy(() => import("../Dashboard/Index"));

const Tribunal = React.lazy(() => import("../Tribunal/Index"));

const UserProfile = React.lazy(() => import("../UserProfile/Index"));

const AuthFlow = React.lazy(() => import("../AuthFlow/Index"));

const MainContent = React.lazy(() => import("../MainContent/Index"));

const frontendApi = "clerk.genuine.leech-38.lcl.dev";

const elitpicIn = cssTransition({
  enter: "slide-in-elliptic-top-fwd",
  exit: "slide-out-elliptic-bottom-bck",
});

const App = () => {
  const navigate = useNavigate();
  const memoNavigate = useCallback((to) => navigate(to));
  const dispatch = useDispatch();
  const { closeModal } = bindActionCreators(uiActionCreators, dispatch);
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  return (
    <ClerkProvider frontendApi={frontendApi} navigate={memoNavigate}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider
          wallets={wallets}
          autoConnect={
            localStorage.getItem("previousSignInMethod") === "civic_user"
          }
        >
          <WalletModalProvider>
            <GlobalStyle />
            <div
              id="main-container"
              style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
                          element={
                            <Suspense fallback={<LoadingPage />}>
                              <Dashboard />
                            </Suspense>
                          }
                        />
                        <Route
                          path="/authenticate/*"
                          element={
                            <Suspense fallback={<LoadingPage />}>
                              <AuthFlow />
                            </Suspense>
                          }
                        />
                        <Route
                          path="/user/:userId"
                          element={
                            <Suspense fallback={<LoadingPage />}>
                              <UserProfile />
                            </Suspense>
                          }
                        />
                        <Route
                          path="/tribunal/:contentType/:contentId"
                          element={
                            <Suspense fallback={<LoadingPage />}>
                              <Tribunal />
                            </Suspense>
                          }
                        />
                        <Route
                          path="/home/*"
                          element={
                            <Suspense fallback={<LoadingPage />}>
                              <MainContent />
                            </Suspense>
                          }
                        />
                        <Route
                          path="/"
                          element={<Navigate replace to="/home/topics" />}
                        />
                      </Routes>
                    </Content>

                    <Modal closeModal={closeModal} />
                    <ToastContainer
                      autoClose={2000}
                      className="toasty"
                      transition={elitpicIn}
                    />
                  </MainContainer>
                </LoadingBridgeWithSpinner>
              </ClerkLoaded>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ClerkProvider>
  );
};

export default memo(App);
