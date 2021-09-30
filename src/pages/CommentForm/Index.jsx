import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useParams, useLocation } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'


import { Formik, Field, ErrorMessage } from 'formik'
import TextArea from '../CommonComponents/TextArea/Index'
import ThreeWayToggle from '../CommonComponents/ThreeWayToggle/Index'
import CheckBoxPressed from '../CommonComponents/CheckBoxPressed/Index'
import Button from '../CommonComponents/Button/Index'
import EmbededTweet from '../EmbededTweet/Index'

import { FormContainer, InputWrapper, Container, Toolbar } from './Style'
import commentActions from '../../redux/actions/comments'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateCommentForm = ({ subTopic }) => {
  const params = useParams()
  console.log(params)
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const topicId = pathname.match(uuidRegEx)[0]
  const subTopicId = pathname.match(uuidRegEx)[1]
  const { createComment } = bindActionCreators(commentActions, dispatch)
  const user = useSelector((s) => s.session.currentUser)
  const topic = useSelector((s) => s.topics.list)?.find((topic) => topic.id === topicId)
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
          if (!values.content) {
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
          console.log(subTopicId)
          createComment({ ...values, sentiment, subtopicId: subTopicId, createdBy: user.username })
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
                <EmbededTweet user={user} topic={topic} />
              <InputWrapper>
                <Field type="text" name="content" component={TextArea} width="100%" />
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
