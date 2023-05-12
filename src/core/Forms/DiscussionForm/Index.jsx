import React, { useEffect, useState } from 'react'

import { Formik, Field } from 'formik'
import { Collapse, Fade } from 'react-bootstrap'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useLocation } from 'react-router-dom'
import useHandleSubmit from './hooks/useHandleSubmit'
import useConfigFormErrors from '../../util/form_helpers/hooks/useConfigFormErrors'

import { DownArrowCircleSvg } from '../../../svgs/svgs'
import Input from '../../CommonComponents/Form/Input3/Index'
import Select from '../../CommonComponents/Form/Select/Index'
import ExpandButton from '../../CommonComponents/Buttons/ExpandButton/Index'
import UploadMediaContainer from '../components/UploadMedia/Index'

import ThemeTooltip from '../../CommonComponents/Tooltip/Index'

import LexicalEditor from '../../CommonComponents/Lexical/App.tsx'

import { INIT_SPACE_FORM_VALUES } from '../../util/form_helpers/init_form_values'
import useGetLinkMetaDataOnBlur from '../hooks/useGetLinkMetaDataOnBlur'
import EmbedDropdown from '../components/EmbedDropdown/Index'

import { LexicalFormContext } from '../SpaceForm/LexicalFormContext'
import {
  FlexDivLink, Footer, SectionDescription, FormContainer, InputsContainer, Container, Left,
  Line, Arrow, FlexDiv,
} from '../SpaceForm/Style'
import DisplayMedia from '../components/DisplayMedia/Index'

const uuidRegEx = new RegExp(/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g)

function CreateDiscussionForm({ closeModal }) {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [imgFile, setImgFile] = useState(null)
  const [videoFile, setVideoFile] = useState(null)
  // const [metaData, setMetaData] = useState(null)

  const [rotate, setRotate] = useState(0)
  const [richTextEditorContent, setRichTextEditorContent] = useState('')

  const [spaceId] = pathname.match(uuidRegEx)
  const [editor] = useLexicalComposerContext()

  // useEffect(() => {
  //   const removeUpdateListener = editor.registerUpdateListener(({ editorState }) => {
  //     editorState.read(() => {
  //       const jsonString = JSON.stringify(editorState)
  //       setRichTextEditorContent(jsonString)
  //     })
  //   })

  //   return () => removeUpdateListener()
  // }, [])

  const { externalContentUrl, setContentUrl } = useGetLinkMetaDataOnBlur()
  const handleSubmit = useHandleSubmit(externalContentUrl?.data, spaceId, closeModal, editor)

  return (
    <Container>
      <Formik
        initialValues={INIT_SPACE_FORM_VALUES}
        // validate={validator}
        onSubmit={((values, params) => handleSubmit(values, params, richTextEditorContent, externalContentUrl))}
      >
        {({ isSubmitting, setFieldValue }) => (
          <FormContainer>
            <InputsContainer>
              <Left>
                <FlexDiv>
                  <SectionDescription> Discussion Title </SectionDescription>
                  <ThemeTooltip
                    tooltipHeader="Space Description"
                    tooltipText="Enter A Short Title To Indicate What You Would Like To Dicuss in Relation To The Current Space"
                  />
                </FlexDiv>
                <Field type="text" name="title" label="Title*" component={Input} placeholder="Enter A Space Title" />
                <Line />

                <FlexDiv>
                  <SectionDescription> Add your own media content </SectionDescription>
                  <ThemeTooltip
                    tooltipHeader="User Provided Content"
                    tooltipText="This could be an image, graphic, or video pertaining to the the discussion"
                  />
                </FlexDiv>
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

                <FlexDiv>
                  <SectionDescription>
                    Link to what you want to discuss here...
                  </SectionDescription>
                  <ThemeTooltip
                    tooltipHeader="Discussed Content"
                    tooltipText="Add a link to the external content which pertains to the discussion (
                        e.g a YouTube video, Tweet, publication, or anything else). Use this if the content you are linking is the main subject of the discussion"
                  />
                </FlexDiv>
                <FlexDivLink className="toolbar" id="embed-toolbar">
                  <EmbedDropdown setContentUrl={setContentUrl} />
                </FlexDivLink>
              </Left>
            </InputsContainer>
            <Line />
            <LexicalFormContext.Provider value={{
              setContentUrl,
            }}
            >
              <div id="insert-embed-node" />
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
            <Fade in={!open}>
              <div>
                References
              </div>
            </Fade>
            <InputsContainer>
              <Collapse in={open}>
                <div style={{ whiteSpace: 'nowrap', width: '100%' }}>
                  <FlexDiv>
                    <h2> Enter Links To Supplemental Evidence </h2>
                    <ThemeTooltip
                      tooltipText="Provide links to additional reading or evidence etc..."
                      tooltipHeader="Supplemental Information"
                    />
                  </FlexDiv>
                  <Field type="url" name="Evidence Link 1" component={Input} width="100%" label="Link To Evidence" />
                  <Field type="url" name="Evidence Link 2" component={Input} width="100%" label="Link To Evidence" />
                  <Field type="url" name="Evidence Link 3" component={Input} width="100%" label="Link To Evidence" />
                </div>
              </Collapse>
            </InputsContainer>
            <Footer>
              <ExpandButton
                type="submit"
                bgColor="var(--m-primary-btn-color)"
                disabled={isSubmitting}
              >
                Cancel
              </ExpandButton>
              <ExpandButton
                type="submit"
                bgColor="var(--m-primary-btn-color)"
                disabled={isSubmitting}
              >
                Submit
              </ExpandButton>
            </Footer>
          </FormContainer>
        )}
      </Formik>
    </Container>

  )
}

export default CreateDiscussionForm
