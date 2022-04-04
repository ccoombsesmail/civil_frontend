import React from 'react'
import ReactDOM from 'react-dom/client'
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

  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>,
  )
})
