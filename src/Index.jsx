import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { Provider } from 'react-redux'
import App from './pages/App/Index'
import configureStore from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>,
    root,
  )
})
