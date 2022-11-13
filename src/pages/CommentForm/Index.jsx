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
  const [richTextEditorData, setRichTextEditorData] = useState({
    rawHTML: '',
    content: '',
    rawText: '',
  })
  const [toxicityScore, setToxicityScore] = useState(null)

  const { pathname } = useLocation()
  const contentId = pathname.match(uuidRegEx)[0]
  const subtopicId = pathname.match(uuidRegEx)[1]
  const compState = useGetStateEffect(contentId, subtopicId, modalProps)
  const handleSubmit = useHandleSubmit(compState, richTextEditorData.rawHTML, richTextEditorData.rawText, modalProps, subtopicId || contentId, contentId)
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
          if (richTextEditorData.content.length === 0) {
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
                  <RichTextEditor
                    content={richTextEditorData.content}
                    setContent={setRichTextEditorData}
                    setToxicityScore={setToxicityScore}
                  />
                </InputWrapper>
              </Modal.Body>
              <Modal.Footer>
                <ToxicityControls>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        type="button"
                        onClick={() => checkToxicity({ content: richTextEditorData.rawText }).then((res) => {
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
