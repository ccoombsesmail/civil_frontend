import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Provider } from 'react-redux'

import App from './pages/App/Index'
import configureStore from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const token = JSON.parse(localStorage.getItem('jwt'))
  let store
  if (token) {
    const preloadedState = {
      session: {
        currentUser: jwtDecode(token),
      },
    }
    store = configureStore(preloadedState)
  } else {
    const preloadedState = {
      session: {
        currentUser: null,
      },
    }
    store = configureStore(preloadedState)
  }

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
