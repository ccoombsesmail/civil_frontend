/* eslint-disable max-len */
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useLocation } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

import { Formik, Field } from 'formik'
import CheckBoxPressed from '../CommonComponents/CheckBoxPressed/Index'
import Button from '../CommonComponents/Button/Index'
import UserInfoHeader from '../CommonComponents/UserInfoHeader/Index'

import {
  FormContainer, InputWrapper, Container, Toolbar, Description,
} from './Style'

import { getTimeSince } from '../../generic/string/dateFormatter'
import commentActions from '../../redux/actions/comments'
import useSetInnerHtml from '../hooks/useSetInnerHtml'
import RichTextEditor from '../CommonComponents/RichTextEditor/Index'
import useGetStateEffect from './hooks/useGetStateEffect'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateCommentForm = () => {
  const descRef = useRef(null)
  const [content, setContent] = useState('')
  const [rawText, setRawText] = useState('')

  const { pathname, state: locationState } = useLocation()
  const topicId = pathname.match(uuidRegEx)[0]
  const subtopicId = pathname.match(uuidRegEx)[1]

  const compState = useGetStateEffect(topicId, subtopicId, locationState)
  const dispatch = useDispatch()
  const { createComment } = bindActionCreators(commentActions, dispatch)
  useSetInnerHtml(descRef, compState.htmlContent)
  return (
    <Container>
      <Formik
        initialValues={{
          content: '',
          positive: '',
          negative: '',
          neutral: '',
        }}
        validate={() => {
          const errors = {}
          if (content.length === 0) {
            errors.content = 'Write Something'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const { positive, negative, neutral } = values
          // const { subtopicId: } = compState
          let sentiment
          if (positive) sentiment = 'positive'
          if (neutral) sentiment = 'neutral'
          if (negative) sentiment = 'negative'
          createComment({
            ...values,
            content,
            sentiment: sentiment || 'positive',
            parentId: locationState?.commentId || null,
            subtopicId,
            createdBy: compState.username,
            rootId: compState.rootParentCommentId,
            rawText,
          })
          setSubmitting(false)
          resetForm({})
        }}
      >
        {({ isSubmitting }) => (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Write Your Reply</Modal.Title>
            </Modal.Header>
            <FormContainer>
              <Modal.Body>
                <UserInfoHeader
                  iconSrc={compState.createdByIconSrc}
                  username={compState.createdBy}
                  time={getTimeSince(compState.time)}
                />
                <Description>
                  <span ref={descRef} />
                </Description>
                <InputWrapper>
                  <RichTextEditor content={content} setContent={setContent} setRawText={setRawText} />
                  {/* <section>
                    { compState.type === 'TOPIC_REPLY' && (
                      <Toolbar>
                        <Field text="For" type="checkbox" name="positive" component={CheckBoxPressed} width="100%" color="var(--m-secondary-background-color)" />
                        <Field text="Meme" type="checkbox" name="neutral" component={CheckBoxPressed} width="100%" color="var(--m-primary-background-color)" />
                        <Field text="Against" type="checkbox" name="negative" component={CheckBoxPressed} width="100%" color="var(--m-primary-color)" />
                      </Toolbar>
                    )}

                  </section> */}
                </InputWrapper>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Modal.Footer>
            </FormContainer>
          </>
        )}
      </Formik>
    </Container>

  )
}

export default CreateCommentForm
