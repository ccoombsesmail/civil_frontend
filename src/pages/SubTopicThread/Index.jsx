import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { bindActionCreators } from 'redux'

import subTopicActions from '../../redux/actions/subtopics'
import usePermission from '../hooks/usePermission'
import CreateCommentForm from './components/CommentForm/Index'
import CommentColumn from './components/CommentColumn/Index'

import { Container, ColumnContainer } from './Style/index'

const SubTopicThread = () => {
  const { subTopicId } = useParams()
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { getSubTopic } = bindActionCreators({...subTopicActions}, dispatch)
  const subTopic = useSelector(state => state.subtopics.list)?.find((subTopic) => subTopic.id === subTopicId)
  const comments = useSelector(state => state.comments.list)
   useEffect(() => {
    if (loggedIn) {
      getSubTopic(subTopicId)
    }
  }, [loggedIn])

  return (
    <>
    <Container>
      <CreateCommentForm subTopic={subTopic} />
    </Container>
     <ColumnContainer>
        <CommentColumn comments={comments} commentSentiment={"In Favor"} />
        <CommentColumn comments={comments}  commentSentiment={"Neutral"} />
        <CommentColumn comments={comments}  commentSentiment={"Disagree"} />
    </ColumnContainer>
    </>
  )

}


export default SubTopicThread