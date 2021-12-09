/* eslint-disable max-len */
import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import { Formik } from 'formik'

import Button from '../CommonComponents/Button/Index'
import UserInfoHeader from '../CommonComponents/UserInfoHeader/Index'
import AnimatedCheckmark from '../CommonComponents/AnimatedCheckmark/Index'
import RichTextEditor from '../CommonComponents/RichTextEditor/Index'

import useSetInnerHtml from '../hooks/useSetInnerHtml'
import useGetStateEffect from './hooks/useGetStateEffect'
import useHandleSubmit from './hooks/useHandleSubmit'

import { getTimeSince } from '../../generic/string/dateFormatter'
import { checkToxicity } from '../../api/v1/comments/comments_api_util'

import {
  FormContainer, InputWrapper, Container, Description, ToxicityControls,
} from './Style'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateCommentForm = ({ modalProps }) => {
  const descRef = useRef(null)
  const [content, setContent] = useState('')
  const [rawText, setRawText] = useState('')
  const [toxicityScore, setToxicityScore] = useState(null)

  const { pathname } = useLocation()
  const topicId = pathname.match(uuidRegEx)[0]
  const subtopicId = pathname.match(uuidRegEx)[1]

  const compState = useGetStateEffect(topicId, subtopicId, modalProps)
  const handleSubmit = useHandleSubmit(compState, content, rawText, modalProps, subtopicId)
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
        onSubmit={handleSubmit}
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
                  <RichTextEditor content={content} setContent={setContent} setRawText={setRawText} setToxicityScore={setToxicityScore} />
                </InputWrapper>
              </Modal.Body>
              <Modal.Footer>
                <ToxicityControls>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        type="button"
                        onClick={() => checkToxicity({ content: rawText }).then((res) => {
                          setToxicityScore(res.data.SEVERE_TOXICITY.toFixed(2))
                        })}
                      >
                        Check Toxicity Score
                      </Button>
                      <AnimatedCheckmark toxicityScore={toxicityScore} />
                    </div>
                    <p>{ toxicityScore && `Your toxicity score is ${toxicityScore}`}</p>
                  </div>
                </ToxicityControls>
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
