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

// import 'primereact/resources/themes/lara-light-teal/theme.css'
import './theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

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
