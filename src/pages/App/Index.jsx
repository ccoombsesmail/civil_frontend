import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
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
import Sidebar from './Sidebar/Index'
import Dashboard from '../Dashboard/Index'
import { MainContainer, Content } from './Style'
import RichTextEditor from '../CommonComponents/RichTextEditor/Index'
const App = () => {
  const dispatch = useDispatch()
  const { closeModal } = bindActionCreators(uiActionCreators, dispatch)
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <GlobalStyle />
      <Header />
      <MainContainer >
        <Sidebar />
        <Content >
          <Switch>
            <Route path="/topics/:topicId/subtopics/">
              <SubTopics />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
            {/* <Route render={() => <Redirect to="/topics" />} /> */}
          </Switch>
        </Content>
        <Modal closeModal={closeModal} />
      </MainContainer>
    </div>
  )
}

export default App
