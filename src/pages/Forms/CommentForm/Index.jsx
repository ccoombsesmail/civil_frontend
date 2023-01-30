/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import Button from '../../CommonComponents/Button/Index'
import UserInfoHeader from '../../CommonComponents/UserInfoHeader/Index'
import AnimatedCheckmark from '../../CommonComponents/AnimatedCheckmark/Index'
import PlaygroundEditorTheme from '../../CommonComponents/Lexical/themes/PlaygroundEditorTheme.ts'
import PlaygroundNodes from '../../CommonComponents/Lexical/nodes/PlaygroundNodes.ts'

import useHandleSubmit from './hooks/useHandleSubmit'

import { getTimeSince } from '../../../generic/string/dateFormatter'
import { checkToxicity } from '../../../api/v1/comments/comments_api_util'
import ReadOnlyEditor from '../../CommonComponents/Lexical/ReadOnlyEditor.tsx'

import {
  EditorsWrapper, ToxicityControls,
} from './Style'
import {
  Line, Footer, Container, FormContainer,
} from '../TopicForm/Style'
import LexicalEditor from './components/LexicalEditor/Index'

const CreateCommentForm = ({ closeModal, commentFormState }) => {
  const [richTextEditorData, setRichTextEditorData] = useState({
    lexicalContent: '',
    rawText: '',
  })

  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    const removeUpdateListener = editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const jsonString = JSON.stringify(editorState)
        setRichTextEditorData((prev) => ({
          ...prev,
          lexicalContent: jsonString,
        }))
      })
    })

    return () => removeUpdateListener()
  }, [])

  const [toxicityScore, setToxicityScore] = useState(null)
  const {
    lexicalRawContent, createdByIconSrc, createdBy, time,
  } = commentFormState

  const handleSubmit = useHandleSubmit(
    commentFormState, richTextEditorData, closeModal,
  )
  const initialConfigReadOnly = {
    editorState: lexicalRawContent,
    namespace: 'Civil-Comment-Form',
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
                iconSrc={createdByIconSrc}
                username={createdBy}
                time={getTimeSince(time)}
              />

              <EditorsWrapper>
                <LexicalComposer initialConfig={initialConfigReadOnly}>
                  <ReadOnlyEditor />
                </LexicalComposer>
                <Line />
                <LexicalEditor setRichTextEditorData={setRichTextEditorData} />
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
