// import "../wdyr"
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './core/App/Index'
import configureStore from './redux/store.ts'
import 'react-toastify/dist/ReactToastify.min.css'


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  ReactDOM.createRoot(root).render(
    <Provider store={configureStore}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>,
  )
})
