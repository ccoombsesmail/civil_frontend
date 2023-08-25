/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react'

import { Formik } from 'formik'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useLocation } from 'react-router-dom'
import { Button } from 'primereact/button'
import useHandleSubmit from './hooks/useHandleSubmit'
import useConfigFormErrors from '../../util/form_helpers/hooks/useConfigFormErrors'

import { DownArrowCircleSvg } from '../../../svgs/svgs'
import UploadMediaContainer from '../components/UploadMedia/Index'

import LexicalEditor from '../../CommonComponents/Lexical/App.tsx'

import { INIT_SPACE_FORM_VALUES } from '../../util/form_helpers/init_form_values'
import EmbedDropdown from '../components/EmbedDropdown/Index'

import { LexicalFormContext } from '../SpaceForm/LexicalFormContext'
import {
  Footer, SectionDescription, FormContainer, InputsContainer, Container, Left,
  Line, Arrow, FlexDiv,
} from '../SpaceForm/Style'
import DisplayMedia from '../components/DisplayMedia/Index'
import FormikController from '../Formik/FormikController/Index'
import Overlay from '../../CommonComponents/Overlay/Index'
import useGetLexicalTextContent from '../hooks/useGetLexicalTextContent'

const uuidRegEx = /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g

const VALIDATIONS = {
  title: { REQUIRED: true },
  // summary: { REQUIRED: true, MIN_LENGTH: 5 },
  // category: { REQUIRED: true },
}

function CreateDiscussionForm({ closeModal }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [imgFile, setImgFile] = useState(null)
  const [videoFile, setVideoFile] = useState(null)
  const [linkMetadata, setLinkMetadata] = useState(null)
  const validator = useConfigFormErrors(VALIDATIONS)

  const [rotate, setRotate] = useState(0)

  const [spaceId] = pathname.match(uuidRegEx)
  const [editor] = useLexicalComposerContext()

  const editorTextContent = useGetLexicalTextContent(editor)

  const handleSubmit = useHandleSubmit(linkMetadata, spaceId, closeModal, editor, editorTextContent)

  return (
    <Container id="discussion-form-container">
      <Formik
        initialValues={INIT_SPACE_FORM_VALUES}
        validate={validator}
        onSubmit={((values, params) => handleSubmit(values, params))}
      >
        {({ isSubmitting, setFieldValue, ...rest }) => (
          <FormContainer>
            <InputsContainer>
              <Left>
                <Overlay
                  header="Discussion Description"
                  body="Enter A Short Title To Indicate What You Would Like To Dicuss in Relation To The Current Space"
                  target="description_overlay"
                >
                  <SectionDescription> Discussion Title </SectionDescription>
                </Overlay>

                <FormikController
                  control="input"
                  label="Title*"
                  name="title"
                  type="text"
                  {...rest}
                />

                <Line />

                <Overlay
                  header="User Provided Content"
                  body="This could be an image, graphic, or video pertaining to the the discussion"
                  target="user_media_overlay"
                >
                  <SectionDescription> Add your own media content </SectionDescription>
                </Overlay>
                <FlexDiv direction="column">
                  <UploadMediaContainer
                    setFieldValue={setFieldValue}
                    imgFile={imgFile}
                    videoFile={videoFile}
                    setImgFile={setImgFile}
                    setVideoFile={setVideoFile}
                  />
                </FlexDiv>
                <DisplayMedia imgFile={imgFile} videoFile={videoFile} />
                <Line />

                <Overlay
                  header="Discussed Content"
                  body="Add a link to the external content which pertains to the discussion (
                    e.g a YouTube video, Tweet, publication, or anything else). Use this if the content you are linking is the main subject of the discussion"
                  target="external_link_overlay"
                >
                  <SectionDescription> Link to what you want to discuss here... </SectionDescription>
                </Overlay>
                <EmbedDropdown setLinkMetadata={setLinkMetadata} />
              </Left>
            </InputsContainer>
            <Line />
            <LexicalFormContext.Provider value={{
              setLinkMetadata,
            }}
            >
              <div id="insert-embed-node" className="w-full" />
              <LexicalEditor />
            </LexicalFormContext.Provider>

            <Arrow
              rotate={rotate}
              onClick={() => {
                setOpen(!open)
                setRotate(rotate + (open ? -180 : 180))
              }}
            >
              <DownArrowCircleSvg />
            </Arrow>

            <InputsContainer>
              <Inplace>
                <InplaceDisplay>References</InplaceDisplay>
                <InplaceContent style={{ whiteSpace: 'nowrap', width: '100%' }}>
                  <FlexDiv direction="column">
                    <div className="mb-5">
                      <Overlay
                        header="Supplemental Information"
                        body="Provide links to additional reading or evidence etc..."
                        target="supplemental_overlay"
                      >
                        <SectionDescription> Enter Links To Supplemental Evidence </SectionDescription>
                      </Overlay>

                    </div>

                    <FormikController
                      control="input"
                      label="Link To Evidence"
                      name="Evidence Link 1"
                      type="url"
                      {...rest}
                    />
                    <FormikController
                      control="input"
                      label="Link To Evidence"
                      name="Evidence Link 2"
                      type="url"
                      {...rest}
                    />
                    <FormikController
                      control="input"
                      label="Link To Evidence"
                      name="Evidence Link 3"
                      type="url"
                      {...rest}
                    />
                  </FlexDiv>

                </InplaceContent>
              </Inplace>
            </InputsContainer>
            <Footer>
              <Button
                raised
                type="button"
                disabled={isSubmitting || editorTextContent?.length < 6}
                onClick={closeModal}
                label="Cancel"
              />

              <Button
                raised
                type="submit"
                disabled={isSubmitting || editorTextContent?.length < 6}
                label="Submit"
                className="m-2"
              />
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}

export default CreateDiscussionForm
