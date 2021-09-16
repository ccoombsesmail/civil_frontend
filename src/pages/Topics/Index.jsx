import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import usePermission from '../hooks/usePermission'
import uiActionCreators from '../../redux/actions/ui'
import topicActionCreators from '../../redux/actions/topics'

import { CREATE_TOPIC } from '../App/Modal/Index'
import TopicItem from './components/TopicItem/Index'
import ThemeButton from '../CommonComponents/Button/Index'
import { CardContainer, Container } from './Style'
import QuoteBox from '../CommonComponents/QuoteBox/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'
import { getTweet } from '../../api/v1/tweets'
const Topics = () => {
  const [html, setHtml] = useState(null)
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { openModal, getAllTopics } = bindActionCreators({ ...uiActionCreators, ...topicActionCreators }, dispatch)
  const topics = useSelector((s) => s.topics.list) || []
  const user = useSelector((s) => s.session.currentUser)
  console.log(html)
  useEffect(() => {
    if (loggedIn) getAllTopics()
    getTweet('https://twitter.com/brianxin/status/1438349439907680258')
      .then(res => {
        const stringRep = res.data
        console.log(stringRep)
        const htmlObject = document.createElement('div');
        htmlObject.innerHTML = stringRep.toString();
        document.getElementById('tweet').appendChild(htmlObject)
        setHtml(htmlObject)
        // ReactDOM.render(htmlObject, document.getElementById('tweet'))
      })
  }, [loggedIn])

  if (!loggedIn) return null
  return (
    <>
      <Container>
        <QuoteBox>
          <QuoteBox.QuoteText>
            Hello <b>{`${user?.username}`}</b>
            <br />
            Explore Some Topics or Create Your Own...
          </QuoteBox.QuoteText>

          <ThemeButton type="button" onClick={() => openModal(CREATE_TOPIC)}>
            Create Topic +
          </ThemeButton>
        </QuoteBox>
        <div id='tweet'> </div>
        {/* <div id="tweet" /> */}
        <CardContainer>
          {
            topics.map((topic) => <TopicItem key={topic.id} topic={topic} />)
          }
        </CardContainer>
        <WavyBackground color="blue"top="100%" />
        {/* <WavyBackground color="red" top="130%" />
        <WavyBackground color="beige" top="180%" /> */}

      </Container>
    </>
  )
}

export default Topics
