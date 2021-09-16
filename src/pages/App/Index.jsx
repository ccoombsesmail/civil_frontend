import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import GlobalStyle from '../../theme/styles'

import uiActionCreators from '../../redux/actions/ui'
import Header from './Header/Index'
import Modal from './Modal/Index'
import Topics from '../Topics/Index'
import SubTopics from '../SubTopics/Index'
import SubTopicThread from '../SubTopicThread/Index'
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css'
// import getcrap from '../../api/v1/news/index'

const App = () => {
  const dispatch = useDispatch()
  const { closeModal } = bindActionCreators(uiActionCreators, dispatch)
  return (
    <div style={{ width: '100vw' }}>
      <GlobalStyle />
      <Header />
      <Modal closeModal={closeModal} />
      <Switch>
        <Route path="/topics/:topicId/subtopics/:subTopicId">
          <SubTopicThread />
        </Route>
        <Route path="/topics/:topicId/subtopics/">
          <SubTopics />
        </Route>
        <Route path="/">
          {/* <iframe width="900" height="1600" src="https://rss.app/embed/v1/wall/OJXzXFISzFgalNz5" frameborder="0"></iframe> */}
          <Topics />
        </Route>
      </Switch>
    </div>
  )
}

export default App
