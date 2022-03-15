import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './pages/App/Index'
import configureStore from './redux/store'
import 'react-toastify/dist/ReactToastify.min.css'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const preloadedState = {
    session: {
      currentUser: null,
    },
  }
  const store = configureStore(preloadedState)

  // In the connectivity SDK
  // class EssentialsConnector.DIDAdapter {
  //     createdIdTransaction(payload) {
  //         let web3provider = new WalletConnectWeb3Provider();
  //         let web3 = new Web3(web3provider);
  //         web3.methods.publishDID(payload);
  //     }
  // }

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>,
    root,
  )
})
