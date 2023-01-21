/* eslint-disable max-len */
import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Formik } from 'formik'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import Button from '../../CommonComponents/Button/Index'
import UserInfoHeader from '../../CommonComponents/UserInfoHeader/Index'
import AnimatedCheckmark from '../../CommonComponents/AnimatedCheckmark/Index'
import PlaygroundEditorTheme from '../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'

import useGetStateEffect from './hooks/useGetStateEffect'
import useHandleSubmit from './hooks/useHandleSubmit'

import { getTimeSince } from '../../../generic/string/dateFormatter'
import { checkToxicity } from '../../../api/v1/comments/comments_api_util'
import ReadOnlyEditor from '../../CommonComponents/Lexical/ReadOnlyEditor.tsx'
import { initialConfig } from '../../CommonComponents/Lexical/App.tsx'

import {
  EditorsWrapper, ToxicityControls,
} from './Style'
import {
  Line, Footer, Container, FormContainer,
} from '../TopicForm/Style'
import LexicalEditor from './components/LexicalEditor/Index'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

const CreateCommentForm = ({ modalProps, closeModal }) => {
  const [richTextEditorData, setRichTextEditorData] = useState({
    lexicalContent: '',
    rawText: '',
  })
  const [toxicityScore, setToxicityScore] = useState(null)

  const { discussionId, contentId, commentId } = useParams()


  // const { pathname } = useLocation()
  // const contentId = pathname.match(uuidRegEx)[0]
  // const discussionId = pathname.match(uuidRegEx)[1]
  const compState = useGetStateEffect(contentId, discussionId, commentId, modalProps)
  const handleSubmit = useHandleSubmit(compState, richTextEditorData.lexicalContent, richTextEditorData.rawText, modalProps, discussionId || contentId, contentId, closeModal)
  const initialConfigReadOnly = {
    editorState: JSON.parse(compState?.lexicalRawContent),
    namespace: 'Civil3',
    nodes: [...PlaygroundNodes],
    onError: (error) => {
      throw error
    },
    editable: false,
    theme: PlaygroundEditorTheme,
  }
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
          if (richTextEditorData.lexicalContent.length === 0) {
            errors.content = 'Write Something'
          }
          return errors
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <>
            <FormContainer>
              <UserInfoHeader
                iconSrc={compState.createdByIconSrc}
                username={compState.createdBy}
                time={getTimeSince(compState.time)}
              />

              <EditorsWrapper>
                <LexicalComposer initialConfig={initialConfigReadOnly}>
                  <ReadOnlyEditor />
                </LexicalComposer>
                <Line />
                <LexicalComposer initialConfig={initialConfig}>
                  <LexicalEditor setRichTextEditorData={setRichTextEditorData} />
                </LexicalComposer>
              </EditorsWrapper>
              <Line />
              <Footer>

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
              </Footer>

            </FormContainer>

          </>
        )}
      </Formik>
    </Container>

  )
}

export default CreateCommentForm
