import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useLocation } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'


import { Formik, Field } from 'formik'
import TextArea from '../CommonComponents/TextArea/Index'
import CheckBoxPressed from '../CommonComponents/CheckBoxPressed/Index'
import Button from '../CommonComponents/Button/Index'
import UserInfoHeader from '../CommonComponents/UserInfoHeader/Index'

import { FormContainer, InputWrapper, Container, Toolbar, Description } from './Style'

import { getTimeSince } from '../../generic/string/dateFormatter'
import commentActions from '../../redux/actions/comments'
import useSetInnerHtml from '../hooks/useSetInnerHtml'
import RichTextEditor from '../CommonComponents/RichTextEditor/Index'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateCommentForm = ({ subTopic }) => {
  const descRef = useRef(null)
  const [content, setContent] = useState("")
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const topicId = pathname.match(uuidRegEx)[0]
  const subTopicId = pathname.match(uuidRegEx)[1]
  const { createComment } = bindActionCreators(commentActions, dispatch)
  const user = useSelector((s) => s.session.currentUser)
  const topic = useSelector((s) => s.topics.list)?.find((topic) => topic.id === topicId)
  useSetInnerHtml(descRef, topic?.description)
  return (
    <Container>
      <Formik
        initialValues={{ 
          content: '', 
          positive: '',
          negative: '',
          neutral: '',
        }}
        validate={(values) => {
          const errors = {}
          if (content.length === 0) {
            errors.content = 'Write Something'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm  }) => {
          const { positive, negative, neutral} = values
          let sentiment;
          if (positive) sentiment = 'positive'
          if (neutral) sentiment = 'neutral'
          if (negative) sentiment = 'negative'
          createComment({ ...values, content, sentiment, subtopicId: subTopicId, createdBy: user.username })
          setSubmitting(false)
          resetForm({})
        }}
      >
        {({ isSubmitting }) => (
          <>
          <Modal.Header closeButton>
              {/* <Modal.Title>...</Modal.Title> */}
          </Modal.Header>
            <Modal.Body>
              <FormContainer>
                {/* <EmbededTweet user={user} topic={topic} /> */}
                <UserInfoHeader iconSrc={topic?.createdByIconSrc} username={user?.username} time={getTimeSince(topic?.createdAt)} />
                <Description>
                  <span ref={descRef} />
                </Description>
              <InputWrapper>
                <RichTextEditor content={content} setContent={setContent} />
                {/* <Field type="text" name="content" component={TextArea} width="100%" /> */}
                <section>
                  <Toolbar> 
                    <Field text="Positive" type="checkbox" name="positive" component={CheckBoxPressed} width="100%" color='var(--m-secondary-background-color)' />
                    <Field text="Neutral" type="checkbox" name="neutral" component={CheckBoxPressed} width="100%" color='var(--m-primary-background-color)' />
                    <Field text="Negative" type="checkbox" name="negative" component={CheckBoxPressed} width="100%" color='var(--m-primary-color)' />
                  </Toolbar>
                  <Button small={true} type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </section>
              </InputWrapper>
             </FormContainer>
            </Modal.Body>
          </>
        )}
      </Formik>
    </Container>

  )
}

export default CreateCommentForm
