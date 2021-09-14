import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { bindActionCreators } from 'redux'

import useCategorizeComments from './hooks/useCategorizeComments'

import subTopicActions from '../../redux/actions/subtopics'
import commentActions from '../../redux/actions/comments'

import usePermission from '../hooks/usePermission'
import CreateCommentForm from './components/CommentForm/Index'
import CommentColumn from './components/CommentColumn/Index'
import WavyBackground from '../CommonComponents/WavyBackground/Index'
import { Container, ColumnContainer } from './Style/index'

const SubTopicThread = () => {
  const { subTopicId } = useParams()
  const { loggedIn } = usePermission()
  const dispatch = useDispatch()
  const { getSubTopic, getAllComments } = bindActionCreators({...subTopicActions, ...commentActions}, dispatch)
  const subTopic = useSelector(state => state.subtopics.list)?.find((subTopic) => subTopic.id === subTopicId)
  const {positive: positiveComments, neutral: neutralComments, negative: negativeComments} = useCategorizeComments()
   useEffect(() => {
    if (loggedIn) {
      getSubTopic(subTopicId)
      getAllComments(subTopicId)
    }
  }, [loggedIn])
  console.log(positiveComments)
  return (
    <>
    <Container>
      <CreateCommentForm subTopic={subTopic} />
    </Container>
     <ColumnContainer>
        <CommentColumn comments={positiveComments} commentSentiment={"In Favor"} color="var(--m-secondary-background-color)"  />
        {/* <CommentColumn comments={comments}  commentSentiment={"Neutral"} color="var(--m-primary-background-color)" /> */}
        <CommentColumn comments={negativeComments}  commentSentiment={"Disagree"} color="var(--m-primary-color)" />
    </ColumnContainer>
    <WavyBackground color="blue"top="50%"  />
    </>
  )

}


export default SubTopicThread